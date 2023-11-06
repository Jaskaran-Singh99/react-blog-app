const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://Karan:Jaskaran70870@cluster0.41sr1.mongodb.net/?retryWrites=true&w=majority'

const connectDB = ()=>{
    return mongoose.connect(connectionString,{
    useNewUrlParser:true,
    // useCreateIndex:true,
    // useFindAndModify:false,
    useUnifiedTopology:true
})}

module.exports = connectDB