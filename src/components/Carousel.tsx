// import { useCallback, useState } from "react";
import { RecipeCard } from "./RecipeCard"
import meals from '../assets/food.json'
import type { SvFood } from "../assets/types"

export const Carousel = () => {
  console.log(meals)
  const recipeMeals: SvFood[] = meals

  const children = recipeMeals.map(r =>
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
