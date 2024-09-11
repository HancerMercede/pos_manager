import { FaDollarSign } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import style from "./Dashboard.module.css";
import tablestyle from "../CustomStyles/Table.module.css";
import data from "../data/finance.json";

import { DollarFormat } from "../utils/DollarFormat";

export const Dashboard = () => {
  let total = 0;
  data.forEach((num) => {
    total += num.Total;
  });

  return (
    <>
      <div className={style.card_container}>
        <p className={style.main_title}>Current information</p>
        <div className={style.card_wrapper}>
          <div className={style.amountcard}>
            <div className={style.card_header}>
              <div className={style.amount}>
                <span className={style.title}>Payments amount </span>
                <span className={style.amount_value}>${total}</span>
              </div>
              <span className={`${style.icon} ${style.light_green}`}>
                <FaDollarSign />
              </span>
            </div>
            <span className={style.card_details}>*** **** **** 3295</span>
          </div>

          <div className={style.salescard}>
            <div className={style.card_header}>
              <div className={style.amount}>
                <span className={style.title}>Sales amount </span>
                <span className={style.amount_value}>${total}</span>
              </div>
              <span className={`${style.icon} ${style.light_yellow}`}>
                <FaCartShopping />
              </span>
            </div>
            <span className={style.card_details}>*** **** **** 4275</span>
          </div>
          <div className={style.inventorycard}>
            <div className={style.card_header}>
              <div className={style.amount}>
                <span className={style.title}>Inventory amount </span>
                <span className={style.amount_value}>$10000.00</span>
              </div>
              <span className={`${style.icon} ${style.light_red}`}>
                <FaList />
              </span>
            </div>
            <span className={style.card_details}>*** **** **** 3295</span>
          </div>
          <div className={style.customercard}>
            <div className={style.card_header}>
              <div className={style.amount}>
                <span className={style.title}>Payment Customer</span>
                <span className={style.amount_value}>${total}</span>
              </div>
              <span className={`${style.icon} ${style.light_blue}`}>
                <FaUsers />
              </span>
            </div>
            <span className={style.card_details}>*** **** **** 3295</span>
          </div>
          <div className={style.payment_proceed_card}>
            <div className={style.card_header}>
              <div className={style.amount}>
                <span className={style.title}>Payment Proceed </span>
                <span className={style.amount_value}>$17500.00</span>
              </div>
              <span className={`${style.icon} ${style.light_violet}`}>
                <FaCheck />
              </span>
            </div>
            <span className={style.card_details}>*** **** **** 3295</span>
          </div>
        </div>
      </div>
      <div className={style.finance_container}>
        <h3 className={style.finance_title}>Finance Information</h3>
        <div className={tablestyle.table_container}>
          <table>
            <thead className={tablestyle.table_background_color}>
              <tr>
                <th className={tablestyle.th}>Date</th>
                <th className={tablestyle.th}>Trasaction Type</th>
                <th className={tablestyle.th}>Description</th>
                <th className={tablestyle.th}>Category</th>
                <th className={tablestyle.th}>Status</th>
                <th className={tablestyle.th}>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.id} className={tablestyle.tr}>
                    <td className={tablestyle.td}>{item.date}</td>
                    <td className={tablestyle.td}>
                      {item["Transaction Type"]}
                    </td>
                    <td className={tablestyle.td}>{item.Description}</td>
                    <td className={tablestyle.td}>{item.Category}</td>
                    <td className={tablestyle.td}>{item.Status}</td>
                    <td className={tablestyle.td}>
                      {DollarFormat.format(item.Total)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className={tablestyle.table_background_color}>
              <tr>
                <td colSpan={7}>Total:${total}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};
