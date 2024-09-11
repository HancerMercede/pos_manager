import style from "./Sidebar.module.css";
import { FaUsers } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import { LuUsers } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCash } from "react-icons/gi";
import { VscSettingsGear } from "react-icons/vsc";
import { IoMdHome } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";

const username = "Hancer Mercedes";

export const Sidebar = () => {
  return (
    <>
      <div className={style.sidebar}>
        <GiHamburgerMenu
          size={40}
          className={style.hamburger_menu}
          visable={false}
        />
        <header className={style.header}>
          <div>
            <h1>ERP 3000</h1>
          </div>
        </header>
        <div className={style.linksection}>
          <Link to={"/"}>
            <IoMdHome size={20} />
            Home
          </Link>
          <Link to={"/Customers"}>
            <FaUsers size={20} />
            Customers
          </Link>
          <Link to={"/Products"}>
            <FaBasketShopping size={20} />
            Products
          </Link>
          <Link to={"/Orders"}>
            <FaShoppingCart size={20} />
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
          <Link to={"/Accounting"}>
            <ImBooks size={20} />
            Accounting
          </Link>
          <Link to={"/Users"}>
            <LuUsers size={20} />
            Users
          </Link>
          <Link to={"/Inventory"}>
            <FaBoxes size={20} />
            Inventory
          </Link>
          <Link to={"/Settings"}>
            <VscSettingsGear size={20} />
            Settings
          </Link>
        </div>
        <footer className={style.footer}>
          <Link to="/">
            <MdLogout size={20} />
            Exit
          </Link>
        </footer>
      </div>
    </>
  );
};
