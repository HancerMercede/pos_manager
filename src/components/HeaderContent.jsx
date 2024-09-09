import style from "./Dashboard.module.css";
import { Clock } from "./Clock";

export const HeaderContent = () => {
  return (
    <div className={style.main_content_dashboard}>
      <p className={style.dashboard_title}>ERP 3000</p>
      <div className={style.date_container}>
        <Clock />
      </div>
    </div>
  );
};
