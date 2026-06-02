const BASE_URL = import.meta.env.VITE_API_BASE_URL

export async function generateRecipe(ingredients) {
    try {
            const response = await fetch(`${BASE_URL}/generate`, {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({ingredients})
            })

            const data = await response.json()
            return data.recipe
        } 
    
    catch (error) 
    {
        throw error
    }
    
}


