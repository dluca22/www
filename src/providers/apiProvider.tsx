
import { createContext, useContext, useMemo } from 'react';
import { ApiService } from '../services/httpService';
import { MockService } from '../services/mockService';

const ApiContext = createContext<ApiService | undefined >(undefined);
const MOCK_PROVIDER:boolean = false;

export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
  const apiService = useMemo(()=> {
    if(MOCK_PROVIDER){
      const mock: any = new MockService(); // just to test injection and context providing
      return mock;
    } else {
      return new ApiService({baseUrl: 'http://localhost:3001'});
    }
  },   []);

  return (
    <ApiContext.Provider value={apiService}>
      {children}
    </ApiContext.Provider>
  )
}

export const useApi = () => {
  const context = useContext(ApiContext);
  if(!context){
    throw new Error("Cannot use useApi outside the ApiProvider");
  }
  return context;
}
