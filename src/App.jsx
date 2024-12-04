import { Route, Routes } from "react-router-dom";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Home from "@/Routes/Home";
import Contact from "@/Routes/Contact";
import Detail from "@/Routes/Detail";
import Favs from "@/Routes/Favs";
import { useGlobalState } from "@/Context/Context";

function App() {
  const { state } = useGlobalState();
  return (
    <div className={`App ${state.theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
