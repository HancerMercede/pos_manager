import { LuClipboardEdit } from "react-icons/lu";
import tablestyle from "../CustomStyles/Table.module.css";
import { CiTrash } from "react-icons/ci";
import { DollarFormat } from "../utils/DollarFormat";

export const ProducTableDetail = ({ product, removeProduct }) => {
  return (
    <tr className={tablestyle.tr}>
      <td className={tablestyle.td}>{product.productId}</td>
      <td className={tablestyle.td}>{product.description}</td>
      <td className={tablestyle.td}>{DollarFormat.format(product.price)}</td>
      <td className={tablestyle.td}>{product.cuantity}</td>
      <td className={tablestyle.td}>{DollarFormat.format(product.subtotal)}</td>
      <td className={tablestyle.td}>{DollarFormat.format(product.total)}</td>
      <td className={tablestyle.td}>
        <div className={tablestyle.button_wrapper}>
          <button className={tablestyle.button_primary}>
            <LuClipboardEdit size={15} />
          </button>

          <button
            className={tablestyle.button_danger}
            onClick={() => removeProduct(product.productId)}
          >
            <CiTrash size={15} />
          </button>
        </div>
      </td>
    </tr>
  );
};
