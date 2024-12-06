import styles from "@/Styles/TableDetail.module.css";
const TableDetail = ({ dentist }) => {
  return (
    <>
      <h2>Información Personal y Dirección</h2>
      <table className={styles.table}>
        <tbody className={styles.tbody}>
          <tr>
            <th className={styles.th}>Nombre:</th>
            <td className={styles.td}>{dentist?.name}</td>
          </tr>
          <tr>
            <th className={styles.th}>Email:</th>
            <td className={styles.td}>{dentist?.email}</td>
          </tr>
          <tr>
            <th className={styles.th}>Teléfono:</th>
            <td className={styles.td}>{dentist?.phone}</td>
          </tr>
          <tr>
            <th className={styles.th}>Calle:</th>
            <td className={styles.td}>{dentist?.address?.street}</td>
          </tr>
          <tr>
            <th className={styles.th}>Ciudad:</th>
            <td className={styles.td}>{dentist?.address?.city}</td>
          </tr>
          <tr>
            <th className={styles.th}>Código Postal:</th>
            <td className={styles.td}>{dentist?.address?.zipcode}</td>
          </tr>
          <tr>
            <th className={styles.th}>Página Web:</th>
            <td className={styles.td}>{dentist?.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableDetail;
