import { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from "react";
import type { SvRecipes } from "../assets/types";

// custom hook to fetch data from file (or api)
function useRecipeFetch(): {
  recipes: SvRecipes[],
  searchTerms: string,
  setSearchTerms: (terms: string) => void;
} {
  // const [recipes, setRecipes] = useState<SvRecipes[]>([]);
  console.log('called useRecipeFetch');

  type RecipeState = { // declare what is the current state of the hook, providing both the data and the serch terms that are being passed into the hook
    recipes: SvRecipes[],
    searchTerms: string
  }

  type HookActions = { type: "setRecipes", payload: SvRecipes[] } // declare the type of the action and the returned payload
    | { type: "addRecipe", payload: SvRecipes }
    | { type: "setSearchTerms", payload: string }

  // useReducer ritorna un array di "stato" come abbiamo definito noi, e una callback di dispatch
  // come paremtri in entrata prende lo stato e un'azione

  /* useReducer mantiene lo stato del hook (recipes + search) e riceve azioni via dispatch.
   Qui gestisce l'azione "setRecipes" per aggiornare l'array delle ricette in modo immutabile:
   iniziale {recipes: [], search: ""} — dispatch({type: 'setRecipes', payload: data}) sostituisce recipes.
   Nota: default dovrebbe tornare state e aggiungere azioni per search/loading/error. */
  const [{ recipes, searchTerms }, dispatch] = useReducer(
    (state: RecipeState, action: HookActions) => {
      switch (action.type) {
        case 'setRecipes': {
          return {
            ...state,
            recipes: [...action.payload]
          }
        }
        case 'addRecipe': {
          return {
            ...state, // spread the whole state otherwise other object data like callback will be erased
            recipes: [...state.recipes, action.payload]
          }
        }
        case 'setSearchTerms': {
          return { ...state, searchTerms: action.payload }
        }

        default: {
          throw new Error('Unaccepted action: ' + action);
        }
      }
    },
    {
      recipes: [],
      searchTerms: ""
    }
  )

  useEffect(() => {
    fetch('../food.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json();
      })
      .then((data) => dispatch(
        {
          type: 'setRecipes',
          payload: data
        }
      ))
    // .catch((err) => setError(err.message))
    // .finally(() => setLoading(false));
  }, []);

  // the function that we will also expose to trigger the dispatch action
  // useCallback will avoid constant re-creation of this function
  const setSearchTerms = useCallback((terms: string) => {
    dispatch({
      type: 'setSearchTerms',
      payload: terms
    })
  }, [])

  const filteredRecipes = useMemo(
    () => recipes.filter(r => {
      return r.description?.toLocaleLowerCase().includes(searchTerms.toLocaleLowerCase())
        || r.name?.toLocaleLowerCase().includes(searchTerms.toLocaleLowerCase())
        || r.type?.toLocaleLowerCase().includes(searchTerms.toLocaleLowerCase())
    }), [recipes, searchTerms])

  return { recipes: filteredRecipes , searchTerms, setSearchTerms };
}

// create a context forcing type definition to the result of the function populating it, in this case, the useRecipeFetch
// since it cannot infer what will be the return of it, and will not accept a forced declaration, we can override it with the return type of the function that we use to populate its context value
const RecipeContext = createContext<ReturnType<typeof useRecipeFetch>>({} as unknown as ReturnType<typeof useRecipeFetch>); // type define in order to avoid inferring never[]


export function RecipeDataProvider({
  children
}: { children: React.ReactNode }) {
  return (
    <RecipeContext.Provider value={useRecipeFetch()}>
      {children}
    </RecipeContext.Provider>
  )
}

export function useRecipe(): { recipes: SvRecipes[], searchTerms: string, setSearchTerms: (terms: string) => void } {
  const context = useContext(RecipeContext);
  if (!context) {
    console.log('Error getting data from Context(RecipeContext)');
    throw new Error();
  }
  debugger

  return context;
}