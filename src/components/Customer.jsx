import data from "../data/data.json";
import style from "./Customer.module.css";
import { Search } from "./Search";
// import { FaTrashAlt } from "react-icons/fa";
import { LuClipboardEdit } from "react-icons/lu";

export const Customer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Customer</h1>
        </div>
        <Search />
        <table className="table is-fullwidth is-hoverable is-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.Name}</td>
                  <td>{item.Email}</td>
                  <td>{item.address}</td>
                  <td>{item.Phone}</td>
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
