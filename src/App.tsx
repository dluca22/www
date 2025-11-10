// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import { AddForm } from './components/AddForm'
import { Carousel } from './components/Carousel'
import { Navbar } from './components/Navbar'

function App() {
  const [formHidden, setFormHidden] = useState(true);
  return (
    <>
      <Navbar />
      <div className="row w-full flex justify-end">
        <button
          className='mr-0 rounded-lg text-white font-semibold p-2 bg-blue-600 hover:bg-blue-400'
          onClick={() => setFormHidden((isHidden) => !isHidden)}>
          Add
        </button>
      </div>
      <AddForm hidden={formHidden} />
      <Carousel />
    </>
  )
}

export default App
