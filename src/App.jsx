import { Route, Routes } from "react-router-dom";

import Home from "@/Routes/Home";
import Contact from "@/Routes/Contact";
import Detail from "@/Routes/Detail";
import Favs from "@/Routes/Favs";
import { useGlobalState } from "@/Context/Context";
import MainLayout from "@/Layout/MainLayout";

function App() {
  const { state } = useGlobalState();
  return (
    <div className={`App ${state.theme}`}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
