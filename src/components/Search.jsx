import style from "./Search.module.css";
export const Search = () => {
  return (
    <form>
      <input className={style.input} type="text" placeholder="Search..." />
    </form>
  );
};
