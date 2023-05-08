import mongoose from "mongoose"
import books from "./Book.js"

let authorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    book: {type: books, required: true},
})

// essa const ta recebendo um modelo guardado no banco com nome author
const author = mongoose.model('author', authorSchema)

export default author 