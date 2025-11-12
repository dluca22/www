import { RecipeCard } from "./RecipeCard";
import { useRecipe } from "../services/dataProvider";
import type { SvRecipe } from "../assets/types";
import type { FC } from "react";
import type { Recipe } from "../assets/recipe";

interface CarouselProps {
  onEditRecipe: (recipe: SvRecipe|Recipe) => void
}

export const Carousel: FC<CarouselProps> = (
  {onEditRecipe}
) => {
  const { recipes } = useRecipe();

  const children = recipes.map(r =>

    <RecipeCard
      key={r.id}
      onEdit={onEditRecipe}
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
