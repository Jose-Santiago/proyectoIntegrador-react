import ReactDOM from "react-dom/client";
import "@/Styles/index.css";
import App from "@/App";
import { BrowserRouter } from "react-router-dom";
import Context from "@/Context/Context";
import "boxicons/css/boxicons.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>
);
