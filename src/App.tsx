// import { useState } from 'react'
import { createContext, useCallback, useState } from 'react'
import './App.css'
import { RecipeForm } from './components/AddForm'
import { Carousel } from './components/Carousel'
import { Navbar } from './components/Navbar'
import { useRecipe } from './providers/dataProvider'
import { SearchBox } from './components/SearchBox'
import type { SvRecipe } from './assets/types'
import { AppProvider } from './providers/appProviders'

export const ThemeContext = createContext("light"); // set up a context with default value light

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<SvRecipe | undefined>();
  const [formHidden, setFormHidden] = useState(true);

  const { setRecipe } = useRecipe();

  const handleSubmitForm = (formData: SvRecipe) => {
    console.log('received', formData);
    debugger
    setRecipe(formData);
    setFormHidden(true);
  };

  const openEditForm = useCallback((recipe?: SvRecipe) => {
    setSelectedRecipe(recipe);
    setFormHidden((isHidden) => !isHidden)
  }, [])

  return (
    // <ApiProvider>
    //   <RecipeDataProvider> {/* hide away the context context to an extensible provider accepting nested children components */}
    //     <ThemeContext.Provider value="dark"> {/* whenever we provide it to consumers, we can instantiate an arbitrary value*/}
    <AppProvider>
      <Navbar />
      <div className="row w-full flex justify-between ">
        <SearchBox />
        <button
          className='mr-0 rounded-lg text-white font-semibold p-2 bg-blue-600 hover:bg-blue-400'
          onClick={() => openEditForm()}>
          Add
        </button>
      </div>
      {formHidden == false && // toggle hidden in this component because exiting before hooks is forbidden(?!?!?!)

        <RecipeForm
          recipe={selectedRecipe}
          onSubmitForm={handleSubmitForm}
        />
      }
      <Carousel onEditRecipe={openEditForm} />
    </AppProvider>
    //     </ThemeContext.Provider>
    //   </RecipeDataProvider>
    // </ApiProvider>
  )
}

export default App
