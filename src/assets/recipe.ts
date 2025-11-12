import { FoodGroups, type SvRecipe } from "./types";


export class Recipe implements SvRecipe {
  id?: number;
  name: string = '';
  type: string = '';
  description?: string;
  temperature?: number;
  time?: number;
  extraPrep: boolean = false;
 
  constructor(data?: SvRecipe){
    if(data){
      Object.assign(this, data)
    }
  }

  get isMeat(){
    return FoodGroups.meat.has(this.type);
  }

  get isFish(){
    return FoodGroups.fish.has(this.type);
  }

  get isVeggie(){
    return FoodGroups.veggie.has(this.type);
  }
}
