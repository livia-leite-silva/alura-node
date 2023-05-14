import express from "express";
import AuthorController from "../controllers/authorController.js";

const router = express.Router()

// Padrão express de rotas: mais expecífica pro menos expecífica 

router
    .get('/authors', AuthorController.authorList)
    .get('/authors/:id', AuthorController.authorById)
    .post('/authors', AuthorController.registerAuthor)
    .put('/authors/:id', AuthorController.updateAuthor)
    .delete('/authors/:id', AuthorController.deleteAuthor)

export default router
