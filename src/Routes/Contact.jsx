import Form from "@/Components/Form";
import style from "@/Styles/Contact.module.css";
import { useGlobalState } from "../Context/Context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useGlobalState();
  return (
    <div className={`${style.contact} ${state.theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
