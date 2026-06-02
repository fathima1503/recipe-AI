import express from 'express'
import { validateIngredients } from '../middleware/validateIngredients.js'
import { generateRecipe } from '../controllers/recipeController.js'


const recipeRouter = express.Router()

recipeRouter.post('/generate', validateIngredients, generateRecipe)

export default recipeRouter