const express = require('express')
const cors = require('cors')
const connectDB = require('../api/db/connection')
const User = require('./modal/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const app = express()

//bcrypt salt
const salt = bcrypt.genSaltSync(10)
const secret = 'thisissecretdonttellanyone'


//Middleware
app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(cookieParser())
app.use(express.json())

// Register page
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


// Login page
app.post('/login',async (req, res)=>{
    try{
        const {username, password} = req.body
        const user = await User.findOne({username})
        const passOk = bcrypt.compareSync(password, user.password);
        
        if(passOk){
            jwt.sign({username,id:user.id}, secret, {}, (err, token)=>{
                if(err){
                    throw err
                }
                else{
                    res.cookie('token', token).json('The token in assigned')
                }
            })
        }
        else{
            res.status(400).json('Please login first')
        }
    }
    catch(err){
        console.log(err)
    }
})


// Profile
app.get('/profile', (req, res)=>{
    const {token} = req.cookies
    jwt.verify(token, secret, {}, (err, info)=>{
        if(err){
            res.status(500).json(err)
        }
        else{
            res.json(info)
        }
    })
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

