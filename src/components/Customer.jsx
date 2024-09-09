import data from "../data/data.json";
import style from "./Customer.module.css";
import { CustomerTableDetails } from "./CustomerTableDetails";
import { Search } from "./Search";
import tablestyle from "../CustomStyles/table.module.css";

export const Customer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Customer</h1>
        </div>
        <Search />
        <div className={tablestyle.table_container}>
          <table>
            <thead className={tablestyle.table_background_color}>
              <tr>
                <th className={tablestyle.th}>Name</th>
                <th className={tablestyle.th}>Email</th>
                <th className={tablestyle.th}>Address</th>
                <th className={tablestyle.th}>Phone</th>
                <th className={tablestyle.th_actions}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((customer) => {
                return (
                  <CustomerTableDetails key={customer.id} customer={customer} />
                );
              })}
            </tbody>
            <tfoot className={tablestyle.table_background_color}>
              <tr>
                <td colSpan={7}>
                  <p>Records: {data.length}</p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};
