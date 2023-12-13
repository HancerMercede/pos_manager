import { useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import style from "./Dashboard.module.css";
import data from "../data/finance.json";

export const Dashboard = () => {
  // Here I get the current state of the timeline.
  const [date, setDate] = useState(new Date().toLocaleString());

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return (
    <>
      <div className={style.main_content_dashboard}>
        <p className={style.dashboard_title}>Dashboard</p>
        <div className={style.date_container}>
          <p>{date}</p>
        </div>
      </div>
      <div className={style.card_container}>
        <h1 className={style.main_title}>Current information</h1>
        <div className={style.card_wrapper}>
          <div className={style.amountcard}>
            <div className={style.card_header}>
              <div className={style.amount}>
                <span className={style.title}>Payments amount </span>
                <span className={style.amount_value}>$5000.00</span>
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
                <span className={style.amount_value}>$5000.00</span>
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
                <span className={style.amount_value}>$7500.00</span>
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
        <div className={style.table_container}>
          <table>
            <thead>
              <tr>
                <th className={style.th}>Date</th>
                <th className={style.th}>Trasaction Type</th>
                <th className={style.th}>Description</th>
                <th className={style.th}>Category</th>
                <th className={style.th}>Status</th>
                <th className={style.th}>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.id} className={style.tr}>
                    <td className={style.td}>{item.date}</td>
                    <td className={style.td}>{item.Status}</td>
                    <td className={style.td}>{item.Description}</td>
                    <td className={style.td}>{item.Category}</td>
                    <td className={style.td}>{item.Status}</td>
                    <td className={style.td}>{item.Total}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={7}>Total:$ 9300.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};
