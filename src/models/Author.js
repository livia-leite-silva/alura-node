import mongoose from "mongoose"

let authorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    nationality: {type: String, required: true},
},
{
    versionKey: false
}
)

// essa const ta recebendo um modelo guardado no banco com nome author
const authors = mongoose.model('authors', authorSchema)

export default authors 