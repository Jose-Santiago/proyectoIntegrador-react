import Card from "../Components/Card";
import style from "@/Styles/Favs.module.css";
import { useGlobalState } from "../Context/Context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useGlobalState();
  const { favoritos } = state;
  console.log(favoritos);

  return (
    <div className={style.containerFavs}>
      <h1>Dentistas Favoritos!!!</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favoritos.map((dentista) => (
          <Card
            key={dentista.id}
            id={dentista.id}
            name={dentista.name}
            username={dentista.username}
          />
        ))}
      </div>
    </div>
  );
};

export default Favs;
