import { LuClipboardEdit } from "react-icons/lu";
import { CiTrash } from "react-icons/ci";
import { BiDetail } from "react-icons/bi";
import style from "./Customer.module.css";
import tablestyle from "../CustomStyles/table.module.css";
import PropTypes from "prop-types";

const avatharPath = "./src/images/DeveloperAvatar.png";

export const CustomerTableDetails = ({ customer }) => {
  return (
    <tr className={tablestyle.tr}>
      <td className={tablestyle.td}>
        <div className={style.profile}>
          <img src={avatharPath} alt="profile" />
          {customer.Name}
        </div>
      </td>
      <td className={tablestyle.td}>{customer.Email}</td>
      <td className={tablestyle.td}>{customer.address}</td>
      <td className={tablestyle.td}>{customer.Phone}</td>
      <td className={tablestyle.td}>
        <div className={tablestyle.button_wrapper_table}>
          <button className={style.button_primary} title="Edit">
            <LuClipboardEdit size={15} />
          </button>
          <button className={tablestyle.button_danger} title="Delete">
            <CiTrash size={15} />
          </button>
          <button className={tablestyle.button_success} title="Details">
            <BiDetail size={15} />
          </button>
        </div>
      </td>
    </tr>
  );
};

CustomerTableDetails.propTypes = {
  customer: PropTypes.object.isRequired,
};
