import { ApiProvider } from './apiProvider';
import { RecipeDataProvider } from './dataProvider';
import { ThemeContext } from '../App';


// Single provider to abstract away various contexts used throughout the app
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
  return (
    <ApiProvider> {/* Inject instance of ApiService class to abstract axios requests to Api endpoint  */}
      <RecipeDataProvider> {/* hide away the context context to an extensible provider accepting nested children components */}
        <ThemeContext.Provider value="dark"> {/* whenever we provide it to consumers, we can instantiate an arbitrary value*/}
          {children}
        </ThemeContext.Provider>
      </RecipeDataProvider>
    </ApiProvider>
  )
}
