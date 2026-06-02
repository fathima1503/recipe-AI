import { useState } from "react";

export function IngredientInput({onGenerate,loading}) {
   const [inputValue,setInputValue] = useState("");
   const [ingredients,setIngredients] = useState([]);

   function handleAdd() {
        setIngredients([...ingredients,inputValue]);
        setInputValue("");
   }

   return (
    <div className="bg-gray-900 rounded-2xl p-6 mb-6">
        <label htmlFor="inputValue" className="text-sm text-gray-400 mb-2 block">Ingredients</label>
        <div className="flex gap-2 mb-4">
            <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            name="inputValue"
            placeholder="e.g. tomato, garlic..."
            className="flex-1 bg-gray-800 text-white placeholder-gray-500 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-500"
            />            
            <button
            type="button"
            onClick={handleAdd}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl text-sm font-medium"
            >
                Add
            </button>
        </div>

        <ul className="flex flex-wrap gap-2 mb-4">
            {ingredients.map((ingredient, index) => (
                <li key={index} className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full">
                    {ingredient}
                </li>
            ))}
        </ul>

        <button
            type="button"
            onClick={() => onGenerate(ingredients)}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-medium text-sm"
        >
            ✨ Generate Recipe
        </button>

    </div>
   )

}