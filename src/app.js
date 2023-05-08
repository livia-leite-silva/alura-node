
import express from "express" //importacao do framework que disponibiliza nosso http 
import db from "./config/dbConnect.js" // importa conexao do banco de dados 
import routes from "./routes/index.js"

db.on('error', console.log.bind(console, 'Connection Error')) //erro na conexao com banco de dados 
db.once('open', () => console.log('Successful Connection with database ')) // abre conexao com banco de dados 

const app = express() //recebe instacia do express

app.use(express.json()) //possibilita receber docs json (necessaria no post)
routes(app)

export default app


// app.get('/books/:id', (request, response) => {
//     let index = searchBook(request.params.id)
//     response.json(books[index])
// })

// app.post('/books', (request, response) => {
//     books.push(request.body) //add new book in array inside request's body
//     //why request? because method post is adding/requesting something
//     //otherwise method get request is expecting getting information
//     response.status(201).send('new book added')
// })

// app.put('/books/:id', (request, response) => {
//     let {id} = request.params
//     let index = searchBook(id)
//     books[index].title = request.body.title

//     response.json(books)
// })

// app.delete('/books/:id', (request, response) => {
//     let {id} = request.params
//     let index = searchBook(id)
//     books.splice(index, 1)
//     response.send(`book ${id} was removed`)

// })

//funcao da posicao do livro no array a .findIndex vai comparar com um novo 
//objeto para saber se chegou?? pesquisar!!!
// function searchBook(id){
//     return books.findIndex(book => book.id == id)
// }