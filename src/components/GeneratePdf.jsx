import style from "./GeneratePdf.module.css";
import tablestyle from "../CustomStyles/table.module.css";

export const GeneratePdf = () => {
  return (
    <>
      <div>
        <div className={style.image_wrapper}>
          <img
            className={style.logo}
            src="./src/images/pos_manager.png"
            alt="company_title"
          />
        </div>
        <h1 className={style.invoice_tittle}>Fabrica de jugos IDECOV</h1>
        <div className={style.invoice_number_date_section}>
          <h3>Invoice #:0001</h3>
          <p>
            Date: {new Date().getDate()}/{new Date().getMonth() + 1}/
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
      <div className={style.customer_header_section}>
        <h2>Customer Details</h2>
      </div>
      <div className={style.customer_Details_container}>
        <p>Name: Hancer Mercede</p>
        <p>Email: hancermercedes@gmail.com</p>
        <p>Address:C/Luisa Martinez la barranquita</p>
        <p>Phone:8709-968-0742</p>
      </div>
      <header className={style.product_header_section}>
        <h2>Products Details</h2>
      </header>
      <div className={style.product_container}>
        <div className={tablestyle.table_container}>
          <table>
            <thead className={tablestyle.thead_grey}>
              <tr>
                <th className={tablestyle.th}>item#</th>
                <th className={tablestyle.th}>Description</th>
                <th className={tablestyle.th}>Price</th>
                <th className={tablestyle.th}>Quantity</th>
                <th className={tablestyle.th}>Subtotal</th>
                <th className={tablestyle.th}>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tablestyle.td}>007</td>
                <td className={tablestyle.td}>Lenovo Legion 5</td>
                <td className={tablestyle.td}>65000</td>
                <td className={tablestyle.td}>1</td>
                <td className={tablestyle.td}>65000</td>
                <td className={tablestyle.td}>65500</td>
              </tr>
              <tr>
                <td className={tablestyle.td}>003</td>
                <td className={tablestyle.td}>Gaming Mouse</td>
                <td className={tablestyle.td}>27500</td>
                <td className={tablestyle.td}>1</td>
                <td className={tablestyle.td}>27500</td>
                <td className={tablestyle.td}>30500</td>
              </tr>
              <tr>
                <td className={tablestyle.td}>001</td>
                <td className={tablestyle.td}>Gaming Monitor</td>
                <td className={tablestyle.td}>27500</td>
                <td className={tablestyle.td}>1</td>
                <td className={tablestyle.td}>27500</td>
                <td className={tablestyle.td}>30500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <footer className={style.footer}>
        <p>Thank you for comming!!</p>
      </footer>
    </>
  );
};
