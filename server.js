import app from './src/app.js'

//cria porta que receberá as requisições
const port = process.env.PORT || 3000 

//escuta porta 
app.listen(port, () => {
    console.log(`listening server in http://localhost:${port}`)
})
