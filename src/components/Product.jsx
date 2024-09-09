import { Search } from "./Search";
import products from "../data/products.json";
import style from "./Product.module.css";
import { LuClipboardEdit } from "react-icons/lu";
import { CiTrash } from "react-icons/ci";
import { BiDetail } from "react-icons/bi";
import tablestyle from "../CustomStyles/Table.module.css";
import { DollarFormat } from "../utils/DollarFormat";

export const Product = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Products</h1>
        </div>
        <Search />
        <div className={tablestyle.table_container}>
          <table>
            <thead className={tablestyle.table_background_color}>
              <tr>
                <th className={tablestyle.th}>Name</th>
                <th className={tablestyle.th}>Description</th>
                <th className={tablestyle.th}>Price</th>
                <th className={tablestyle.th}>Cuantity</th>
                <th className={tablestyle.th_actions}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => {
                return (
                  <tr key={item.id} className={tablestyle.tr}>
                    <td className={tablestyle.td}>{item.Name}</td>
                    <td className={tablestyle.td}>{item.description}</td>
                    <td className={tablestyle.td}>
                      {DollarFormat.format(item.Price)}
                    </td>
                    <td className={tablestyle.td}>{item.cuantity}</td>
                    <td className={tablestyle.td}>
                      <div className={tablestyle.button_wrapper_table}>
                        <button
                          className={tablestyle.button_primary}
                          title="Edit"
                        >
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
                  <p>Records: {products.length}</p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};
