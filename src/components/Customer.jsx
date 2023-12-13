import data from "../data/data.json";
import style from "./Customer.module.css";
import { Search } from "./Search";
import { LuClipboardEdit } from "react-icons/lu";

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
              {data.map((item) => {
                return (
                  <tr key={item.id} className={style.tr}>
                    <td className={style.td}>{item.Name}</td>
                    <td className={style.td}>{item.Email}</td>
                    <td className={style.td}>{item.address}</td>
                    <td className={style.td}>{item.Phone}</td>
                    <td className={style.td}>
                      <button className="button is-info is-small">
                        <LuClipboardEdit size={15} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
