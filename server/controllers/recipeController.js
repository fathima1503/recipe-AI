import model from "../config/gemini.js";

export async function generateRecipe(req,res) {
    try {
        const { ingredients } = req.body
        const prompt = `I have these ingredients: ${ingredients}. Suggest a detailed recipe I can make with them. Include ingredients, steps, and cooking time.`
        const result = await model.generateContent(prompt)
        const recipe = result.response.text()
        res.status(200).json({ recipe })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Something went wrong' })
    }
}

