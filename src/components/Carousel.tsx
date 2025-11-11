import { RecipeCard } from "./RecipeCard";
import { useRecipe } from "../services/dataProvider";

export const Carousel = () => {
  const {recipes} = useRecipe();

  const children = recipes.map(r =>
    
    <RecipeCard
      key={r.id}
      {...r}
    />
  )
    debugger
  

  return (
    <div >
      <h1 className="text-3xl mb-3">Recipe Carousel</h1>
      <div className="flex gap-2">
        {children}
      </div>
    </div>
  )
}
