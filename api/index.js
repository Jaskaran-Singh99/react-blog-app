const express = require('express')
const cors = require('cors')
const connectDB = require('../api/db/connection')
const User = require('./modal/User')
const bcrypt = require('bcryptjs')
const app = express()

//bcrypt salt
const salt = bcrypt.genSaltSync(10)


//Middleware
app.use(cors())
app.use(express.json())

app.get('/register', (req, res)=>{
    res.json('Hello')
})
app.post('/register', async (req, res)=>{
   try{
    const {username, password} = req.body
    const userDoc = await User.create({username, password:bcrypt.hashSync(password,salt)})
    res.json(userDoc)

   }
   catch(err){
    res.json(err)
   }
})

app.post('/login',async (req, res)=>{
    const {username, password} = req.body
    const user = await User.findOne({username})
    const pass = bcrypt.compareSync(password, user.password);
    res.json(pass)
    
})

const port = 4000
const start = async()=> {
    try{
        await connectDB()
        app.listen(port, console.log(`The server is listening to port ${port}...`))
    }
    catch(err){
        console.log(err)
    } 
}

start()

// app.listen(port , console.log(`The server is listening to port ${port}... `))

