import style from "./Search.module.css";
import { IoIosSearch } from "react-icons/io";
export const Search = () => {
  return (
    <div className={style.search_wrapper}>
      <form>
        <input className={style.input} type="text" placeholder="search..." />
        <button className={style.searchButton}>
          <span>
            <IoIosSearch size={18} />
          </span>
        </button>
      </form>
    </div>
  );
};
