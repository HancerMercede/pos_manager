import { Search } from "./Search";
import products from "../data/products.json";
import style from "./Product.module.css";
import { LuClipboardEdit } from "react-icons/lu";

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
        <table className="table is-fullwidth is-bordered is-hoverable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Cuantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.Name}</td>
                  <td>{item.description}</td>
                  <td>{DollarFormat.format(item.Price)}</td>
                  <td>{item.cuantity}</td>
                  <td className="has-text-centered">
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
    </>
  );
};
