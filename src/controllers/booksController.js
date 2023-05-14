import books from "../models/Book.js"
import publishers from "../models/Publisher.js"

class BookController{

    static bookList = (request, response) => {

        books.find()
            .populate('author', 'name') //associacao de dados
            .exec((err, books) => {
                response.status(200).json(books)
            })
    }

    //conectar author e mostrar somente o nome 
    static bookById = (request, response) => {
        const {id} = request.params

        books.findById(id, (err, books) => {
            if(err){
                response.status(400).send({message: `${err.message} - id not found`})
            } else {
                response.status(200).send(books)
            }
        })
    }

    static bookListByPublisher = (request, response) => {
        const { publisher } = request.query //recebe a informacao da URL

        books.find({'publisher': publisher}, {}, (err, books) => {
            if(!err){
                response.status(200).send(books)
            } else {
                response.status(500).send({message: `${err.message} - error trying to find a book by publisher`})
            }
        })
    }

    //cadastro do livro novo é mandado no corpo da requisicao 
    static registerBook = (request, response) => {
        let book = new books(request.body) //add new book inside request's body

        book.save( (err) => {
            if (err){
                response.status(500).send({message: `${err.message} - error trying to register a new book`})
            } else {
                response.status(201).send(book.toJSON())
            }
        })
    }

    static updateBook = (request, response) => {
        const {id} = request.params

        books.findByIdAndUpdate(id, {$set: request.body}, (err) => {
            if(!err){
                response.status(200).send({message: 'book updated'})
            } else {
                response.status(500).send({message: err.message})
            }
        } )
    }

    static deleteBook = (request, response) => {
        const {id} = request.params

        books.findByIdAndDelete(id, (err) => {
            if(!err){
                response.status(200).send({message: 'book deleted'})
            } else {
                response.status(500).send({message: `${err.message} - error trying to delete a book`})
            }
        })
    }

  
}

export default BookController
