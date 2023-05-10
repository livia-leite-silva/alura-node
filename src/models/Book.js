import mongoose from "mongoose"

//criando novo schema 
//var representa como vai ta o schema no banco 
let bookSchema = new mongoose.Schema({
    id: {type: String},
    title: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true},
    publisher: {type: String, required: true},
    pages: {type: Number}
})

//mandando pra la(banco) com o nome e schema  
const books = mongoose.model('books', bookSchema)

export default books