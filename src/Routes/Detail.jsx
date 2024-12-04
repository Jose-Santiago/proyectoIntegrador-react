//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import style from "@/Styles/Detail.module.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import TableDetail from "../Components/TableDetail";
import { useGlobalState } from "../Context/Context";

const Detail = () => {
  const { state } = useGlobalState();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const URL = "https://jsonplaceholder.typicode.com/users/" + id;
  const [dentist, setDentist] = useState({});
  useEffect(() => {
    axios(URL)
      .then((res) => {
        console.log(res.data);
        setDentist(res.data);
      })
      .catch((err) => {
        console.log("error al consultar a la API: ", err);
      });
  }, []);

  return (
    <div className={style.detail}>
      <h1 className={state.theme}>ID Dentist: {dentist.id} </h1>
      <div className={style.name}>{dentist.name}</div>
      <div className={style.divBtns}></div>
      <div className={style.tableContainer}>
        <TableDetail dentist={dentist} />
      </div>
    </div>
  );
};

export default Detail;
