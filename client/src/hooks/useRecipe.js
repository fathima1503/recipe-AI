import { useState } from "react";
import { generateRecipe } from "../services/recipeService.js";


export function useRecipe() {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleGenerateRecipe(ingredients) {
            try {
                setLoading(true);
                setError(null);
                const result = await generateRecipe(ingredients);
                setRecipe(result);
                setLoading(false);
            } catch (error) {
                setError("error loading the recipe");
                setLoading(false)
            }
    
    }

    return { recipe, loading, error, handleGenerateRecipe }
}

