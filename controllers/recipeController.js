const Recipe = require('../models/Recipe');
exports.AddRecipe = async(req,res) =>{
    const recipe = await Recipe.create(req.body);
    res.json(recipe)
}
exports.getAllRecipes = async (req, res) => {
    try {

      const recipes = await Recipe.find();
      res.json(recipes);
    } catch (error) {
      console.error('Failed to get recipes:', error);
      res.status(500).json({ message: 'Failed to get recipes' });
    }
  };




  exports.updateRecipe = async (req, res) => {
    const { recipeId } = req.params;
    const { name, category,instructions} = req.body;
  
    try {
      const updatedRecipe = await User.findOneAndUpdate(
        { recipeId: recipeId }, 
        { name, category, instructions},
        { new: true }
      );
  
      if (!updatedRecipe) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updatedRecipe);
    } catch (error) {
      console.error('Failed to update recipe:', error);
      res.status(500).json({ message: 'Failed to update recipe' });
    }
  };
  

  exports.deleteRecipe = async (req, res) => {
    const  recipeId  = req.params.recipeId;
  console.log(recipeId);
    try {
      const deletedRecipe = await Recipe.findOneAndDelete({ recipeId: recipeId });
      if (!deletedRecipe) {
        return res.status(404).json({ message: 'recipe not found' });
      }
      res.json({ message: 'recipe deleted successfully' });
    } catch (error) {
      console.error('Failed to delete recipe:', error);
      res.status(500).json({ message: 'Failed to delete recipe' });
    }
  };

  exports.getRecipeByName = async (req, res) => {
    const { name } = req.params;
    console.log(name)
  
    try {
      const recipe = await Recipe.findOne({ name });
      if (!recipe) {
        return res.status(404).json({ message: 'recipe not found' });
      }
      res.json(recipe);
    } catch (error) {
      console.error('Failed to get recipe:', error);
      res.status(500).json({ message: 'Failed to get recipe' });
    }
  };


 