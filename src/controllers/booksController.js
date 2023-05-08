import books from "../models/Book.js"

class BookController{

    static bookList = (request, response) => {
        books.find((err, books) => {
            response.status(200).json(books)
        })
    }

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
