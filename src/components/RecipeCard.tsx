import type { SvFood } from "../assets/types"

export interface RecipeCardProps extends SvFood {
  // might extend
}

export const RecipeCard = (
  { id, name, description, temperature, time, extraPrep }: RecipeCardProps
) => {
  

  return (
    <div className="max-w-sm w-full rounded-md border border-fuchsia-500 p-4" id={id.toString()}>
  <div className="mb-2">
    <h2 className="text-xl font-bold text-fuchsia-600">{name}</h2>
  </div>

  {description && <p className="text-sm text-gray-300 mb-3">{description}</p>}

  <div className="flex justify-between text-sm text-gray-400">
    <div>Temp <span className="text-gray-300 font-medium">{temperature || '--'}</span></div>
    <div>Time <span className="text-gray-300 font-medium">{time || '--'}</span></div>
  </div>
</div>

  )
}