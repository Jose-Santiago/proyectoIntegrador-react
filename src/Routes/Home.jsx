//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useGlobalState } from "../Context/Context";

const Home = () => {
  const prueba = useGlobalState();
  console.log(prueba);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  );
};

export default Home;
