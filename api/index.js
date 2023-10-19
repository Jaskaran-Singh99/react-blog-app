const express = require('express')
const cors = require('cors')
const app = express()

//Middleware
app.use(cors())
app.use(express.json())


app.post('/register', (req, res)=>{
    const {username, password} = req.body
    res.json({requestData:{username, password}})
})

const port = 4000
app.listen(port , console.log(`The server is listening to port ${port}... `))

//mongodb+srv://<username>:<password>@cluster0.41sr1.mongodb.net/?retryWrites=true&w=majority