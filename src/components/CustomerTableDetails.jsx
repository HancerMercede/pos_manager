import { LuClipboardEdit } from "react-icons/lu";
import style from "./Customer.module.css";

export const CustomerTableDetails = ({ customer }) => {
  return (
    <tr className={style.tr}>
      <td className={style.td}>{customer.Name}</td>
      <td className={style.td}>{customer.Email}</td>
      <td className={style.td}>{customer.address}</td>
      <td className={style.td}>{customer.Phone}</td>
      <td className={style.td}>
        <button className="button is-info is-small">
          <LuClipboardEdit size={15} />
        </button>
      </td>
    </tr>
  );
};
