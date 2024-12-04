import "@/Styles/index.css";
import { useGlobalState } from "@/Context/Context";
import { Link } from "react-router-dom";
const Card = (dentist) => {
  const { name, username, id } = dentist;
  const { state, dispatch } = useGlobalState();
  const addFav = () => {
    dispatch({ type: "ADD_FAVS", payload: dentist });
  };
  const estaEnFavoritos = state.favoritos.some((fav) => fav.id === dentist.id);
  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <Link to={`/dentist/${id}`}>
        <img src="/images/doctor.jpg" className="cardImg" />
        <h3>{name}</h3>
      </Link>
      <h4>{username}</h4>
      <button onClick={addFav} className="favButton">
        <i
          className={
            estaEnFavoritos
              ? "bx bx-bookmark-heart like"
              : "bx bx-bookmark-heart"
          }
        ></i>
      </button>
    </div>
  );
};

export default Card;
