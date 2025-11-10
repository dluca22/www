
export interface RecipeCardProps {
  name:string, 
  onMouseEnter?: (text:string) => void
}

export const RecipeCard = (
  { name, onMouseEnter }: RecipeCardProps
) => {
  // const [count, setCount] = useState(0);
    console.log(`${name} render`);

  return (
    <h6 
      className="border text-purple-500 p-2 rounded-md"
      onMouseEnter={() => onMouseEnter?.(name)}
      // onMouseLeave={() => setCount((prevVal) => prevVal + 1)}
      >
      {name} = 
    </h6>
  )
}