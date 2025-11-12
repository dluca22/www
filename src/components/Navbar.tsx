import { useContext, useEffect } from "react"
import { ThemeContext } from "../App"
import { useApi } from "../providers/apiProvider";
import type { SvRecipe } from "../assets/types";
import type { ApiService } from "../services/httpService";

export const Navbar = () => {
  const api: ApiService = useApi();
  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const data = await api.get<SvRecipe[]>('/recipes');
        if (!mounted) return;
        console.log(data);
        debugger;

      } catch (error) {
        debugger;
        console.log(error);
      }

    }
    fetchData();

    return () => { mounted = false; }

  }, [])

  const theme = useContext(ThemeContext);  // get values from context avoiding prop drilling
  return (
    <h1 className="hover:text-red-500 w-full text-center text-4xl mb-5">
      Sous Vide Recipe & Pantry Manager <span className="ml-100 text-sm">Theme {theme}</span>
    </h1>
  )
}