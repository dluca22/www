import { useCallback, useState } from "react";
import { RecipeCard } from "./RecipeCard"


export const Carousel = () => {
  const [count, setCount] = useState(0);
  



  const loggit = useCallback((cardName: string) => {
    console.log(cardName)
    console.log('inside')
  }, []);

  console.log('Carousel render – loggit identity:', loggit === loggit )

  const children = [0,1,2].map(r => 
    <RecipeCard key={r} 
    name={`Card-${r}`}
    onMouseEnter={loggit}
    />
  )

  
  
  return (
    <h1 className="text-cyan-700 hover:text-blue-500 "
      onMouseLeave={() => setCount((prevVal) => prevVal + 1)}
    >
      Hi, I am Carousel
      <div className="flex gap-2">
        { children }
      </div>
    </h1>
  )
}
