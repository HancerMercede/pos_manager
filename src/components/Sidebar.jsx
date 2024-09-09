import style from "./Sidebar.module.css";
import { FaUsers } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
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
        <header className={style.header}>
          <div className={style.user_section}>
            <img
              src="./src/images/Avatar.png"
              alt="profile"
              width={35}
              height={35}
            ></img>
            <p>{username}</p>
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
          <Link to={"/Earnings"}>
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
