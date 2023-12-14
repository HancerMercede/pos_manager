import style from "./Search.module.css";

export const Search = () => {
  return (
    <div className={style.search_wrapper}>
      <form>
        <input className={style.input} type="text" />
        <button className={style.searchButton}>
          <span>🔎</span>
        </button>
      </form>
    </div>
  );
};
