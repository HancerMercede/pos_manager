import style from "./Login.module.css";
import { CiLogin } from "react-icons/ci";

export const Register = () => {
  return (
    <div className={style.main_container}>
      <div className={style.container}>
        <div className={style.image_wrapper}>
          <img
            className={style.logo}
            src="./src/images/pos_manager.png"
            alt="company_title"
          />
        </div>
        <form className={style.Login_form}>
          <input
            className={style.input}
            type="text"
            name="username"
            placeholder="username"
          />
          <input
            className={style.input}
            type="password"
            name="password"
            placeholder="password"
          />
          <input
            className={style.input}
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            className={style.input}
            type="text"
            name="lastname"
            placeholder="lastname"
          />
          <button className={style.submit}>
            <CiLogin size={14} /> ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
};
