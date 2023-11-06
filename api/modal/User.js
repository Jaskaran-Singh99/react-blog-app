const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
    username:{type:String, required:true, min:4, unique:true},
    password:{type:String, required:true, }
})

const UserModal =  mongoose.model('blogWebsiteCollection', UserSchema)

module.exports = UserModal
