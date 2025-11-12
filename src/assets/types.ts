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