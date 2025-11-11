import { Recipe } from "../assets/recipe"
import type { SvRecipes } from "../assets/types"

export interface RecipeCardProps extends SvRecipes {
  // might extend
}

export const RecipeCard = (
  props: RecipeCardProps
) => {

  const recipe = new Recipe({...props})
  
  return (
    <div className="max-w-sm w-full rounded-md border border-fuchsia-500 p-4"  
    // {...(id !== undefined ? { id: id.toString() } : {})} 
    >
      <div className="mb-2 flex justify-between"> 
        <h2 className="text-xl font-bold text-fuchsia-600">{props.name}</h2>
        {props.type && 
          <div className="text-xs"><span className="text-gray-300 font-medium">{props.type}</span></div>
        }

      </div>

      {props.description && <p className="text-sm text-gray-300 mb-3">{props.description}</p>}

      <div className="flex justify-between text-sm text-gray-400">
        <div>Temp <span className="text-gray-300 font-medium">{props.temperature || '--'}</span></div>
        <div>Time <span className="text-gray-300 font-medium">{props.time || '--'}</span></div>
      </div>
    </div>

  )
}