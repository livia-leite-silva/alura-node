import express from "express"
import PublisherController from "../controllers/publisherController.js"

const router = express.Router()

router
    .get('/publishers', PublisherController.publisherList)
    .get('/publishers/:id', PublisherController.publisherListById)
    .post('/publishers', PublisherController.registerPublisher)
    .put('/publishers/:id', PublisherController.updatePublisher)
    .delete('/publishers/:id', PublisherController.deletePublisher)

export default router