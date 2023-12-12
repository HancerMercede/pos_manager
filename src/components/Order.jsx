import { LuClipboardEdit } from "react-icons/lu";
import data from "../data/orders.json";
import style from "./Order.module.css";
import { Search } from "./Search";

export const Order = () => {
  let DollarFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Orders</h1>
        </div>
        <Search />
        <table className="table is-fullwidth is-bordered is-hoverable">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Amount</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.Customer}</td>
                  <td>{DollarFormat.format(item.Amount)}</td>
                  <td>{item.Date}</td>
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
