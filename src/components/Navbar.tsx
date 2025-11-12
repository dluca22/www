import { useContext } from "react"
import { ThemeContext } from "../App"
// import { useApi } from "../services/apiProvider";

export const Navbar = () => {
  // const mockup:any = useApi();
  // console.log(mockup.post()); // can be called from context

  const theme = useContext(ThemeContext);  // get values from context avoiding prop drilling
  return (
    <h1 className="hover:text-red-500 w-full text-center text-4xl mb-5">
      Sous Vide Recipe & Pantry Manager <span className="ml-100 text-sm">Theme {theme}</span>
    </h1>
  )
}