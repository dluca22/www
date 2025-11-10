import { createContext, useEffect, useState } from "react";
import type { SvRecipes } from "../assets/types";
 
// custom hook to fetch data from file (or api)
export function useRecipeFetch(): {recipes: SvRecipes[]} {
  const [recipes, setRecipes] = useState<SvRecipes[]>([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  console.log( 'called hook' );
  useEffect(() => {
    fetch('../food.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((data) => setRecipes(data))
      // .catch((err) => setError(err.message))
      // .finally(() => setLoading(false));
  }, []);
// 
  return {recipes};
}

// set context to provide fetched recipes, (manually declare type as return of hook useRecipeFetch)
export const RecipeContext = createContext< ReturnType<typeof useRecipeFetch>>({recipes: [] as SvRecipes[]}); // type define in order to avoid inferring never[]
