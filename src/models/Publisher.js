import mongoose from "mongoose";

let publisherSchema = new mongoose.Schema({
    name: {type: String, required: true},
    books: {type: mongoose.Schema.Types.ObjectId, ref: 'books', requerid: true},
    owner: {type: String, required: true},
    fundationYear: {type: String}
},
{
    versionKey: false
})

const publishers = mongoose.model('publishers', publisherSchema)

export default publishers