export interface SvRecipe {
  id?: number;
  name: string;
  type?: string;
  description?: string;
  temperature?: number;
  time?: number;
  extraPrep: boolean;
}

// export const Veggie = new Set(['salad', 'pumkin']);
// export const Fish = new Set(['salmon', 'fish', 'tuna']);
// export const Meat = new Set(['beef', 'pork', 'chicken', 'lamb']);
export const FoodGroups = {
  veggie: new Set(['salad', 'pumkin']),
  fish: new Set(['salmon', 'fish', 'tuna']),
  meat: new Set(['beef', 'pork', 'chicken', 'lamb']),
}

export type RecipeState = { // declare what is the current state of the hook, providing both the data and the serch terms that are being passed into the hook
  recipes: SvRecipe[],
  searchTerms: string,
  // isLoading: boolean,
  errored?: boolean,
  errorMessage?: string
}


export type HookActions = { type: "setRecipes", payload: SvRecipe[] } // declare the type of the action and the returned payload
  | { type: "addRecipe", payload: SvRecipe }
  | { type: "updateRecipe", payload: SvRecipe }
  | { type: "setSearchTerms", payload: string }
  | { type: 'setError', payload: string } 


export type ErrorResponse = { errored: true, errorMessage: string }