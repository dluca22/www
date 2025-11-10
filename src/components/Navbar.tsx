import { useContext } from "react"
import { ThemeContext } from "../App"


export const Navbar = () => {
  const theme = useContext(ThemeContext);  // get values from context avoiding prop drilling
  return (
    <h1 className="hover:text-red-500 w-full text-center text-4xl mb-5">
      Sous Vide Recipe & Pantry Manager <span className="ml-100 text-sm">Theme {theme}</span>
    </h1>
  )
}