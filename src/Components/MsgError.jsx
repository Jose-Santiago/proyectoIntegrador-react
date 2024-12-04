import styles from "@/Styles/MsgError.module.css";
const MsgError = ({ errors }) => {
  return (
    <ul className={styles.ul}>
      {errors.map((error, index) => (
        <li key={index} className={styles.li}>
          {error}
        </li>
      ))}
    </ul>
  );
};

export default MsgError;
