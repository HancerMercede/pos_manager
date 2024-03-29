import style from "./Sidebar.module.css";
import { FaUsers } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { GiCash } from "react-icons/gi";
import { VscSettingsGear } from "react-icons/vsc";
import { IoMdHome } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { Link } from "react-router-dom";

const username = "Christopher Martinez";

export const Sidebar = () => {
  return (
    <>
      <div className={style.sidebar}>
        <header className={style.header}>
          <img src="./public/images/avatar.png" width={35} height={35}></img>
          <p>{username}</p>
        </header>
        <div>
          <Link to={"/"}>
            <IoMdHome size={20} />
            Home
          </Link>
          <Link to={"/Customers"}>
            <FaUsers size={20} />
            Customers
          </Link>
          <Link to={"/Products"}>
            <IoIosListBox size={20} />
            Products
          </Link>
          <Link to={"/Orders"}>
            <FaFileInvoiceDollar size={20} />
            Orders
          </Link>
          <Link to={"/Sales"}>
            <GiCash size={20} />
            Sales
          </Link>
          <Link to={"/Earnings"}>
            <VscGraph size={20} />
            Earnings
          </Link>
        </div>
        <footer className={style.footer}>
          <VscSettingsGear />
          Administrator
        </footer>
      </div>
    </>
  );
};
