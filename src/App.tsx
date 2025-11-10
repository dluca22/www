// import { useState } from 'react'
import './App.css'
import meals from './assets/food.json'
import { Carousel } from './components/Carousel'
import { Navbar } from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  console.log(meals)


  return (
    <>
      <Navbar/>
      <Carousel/>

    </>
  )
}

export default App
