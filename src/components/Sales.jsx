import style from "./Sales.module.css";
import { CiTrash } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";
import { MdEditCalendar } from "react-icons/md";
import { MdOutlineCleaningServices } from "react-icons/md";
import tablestyle from "../CustomStyles/Table.module.css";
import { useState } from "react";

export const Sales = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [RNC, setRNC] = useState("");
  const [DNI, setDNI] = useState("");

  const OnDelete = (env) => {
    console.log("entre aqui");
    env.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setRNC("");
    setDNI("");
  };
  return (
    <>
      <div className={style.container}>
        <p className={style.custoemr_label}>Customer information</p>
        <form className={style.customer_form}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(env) => setEmail(env.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(env) => setPhone(env.target.value)}
          />
          <input
            type="text"
            placeholder="RNC"
            value={RNC}
            onChange={(env) => setRNC(env.target.value)}
          />
          <input
            type="text"
            placeholder="DNI"
            value={DNI}
            onChange={(env) => setDNI(env.target.value)}
          />
        </form>
        <button className={style.btn} onClick={OnDelete}>
          <CiTrash size={20} /> Delete
        </button>
      </div>
      <div className={style.product_container}>
        <form className={style.product_form}>
          <input type="text" placeholder="#Product" />
          <input type="text" placeholder="Description" />
          <input type="number" placeholder="Price" />
          <input type="number" placeholder="Cuantity" />
          <input type="number" placeholder="Sub-Total" />
          <input type="number" placeholder="Total" />
        </form>
        <div className={tablestyle.button_wrapper}>
          <button className={style.btn_clean}>
            <MdOutlineCleaningServices size={20} />
            Clear
          </button>
          <button className={style.btn_add}>
            <MdAddShoppingCart size={20} />
            Add to cart
          </button>
        </div>
      </div>

      <div className={style.product_grid_container}>
        <div className={tablestyle.table_container}>
          <table>
            <thead className={tablestyle.thead_grey}>
              <tr>
                <th className={tablestyle.th}>#Product</th>
                <th className={tablestyle.th}>Description</th>
                <th className={tablestyle.th}>Price</th>
                <th className={tablestyle.th}>Cuantity</th>
                <th className={tablestyle.th}>Sub-Total</th>
                <th className={tablestyle.th}>Total</th>
                <th className={tablestyle.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className={tablestyle.tr}>
                <td className={tablestyle.td}>0001-01-01</td>
                <td className={tablestyle.td}>Lenovo Legion 5</td>
                <td className={tablestyle.td}>$800.00</td>
                <td className={tablestyle.td}>2</td>
                <td className={tablestyle.td}>$1600.00</td>
                <td className={tablestyle.td}>$1888.00</td>
                <td className={tablestyle.td}>
                  <div className={tablestyle.button_wrapper}>
                    <button className={tablestyle.button_danger}>
                      <CiTrash size={15} />
                    </button>
                    <button className={tablestyle.button_success}>
                      <MdEditCalendar size={15} />
                    </button>
                  </div>
                </td>
              </tr>
              <tr className={tablestyle.tr}>
                <td className={tablestyle.td}>0001-01-01</td>
                <td className={tablestyle.td}>Lenovo Legion 5</td>
                <td className={tablestyle.td}>$800.00</td>
                <td className={tablestyle.td}>2</td>
                <td className={tablestyle.td}>$1600.00</td>
                <td className={tablestyle.td}>$1888.00</td>
                <td className={tablestyle.td}>
                  <div className={tablestyle.button_wrapper}>
                    <button className={tablestyle.button_danger}>
                      <CiTrash size={15} />
                    </button>
                    <button className={tablestyle.button_success}>
                      <MdEditCalendar size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
