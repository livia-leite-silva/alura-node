//  o index vai receber todas as rotas e sera o unico arquivo importado pro app 
//  assim n precisamos importar cada arquivo das rotas

import express from "express";
import books from "./booksRoutes.js"
import authors from "./authorRoutes.js"
import publishers from "./publisherRoutes.js";

const routes = (app) => {
    
    app.route('/').get((request, response) => {
        response.status(200).send({titulo: "curso de node"})
    })

    app.use(
        express.json(),
        books,
        authors,
        publishers,
    )
}

export default routes