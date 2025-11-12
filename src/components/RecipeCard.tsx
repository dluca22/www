import type { FC } from "react"
import { Recipe } from "../assets/recipe"
import type { SvRecipe } from "../assets/types"

export interface RecipeCardProps extends SvRecipe {
  // might extend
  onEdit: (recipe: SvRecipe) => void
}

export const RecipeCard: FC<RecipeCardProps> = (
  { onEdit, ...recipeData }
) => {

  // const recipe = new Recipe(recipeData);

  return (
    <div className="max-w-sm w-full rounded-md border border-fuchsia-500 p-4"
    >
      <div className="mb-2 flex justify-between">
        <h2 className="text-xl font-bold text-fuchsia-600">{recipeData.name}</h2>
        {recipeData.type &&
          <div className="text-xs"><span className="text-gray-300 font-medium">{recipeData.type}</span></div>
        }
      </div>

      {recipeData.description && <p className="text-sm text-gray-300 mb-3">{recipeData.description}</p>}

      <div className="flex justify-between text-sm text-gray-400">
        <div>Temp <span className="text-gray-300 font-medium">{recipeData.temperature || '--'}</span></div>
        <div>Time <span className="text-gray-300 font-medium">{recipeData.time || '--'}</span></div>
      </div>

      <button
        className='mr-0 rounded-lg text-white font-semibold p-2 bg-pink-600 hover:bg-pink-400'
        onClick={() => onEdit(recipeData)}>
        Edit
      </button>
    </div>
  )
}