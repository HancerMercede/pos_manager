import { Link } from "react-router-dom";
import style from "./Login.module.css";
import { CiLogin } from "react-icons/ci";

export const Login = () => {
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
          <div className={style.button_wrapper}>
            <button className={style.submit}>
              <CiLogin size={14} /> ENVIAR
            </button>
            <Link className={style.link} to={"/Register"}>
              REGISTER
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
