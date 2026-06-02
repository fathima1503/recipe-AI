import { useRecipe } from "../hooks/useRecipe.js";
import { IngredientInput} from "../components/IngredientInput.jsx";
import { RecipeCard } from "../components/RecipeCard.jsx";

export function Home(){
    const { recipe, loading, error, handleGenerateRecipe } = useRecipe()


    return (
    <div className="min-h-screen bg-gray-950 text-white">
        <div className="max-w-xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-purple-400 mb-2">🍳 Recipe AI</h1>   
            <p className="text-gray-400 text-sm mb-8">Enter your ingredients and let AI suggest a recipe</p>         
            <IngredientInput onGenerate={handleGenerateRecipe} loading={loading} />
            {loading && <p>Generating your recipe...</p>}
            {error && <p>{error}</p>}
            <RecipeCard recipe={recipe} />
        </div>
    </div>
)
}