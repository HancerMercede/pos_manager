import { LuClipboardEdit } from "react-icons/lu";
import { CiTrash } from "react-icons/ci";
import { BiDetail } from "react-icons/bi";
import data from "../data/orders.json";
import style from "./Order.module.css";
import { Search } from "./Search";
import tablestyle from "../CustomStyles/Table.module.css";
import { DollarFormat } from "../utils/DollarFormat";
import { Pagination } from "./Pagination";

export const Order = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Orders</h1>
        </div>
        <Search />
        <Pagination />
        <div className={tablestyle.table_container}>
          <table>
            <thead className={tablestyle.table_background_color}>
              <tr>
                <th className={tablestyle.th}>Customer</th>
                <th className={tablestyle.th}>Amount</th>
                <th className={tablestyle.th}>Date</th>
                <th className={tablestyle.th_actions}>Actions</th>
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
                      <div className={tablestyle.button_wrapper_table}>
                        <button className={tablestyle.button_primary}>
                          <LuClipboardEdit size={15} />
                        </button>
                        <button
                          className={tablestyle.button_danger}
                          title="Delete"
                        >
                          <CiTrash size={15} />
                        </button>
                        <button
                          className={tablestyle.button_success}
                          title="Details"
                        >
                          <BiDetail size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
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
