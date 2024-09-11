import style from "./Dashboard.module.css";
import { Clock } from "./Clock";

export const HeaderContent = () => {
  const username = "Hancer Mercedes";

  return (
    <div className={style.main_content_dashboard}>
      <div className={style.date_container}>
        <Clock />
      </div>
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
    </div>
  );
};
