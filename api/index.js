const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3001

app.use(express.json())
app.use(express.urlencoded( { extended: false } ))
app.use(cors())

app.use('/api',(require('./routes/index')))

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en puerto: ${PORT}`)
})