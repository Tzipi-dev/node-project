const mongoose = require('mongoose');
const UserDetails=new mongoose.Schema({
  id: Number, 
    username: String,
    email: String,
})
module.exports=mongoose.model('user',UserDetails)


