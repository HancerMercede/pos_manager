import { LuClipboardEdit } from "react-icons/lu";
import style from "./Customer.module.css";
import tablestyle from "../CustomStyles/table.module.css";
import PropTypes from "prop-types";

export const CustomerTableDetails = ({ customer }) => {
  return (
    <tr className={tablestyle.tr}>
      <td className={tablestyle.td}>{customer.Name}</td>
      <td className={tablestyle.td}>{customer.Email}</td>
      <td className={tablestyle.td}>{customer.address}</td>
      <td className={tablestyle.td}>{customer.Phone}</td>
      <td className={tablestyle.td}>
        <button className={style.button_primary}>
          <LuClipboardEdit size={15} />
        </button>
      </td>
    </tr>
  );
};

CustomerTableDetails.propTypes = {
  customer: PropTypes.object.isRequired,
};
