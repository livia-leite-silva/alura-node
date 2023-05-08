import authors from "../models/Author.js"

class AuthorController{

    static authorList = (request, response) => {
        authors.find((err, author) => {
            response.status(200).json(author)
        })
    }

    static authorById = (request, response) => {
        const {id} = request.params

        authors.findById(id, (err, authors) => {
            if(err){
                response.status(400).send({message: `${err.message} - id not found`})
            } else {
                response.status(200).send(authors)
            }
        })
    }

    //cadastro do livro novo é mandado no corpo da requisicao 
    static registerAuthor = (request, response) => {
        let author = new authors(request.body) //add new author inside request's body

        author.save( (err) => {
            if (err){
                response.status(500).send({message: `${err.message} - error trying to register a new author`})
            } else {
                response.status(201).send(author.toJSON())
            }
        })
    }

    static updateAuthor = (request, response) => {
        const {id} = request.params

        authors.findByIdAndUpdate(id, {$set: request.body}, (err) => {
            if(!err){
                response.status(200).send({message: 'author updated'})
            } else {
                response.status(500).send({message: err.message})
            }
        } )
    }

    static deleteAuthor = (request, response) => {
        const {id} = request.params

        authors.findByIdAndDelete(id, (err) => {
            if(!err){
                response.status(200).send({message: 'author deleted'})
            } else {
                response.status(500).send({message: `${err.message} - error trying to delete a author`})
            }
        })
    }
} 

export default AuthorController