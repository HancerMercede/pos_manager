import { Link, Navigate } from "react-router-dom";
import style from "./Login.module.css";
import { CiLogin } from "react-icons/ci";

export const Login = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    <Navigate to="/" replace={true} />;
  };
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
            <button className={style.submit} onClick={handleClick}>
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
