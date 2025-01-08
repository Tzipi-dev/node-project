const express = require('express')
const { AddRecipe,DeleteRecipe,UpdateRecipe } = require('../controllers/recipeController')
const router = express.Router()

router.post('/', AddRecipe) 
router.delete('/:id', DeleteRecipe) 
router.put('/:id', UpdateRecipe) 

module.exports = router