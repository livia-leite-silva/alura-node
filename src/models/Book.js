import mongoose from "mongoose"

//criando novo schema 
let bookSchema = new mongoose.Schema({
    id: {type: String},
    title: {type: String, required: true},
    author: {type: String, required: true},
    publisher: {type: String, required: true},
    pages: {type: Number}
})

//mandando pra la(banco) com o nome e schema  
const books = mongoose.model('books', bookSchema)

export default books