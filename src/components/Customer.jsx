import data from "../data/data.json";
import style from "./Customer.module.css";
import { CustomerTableDetails } from "./CustomerTableDetails";
import { Search } from "./Search";

export const Customer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Customer</h1>
        </div>
        <Search />
        <div className={style.table_container}>
          <table>
            <thead>
              <tr>
                <th className={style.th}>Name</th>
                <th className={style.th}>Email</th>
                <th className={style.th}>Address</th>
                <th className={style.th}>Phone</th>
                <th className={style.th}></th>
              </tr>
            </thead>
            <tbody>
              {data.map((customer) => {
                return (
                  <CustomerTableDetails key={customer.id} customer={customer} />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
