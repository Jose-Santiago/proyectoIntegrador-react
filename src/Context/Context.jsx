import { useReducer, createContext, useEffect, useContext } from "react";
import { reducer } from "@/Reducers/reducer";
import axios from "axios";

const GlobalState = createContext();
const initialState = {
  theme: "light",
  dentistas: [],
  favoritos: JSON.parse(localStorage.getItem("favs")) || [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const URL = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(URL)
      .then((res) => {
        dispatch({ type: "GET_DENTIST", payload: res.data });
      })
      .catch((err) => {
        console.log("error al consultar a la API: ", err);
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
