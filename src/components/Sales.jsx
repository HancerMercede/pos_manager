import style from "./Sales.module.css";
import { CiTrash } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlineCleaningServices } from "react-icons/md";
import tablestyle from "../CustomStyles/Table.module.css";
import { useEffect, useState } from "react";
import { ProducTableDetail } from "./ProducTableDetail";
import { AutoCalculateColumn } from "../utils/AutoCalculate";
import { DollarFormat } from "../utils/DollarFormat";

export const Sales = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [RNC, setRNC] = useState("");
  const [DNI, setDNI] = useState("");

  // products
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    if (product.productId === "" || product.productId === undefined) return;
    setProducts([...products, product]);
    onClear();
  };
  const removeProduct = (productId) => {
    setProducts(products.filter((product) => product.productId !== productId));
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const [productId, setProductId] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [cuantity, setCuantity] = useState();
  const [subtotal, setSubtotal] = useState();
  const [total, setTotal] = useState();

  const OnDelete = (env) => {
    console.log("entre aqui");
    env.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setRNC("");
    setDNI("");
  };

  const onClear = () => {
    setProductId("");
    setDescription("");
    setPrice();
    setCuantity();
    setSubtotal();
    setTotal();
  };
  const globalTotal = AutoCalculateColumn(products);
  return (
    <>
      <div className={style.container}>
        <p className={style.custoemr_label}>Customer information</p>
        <form className={style.customer_form}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(env) => setEmail(env.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(env) => setPhone(env.target.value)}
          />
          <input
            type="text"
            placeholder="RNC"
            value={RNC}
            onChange={(env) => setRNC(env.target.value)}
          />
          <input
            type="text"
            placeholder="DNI"
            value={DNI}
            onChange={(env) => setDNI(env.target.value)}
          />
        </form>
        <button className={style.btn} onClick={OnDelete}>
          <CiTrash size={20} /> Delete
        </button>
      </div>
      <div className={style.product_container}>
        <form className={style.product_form}>
          <input
            type="text"
            placeholder="#Product"
            value={productId}
            onChange={(env) => setProductId(env.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(env) => setDescription(env.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            value={price ?? 0.0}
            onChange={(env) => setPrice(env.target.value)}
          />
          <input
            type="number"
            placeholder="Cuantity"
            value={cuantity ?? 0}
            onChange={(env) => setCuantity(env.target.value)}
          />
          <input
            type="number"
            placeholder="Sub-Total"
            value={subtotal ?? 0.0}
            onChange={() => setSubtotal(price * cuantity)}
          />
          <input
            type="number"
            placeholder="Total"
            value={total ?? 0.0}
            onChange={() => setTotal(subtotal * 0.18 + subtotal)}
          />
        </form>
        <div className={tablestyle.button_wrapper}>
          <button className={style.btn_clean} onClick={onClear}>
            <MdOutlineCleaningServices size={20} />
            Clear
          </button>
          <button
            className={style.btn_add}
            type="submit"
            onClick={() =>
              addProduct({
                productId,
                description,
                price,
                cuantity,
                subtotal,
                total,
              })
            }
          >
            <MdAddShoppingCart size={20} />
            Add to cart
          </button>
        </div>
      </div>

      <div className={style.product_grid_container}>
        <div className={tablestyle.table_container}>
          <table>
            <thead className={tablestyle.thead_grey}>
              <tr>
                <th className={tablestyle.th}>#Product</th>
                <th className={tablestyle.th}>Description</th>
                <th className={tablestyle.th}>Price</th>
                <th className={tablestyle.th}>Cuantity</th>
                <th className={tablestyle.th}>Sub-Total</th>
                <th className={tablestyle.th}>Total</th>
                <th className={tablestyle.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <ProducTableDetail
                  key={index}
                  product={product}
                  removeProduct={removeProduct}
                />
              ))}
            </tbody>
            <tfoot className={tablestyle.thead_grey}>
              <tr>
                <td colSpan={7}>Total:{DollarFormat.format(globalTotal)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};
