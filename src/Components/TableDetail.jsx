import "@/Styles/TableDetail.module.css";
const TableDetail = ({ dentist }) => {
  return (
    <>
      <h2>Información Personal y Dirección</h2>
      <table>
        <tbody>
          <tr>
            <th>Nombre:</th>
            <td>{dentist?.name}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{dentist?.email}</td>
          </tr>
          <tr>
            <th>Teléfono:</th>
            <td>{dentist?.phone}</td>
          </tr>
          <tr>
            <th>Calle:</th>
            <td>{dentist?.address?.street}</td>
          </tr>
          <tr>
            <th>Ciudad:</th>
            <td>{dentist?.address?.city}</td>
          </tr>
          <tr>
            <th>Código Postal:</th>
            <td>{dentist?.address?.zipcode}</td>
          </tr>
          <tr>
            <th>Página Web:</th>
            <td>{dentist?.website}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableDetail;
