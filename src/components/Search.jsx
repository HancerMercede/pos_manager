import { useEffect, useRef } from "react";
import style from "./Search.module.css";
import { IoIosSearch } from "react-icons/io";
export const Search = () => {
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className={style.search_wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          placeholder="search..."
          ref={input}
        />
        <button className={style.searchButton} type="submit">
          <span>
            <IoIosSearch size={18} />
          </span>
        </button>
      </form>
    </div>
  );
};
