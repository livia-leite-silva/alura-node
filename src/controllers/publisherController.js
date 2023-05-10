import publishers from "../models/Publisher.js";

class PublisherController{

    static publisherList = (request, response) => {
        publishers.find()
            .populate('books', 'title')
            .exec((err, publishers) => {
                response.status(200).json(publishers)
            })
    }

    static publisherListById = (request, response) => {
        const {id} = request.params
        publishers.findById(id, (err, publishers) => {
            if(err){
                response.status(500).send({message: `${err.message} - error in finding id`})
            } else {
                response.status(200).send(publishers)
            }
        })
    }

    static registerPublisher = (request, response) => {
        let publisher = new publishers(request.body)
        publisher.save((err) => {
            if(!err){
                response.status(200).send('publisher added with success')
            } else {
                response.status(500).send({message: `${err.message} - error trying create new publisher`})
            }
        })
    }

    static updatePublisher = (request, response) => {
        const {id} = request.params
        publishers.findByIdAndUpdate(id, {$set: request.body}, (err) => {
            if(!err){
                response.status(200).send('publisher updated with success')
            } else {
                response.status(500).send({message: `${err.message} - error trying update a publisher`})
            }
        })
    }

    static deletePublisher = (request, response) => {
        const {id} = request.params
        publishers.findByIdAndDelete(id, (err) => {
            if(!err){
                response.status(200).send('publisher deleted with success')
            } else {
                response.status(500).send({message: `${err.message} - error trying delete a publisher`})
            }
        })
    }
}

export default PublisherController