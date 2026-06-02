
export function validateIngredients(req,res,next) {
   const {ingredients} = req.body
   if (!ingredients || ingredients.length === 0) {
    res.status(400).json({ error: 'add atleast one ingredient' })
   } else {
    next()
   }
}