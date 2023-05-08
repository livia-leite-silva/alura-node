import express from "express" //é necessario nessa pagina pq tem os metodos: get...
import BookController from "../controllers/booksController.js"

const router = express.Router()

router
    .get('/books', BookController.bookList)
    .get('/books/:id', BookController.bookById)
    .post('/books', BookController.registerBook)
    .put('/books/:id', BookController.updateBook)
    .delete('/books/:id', BookController.deleteBook)

export default router