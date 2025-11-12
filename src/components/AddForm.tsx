import { useEffect, useState, type FC } from "react";
import type { SvRecipe } from "../assets/types";
import type { Recipe } from "../assets/recipe";


export interface RecipeFormProps {
  recipe?: SvRecipe,
  onSubmitForm: (formData: SvRecipe) => void
}
export const RecipeForm: FC<RecipeFormProps> = ({
  recipe = null,
  onSubmitForm
  
}) => {
  // const { setRecipe } = useRecipe(); // handled in the parent eleement

  const [recipeForm, setRecipeForm] = useState<SvRecipe>(emptyForm());
  
  // moved hidden early exit outside because React complains when one rendere exits immediately while another will trigger more hooks than previous renders
  // this can be solved by moving this block after the hooks, but i don't like it and i won't accept this behaviour
  // if (hidden) { 
  //   return;
  // }

  useEffect(() => {
    if (recipe != null) {
      setRecipeForm(recipe);
    }
  }, [recipe])

  function onSubmit(event: React.ChangeEvent<HTMLFormElement>) { 
    event.preventDefault();
    /* handling like this would require other manual labour to re-convert checkbox to boolean that i already do in the handleChange
    const formData = new FormData(event.currentTarget);
    const newValues = Object.fromEntries(formData.entries()); 
    debugger*/
    onSubmitForm(recipeForm);

  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let { name, value, type } = e.target;
    let newValue: string | number | boolean = type === 'checkbox' ?(e.target as HTMLInputElement).checked : value; // force inferring typing on html element when there are multiplke html elemets delcared because textArea does not have checked directive
    
    setRecipeForm(prevData => ({
    ...prevData,
    [name as keyof Recipe]: newValue
  }));

  }

  function emptyForm() {
    return {
      name: '',
      type: '',
      description: undefined,
      temperature: undefined,
      time: undefined,
      extraPrep: false,
    }
  }

  return (
    <form className="max-w-md mx-auto p-6 rounded-lg text-gray-100 bg-purple-900/20 border border-purple-900"
      onSubmit={onSubmit}
    >
      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-purple-300">Name</span>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={recipeForm.name}
            className="mt-1 block w-full rounded-md border border-purple-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-purple-300">Type</span>
          <input
            onChange={handleChange}
            type="text"
            name="type"
            value={recipeForm.type}
            className="mt-1 block w-full rounded-md border border-purple-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-purple-300">Description</span>
          <textarea
            onChange={handleChange}
            name="description"
            value={recipeForm.description || ''}
            rows={4}
            className="mt-1 block w-full rounded-md border border-purple-700 px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="text-sm font-medium text-purple-300">Temperature</span>
            <input
              onChange={handleChange}
              type="number"
              name="temperature"
              value={recipeForm.temperature || 0}
              className="mt-1 block w-full rounded-md border border-purple-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-purple-300">Time (min)</span>
            <input
              onChange={handleChange}
              type="number"
              name="time"
              value={recipeForm.time || 0}
              className="mt-1 block w-full rounded-md border border-purple-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </label>
        </div>

        <label className="flex items-center gap-2">
          <input
            onChange={handleChange}
            type="checkbox"
            name="extraPrep"
            checked={recipeForm.extraPrep || false}
            className="h-4 w-4 rounded border-purple-600 bg-purple-800 text-purple-400 focus:ring-purple-400"
          />
          <span className="text-sm text-purple-300">Extra prep required</span>
        </label>
        <button
          type="submit"
          className='mr-0 rounded-lg text-white font-semibold p-2 bg-purple-600 hover:bg-purple-400'>
          { recipe == undefined ? 'Submit' : 'Update' }
        </button>
      </div>

    </form>

  )
}