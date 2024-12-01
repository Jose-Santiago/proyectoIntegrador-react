import { useReducer, createContext, useEffect, useContext } from "react";
import { reducer } from "@/Reducers/reducer";
import axios from "axios";

const GlobalState = createContext();
const initialState = {
  theme: "light",
  dentistas: [],
  favoritos: [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const URL = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(URL).then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <GlobalState.Provider value={{ state, dispatch }}>
      {children}
    </GlobalState.Provider>
  );
};

export default Context;

export const useGlobalState = () => useContext(GlobalState);
