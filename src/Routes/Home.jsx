//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { useGlobalState } from "@/Context/Context";
import Card from "@/Components/Card";
import { useEffect } from "react";
const Home = () => {
  const { state } = useGlobalState();
  console.log(state);
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favoritos));
  }, [state.favoritos]);

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.dentistas.map((dentista) => (
          <Card
            key={dentista.id}
            id={dentista.id}
            name={dentista.name}
            username={dentista.username}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
