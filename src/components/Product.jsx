import { Search } from "./Search";
import products from "../data/products.json";
import style from "./Product.module.css";
import { LuClipboardEdit } from "react-icons/lu";
import tablestyle from "../CustomStyles/Table.module.css";

export const Product = () => {
  let DollarFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Products</h1>
        </div>
        <Search />
        <div className={tablestyle.table_container}>
          <table>
            <thead>
              <tr>
                <th className={tablestyle.th}>Name</th>
                <th className={tablestyle.th}>Description</th>
                <th className={tablestyle.th}>Price</th>
                <th className={tablestyle.th}>Cuantity</th>
                <th className={tablestyle.th}></th>
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
