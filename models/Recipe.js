const mongoose = require('mongoose');
const RecipeDetails=new mongoose.Schema({
  name:String,
  category:String,
  instructions:Array
})
module.exports=mongoose.model('recipe',RecipeDetails) 


