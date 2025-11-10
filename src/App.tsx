// import { useState } from 'react'
import { createContext, useState } from 'react'
import './App.css'
import { AddForm } from './components/AddForm'
import { Carousel } from './components/Carousel'
import { Navbar } from './components/Navbar'
import { RecipeDataProvider } from './services/dataProvider'
import { SearchBox } from './components/SearchBox'

export const ThemeContext = createContext("light"); // set up a context with default value light

function App() {
  const [formHidden, setFormHidden] = useState(true);

  return (
    <RecipeDataProvider> {/* hide away the context context to an extensible provider accepting nested children components */}
      <ThemeContext.Provider value="dark"> {/* whenever we provide it to consumers, we can instantiate an arbitrary value*/}
        <Navbar />
        <div className="row w-full flex justify-between ">
          <SearchBox/>
          <button
            className='mr-0 rounded-lg text-white font-semibold p-2 bg-blue-600 hover:bg-blue-400'
            onClick={() => setFormHidden((isHidden) => !isHidden)}>
            Add
          </button>
        </div>
        <AddForm hidden={formHidden} />
        <Carousel />
      </ThemeContext.Provider>
    </RecipeDataProvider>

  )
}

export default App
