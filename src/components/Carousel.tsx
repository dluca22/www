import { RecipeCard } from "./RecipeCard"
import { RecipeContext } from "../services/dataProvider"
import { useContext } from "react";

export const Carousel = () => {
  // const {recipes} = useFetchRecipe();
  const {recipes} = useContext(RecipeContext);

  const children = recipes.map(r =>
    <RecipeCard
      key={r.id}
      {...r}
    />
  )

  return (
    <div >
      <h1 className="text-3xl mb-3">Recipe Carousel</h1>
      <div className="flex gap-2">
        {children}
      </div>
    </div>
  )
}
