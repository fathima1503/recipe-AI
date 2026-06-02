
import ReactMarkdown from 'react-markdown'

export function RecipeCard({recipe}) {
    if(!recipe) {
        return null
    }
    else{
        return(
            <div className="bg-gray-900 rounded-2xl p-6 mt-6">
                <h2 className="text-xl font-semibold text-purple-400 mb-4">Your Recipe</h2>
                <div className="text-gray-300 text-sm leading-relaxed prose prose-invert max-w-none">
                    <ReactMarkdown>{recipe}</ReactMarkdown>
                </div>
            </div>
        )
    }
    
}