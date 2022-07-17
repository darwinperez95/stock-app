require('dotenv').config()
const express = require('express')

const app= express()

app.get('/', (req, res) => {
console.log("peticion recibida")

res.send('<h1>Hola Mundo bueno!</h1>')

})

const PORT = oricess.env.PORT || 4000


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto 4000  ${PORT}`)    
})

