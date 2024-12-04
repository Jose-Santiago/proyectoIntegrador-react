import styles from "@/Styles/Form.module.css";
import { useState } from "react";
import MsgError from "./MsgError";
const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // separo las validaciones de nombre y email.
  const validateName = (name) => name.trim().length <= 5;
  const validateEmail = (email) => emailRegex.test(email.trim());

  // funcion que valida los errores en el formulario
  const validacion = () => {
    let errores = [];
    if (validateName(user.name))
      errores.push("El nombre debe ser mayor a 5 letras");
    if (!validateEmail(user.email)) errores.push("Ingrese un email valido");
    setErrors(errores);
    console.log(errores);
    return errores.length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validacion()) {
      setConfirm(true);
      event.target.reset(); //reseteamos el formulario
    }
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        disabled={confirm}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        disabled={confirm}
      />
      <button className={styles.buttonForm} disabled={confirm}>
        Enviar
      </button>
      {confirm ? (
        <div className={styles.msgFormContact}>
          Gracias {user.name}, te contactaremos cuando antes vía mail
        </div>
      ) : (
        <MsgError errors={errors} />
      )}
    </form>
  );
};

export default Form;
