import { LuClipboardEdit } from "react-icons/lu";
import data from "../data/orders.json";
import style from "./Order.module.css";
import { Search } from "./Search";
import tablestyle from "../CustomStyles/Table.module.css";
import { DollarFormat } from "../utils/DollarFormat";

export const Order = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Orders</h1>
        </div>
        <Search />
        <div className={tablestyle.table_container}>
          <table>
            <thead>
              <tr>
                <th className={tablestyle.th}>Customer</th>
                <th className={tablestyle.th}>Amount</th>
                <th className={tablestyle.th}>Date</th>
                <th className={tablestyle.th}></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.id} className={tablestyle.tr}>
                    <td className={tablestyle.td}>{item.Customer}</td>
                    <td className={tablestyle.td}>
                      {DollarFormat.format(item.Amount)}
                    </td>
                    <td className={tablestyle.td}>{item.Date}</td>
                    <td className={tablestyle.td}>
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
