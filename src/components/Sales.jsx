import style from "./Sales.module.css";
import { CiTrash } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlineCleaningServices } from "react-icons/md";
import tablestyle from "../CustomStyles/Table.module.css";
import { useEffect, useState } from "react";
import { ProducTableDetail } from "./ProducTableDetail";
import { DollarFormat } from "../utils/DollarFormat";

export const Sales = () => {
  // customer states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [RNC, setRNC] = useState("");
  const [DNI, setDNI] = useState("");

  // products states
  const [products, setProducts] = useState([]); // An Array of objects
  const [edittingProducts, setEdittingProducts] = useState(null); // A specifiq object
  const [productId, setProductId] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  //Edit products states
  const [editQuantity, setEditquantity] = useState(0);
  const [editSubtotal, setEditSubtotal] = useState(0);
  const [editTotal, setEditTotal] = useState(0);

  const addProduct = (product) => {
    if (product.productId === "" || product.productId === undefined) return;
    setProducts([...products, product]);
    onClear();
  };

  // Remove a product  from the list or better say build a new array with all the items minus the one we are sending.
  const removeProduct = (productId) => {
    setProducts(products.filter((product) => product.productId !== productId));
  };

  // Here i took the product to edit it.
  const EditProduct = (product) => {
    setEdittingProducts(product);
    removeProduct(product.productId);
  };

  // Here i added the edited product to the list again.
  const AddEditedProduct = (product) => {
    product.quantity = editQuantity;
    product.subtotal = editSubtotal;
    product.total = editTotal;
    addProduct(product);
    setEdittingProducts(null);
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleChange = (ev) => {
    const _quantity = ev.target.value;
    setQuantity(_quantity);
    const newValue = _quantity * price;
    setSubtotal(newValue);
  };

  // Here i changed the Editquantity with the new value
  const handleEditChange = (ev) => {
    const _quantity = ev.target.value;
    setEditquantity(_quantity);
    const newValue = _quantity * edittingProducts.price;
    setEditSubtotal(newValue);
  };

  // Here i triggered an effect to calculate the total when the sub-total change.
  useEffect(() => {
    const tax = subtotal * 0.18;
    const newValue = subtotal + tax;
    setTotal(newValue);
  }, [subtotal]);
  // Here i triggered an effect to calculate the new total when the sub-total is editted.
  useEffect(() => {
    const tax = editSubtotal * 0.18;
    const newValue = editSubtotal + tax;
    setEditTotal(newValue);
  }, [editSubtotal]);

  const OnDelete = (env) => {
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
    setQuantity(0);
    setSubtotal(0);
    setTotal(0);

    setEditquantity(0);
    setEditSubtotal(0);
    setEditTotal(0);
    setEdittingProducts(null);
  };

  // Here i made a sum for all the total, to have a global value.
  let globalTotal = 0;
  products.forEach((product) => {
    globalTotal += product.total;
  });

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
        {edittingProducts ? (
          <>
            <form className={style.product_form}>
              <input
                type="text"
                placeholder="#Product"
                value={edittingProducts.productId}
                onChange={(ev) =>
                  setEdittingProducts({
                    ...edittingProducts,
                    productId: ev.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Description"
                value={edittingProducts.description}
                onChange={(ev) =>
                  setEdittingProducts({
                    ...edittingProducts,
                    description: ev.target.value,
                  })
                }
              />
              <input
                type="number"
                placeholder="Price"
                value={edittingProducts.price}
                onChange={(ev) =>
                  setEdittingProducts({
                    ...edittingProducts,
                    price: ev.target.value,
                  })
                }
              />
              <input
                type="number"
                placeholder="Quantity"
                value={editQuantity}
                onChange={handleEditChange}
              />
              <input
                type="number"
                placeholder="Sub-Total"
                value={editSubtotal}
                readOnly={true}
              />
              <input
                type="number"
                placeholder="Total"
                value={editTotal}
                readOnly={true}
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
                  AddEditedProduct(edittingProducts, {
                    editQuantity,
                    editSubtotal,
                    editTotal,
                  })
                }
              >
                <MdAddShoppingCart size={20} />
                Add to cart
              </button>
            </div>
          </>
        ) : (
          <>
            <form className={style.product_form}>
              <input
                type="text"
                placeholder="#Product"
                value={productId}
                onChange={(ev) => setProductId(ev.target.value)}
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
                placeholder="Quantity"
                value={quantity}
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Sub-Total"
                value={subtotal}
                readOnly={true}
              />
              <input
                type="number"
                placeholder="Total"
                value={total}
                readOnly={true}
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
                    quantity,
                    subtotal,
                    total,
                  })
                }
              >
                <MdAddShoppingCart size={20} />
                Add to cart
              </button>
            </div>
          </>
        )}
      </div>

      <div className={style.product_grid_container}>
        <div className={tablestyle.table_container}>
          <table>
            <thead className={tablestyle.thead_grey}>
              <tr>
                <th className={tablestyle.th}>#Product</th>
                <th className={tablestyle.th}>Description</th>
                <th className={tablestyle.th}>Price</th>
                <th className={tablestyle.th}>Quantity</th>
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
                  editProduct={EditProduct}
                />
              ))}
            </tbody>
            <tfoot className={tablestyle.thead_grey}>
              <tr>
                <td colSpan={7}>TOTAL:{DollarFormat.format(globalTotal)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};
