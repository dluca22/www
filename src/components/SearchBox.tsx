import { useRecipe } from "../services/dataProvider";


export const SearchBox = () => {
  const {searchTerms, setSearchTerms} = useRecipe();
  return (
    <input type="text" 
    name="searchBar" 
    id="recipe-search" 
    className="rounded-3xl border-1 border-purple-900 focus:border-purple-700 shadow-sm shadow-purple-900 text-lg p-2 px-5 w-[90%]"
    placeholder="search recipe by name, description or type"
    value={searchTerms}
    onChange={(e) => setSearchTerms(e.target.value)}
    />
  )
}