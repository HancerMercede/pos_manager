import style from "./Sales.module.css";
import { CiTrash } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { LuEraser } from "react-icons/lu";
import tablestyle from "../CustomStyles/Table.module.css";
import { useEffect, useState } from "react";
import { ProducTableDetail } from "./ProducTableDetail";
import { DollarFormat } from "../utils/DollarFormat";
import { CiShoppingCart } from "react-icons/ci";
import { RiSave3Fill } from "react-icons/ri";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import Swal from "sweetalert2";

const customers = [
  {
    id: "1",
    Name: "Jhon Doe",
    Email: "jhon.doe@gmail.com",
    phoneNumber: "123-456-7890",
    RNC: "123-456-7890",
    DNI: "123-456-7890",
  },
  {
    id: "2",
    Name: "Jhon Walker",
    Email: "jhon.Walker@gmail.com",
    phoneNumber: "123-456-7890",
    RNC: "123-456-7890",
    DNI: "123-456-7890",
  },
  {
    id: "3",
    Name: "Jhon Cena",
    Email: "jhon.Cena@gmail.com",
    phoneNumber: "",
    RNC: "123-456-7890",
    DNI: "123-456-7890",
  },
  {
    id: "4",
    Name: "Jhon Preston",
    Email: "jhon.Preston@gmail.com",
    phoneNumber: "123-456-7890",
    RNC: "123-456-7890",
    DNI: "038-0018771-2",
  },
  {
    id: "5",
    Name: "Jhon Wick",
    Email: "jhon.Wick@gmail.com",
    phoneNumber: "809-968-0742",
    RNC: "123-456-7890",
    DNI: "123-456-7890",
  },
  {
    id: "6",
    Name: "Hancer Mercede",
    Email: "Han.msanchez@gmail.com",
    phoneNumber: "809-968-0742",
    RNC: "007-008-7890",
    DNI: "048-018742-3",
  },
];

const productsInStock = [
  {
    productId: "001",
    Description: "React.js ultimate course",
    Price: 65,
  },
  {
    productId: "002",
    Description: "Node.js ultimate course",
    Price: 70,
  },
  {
    productId: "003",
    Description: "MongoDB 2024 Edition",
    Price: 60,
  },

  {
    productId: "004",
    Description: "MySql: learn the fundamental",
    Price: 68.5,
  },
  {
    productId: "005",
    Description: "Dokcer: The game changer",
    Price: 60.5,
  },
];
const tax = [
  { id: 1, value: 0.18 },
  { id: 2, value: 0.16 },
];

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
    if (
      product.productId === "" ||
      product.productId === undefined ||
      product.quantity <= 0
    )
      return;

    // Here i verify if the product already exists in the array of products
    const ProductExist = productExistInTheArray(product.productId);
    if (ProductExist) {
      Swal.fire({
        title: "Product already exists!!",
        text: "Please edit the product.",
        icon: "warning",
      });
      return;
    }

    setProducts([product, ...products]);
    onClear();
  };

  const productExistInTheArray = (productId) => {
    let ExistProduct = products.some((p) => p.productId === productId);

    return ExistProduct;
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
    // Binding the new state of the 3 properties and saved it.
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

  const handleComboChange = (ev) => {
    const _name = ev.target.value;
    const customer = customers.filter((c) => c.Name === _name);

    customer.forEach((c) => {
      setName(c.Name);
      setEmail(c.Email);
      setPhone(c.phoneNumber);
      setRNC(c.RNC);
      setDNI(c.DNI);
    });
  };

  const handleFindProductChange = (ev) => {
    const _search = ev.target.value;
    const product = productsInStock.filter(
      (p) => p.productId === _search || p.Description.includes(_search)
    );

    if (_search === "" || product.length === 0) {
      return onClear();
    }

    product.forEach((p) => {
      setProductId(p.productId);
      setDescription(p.Description);
      setPrice(p.Price);
    });
  };

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

  const handleSave = (ev) => {
    ev.preventDefault();
    Swal.fire({
      title: "The invoice has been saved!",
      text: "",
      icon: "success",
    }).then(() => setProducts([]));
  };

  const handleCreate = (ev) => {
    ev.preventDefault();
    Swal.fire({
      title: "The invoice has been created!",
      text: "",
      icon: "success",
    }).then(() => {
      setProducts([]);
      products.forEach((product) => console.log({ product }));
    });
  };

  // Here i made a sum for all the total, to have a global value.
  let globalTotal = 0;
  products.forEach((product) => {
    globalTotal += product.total;
  });

  return (
    <>
      <div className={style.container}>
        <div className={style.customer_header_section}>
          <p className={style.custoemr_label}>Customer information</p>
          <select
            label="Select a customer"
            value={name}
            defaultValue="select one..."
            onChange={handleComboChange}
            className={style.select_combo}
          >
            <option value="" selected>
              0 - Select one...
            </option>
            {customers.map((c) => (
              <option value={c.Name} key={c.id}>
                {c.id.concat(" - ", c.Name)}
              </option>
            ))}
          </select>
        </div>
        <form className={style.customer_form}>
          <input
            type="text"
            placeholder="Name.."
            value={name}
            readOnly={true}
          />
          <input
            type="text"
            placeholder="Email.."
            value={email}
            readOnly={true}
          />
          <input
            type="text"
            placeholder="Phone Number.."
            value={phone}
            readOnly={true}
          />
          <input type="text" placeholder="RNC.." value={RNC} readOnly={true} />
          <input type="text" placeholder="DNI.." value={DNI} readOnly={true} />
        </form>
        <button className={style.btn} onClick={OnDelete}>
          <CiTrash size={20} /> Delete
        </button>
      </div>
      <div className={style.product_container}>
        <div className={style.search_tax_section}>
          <input
            type="text"
            placeholder="Product search..."
            onChange={handleFindProductChange}
            className={style.product_search}
          />
          <select className={style.select_tax_combo}>
            {tax.map((t) => (
              <option value={t.value} key={t.id}>
                {t.value}
              </option>
            ))}
          </select>
        </div>
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
                className={style.input_description}
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
                min={0}
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
                <LuEraser size={20} />
                Clear
              </button>
              <button
                className={style.btn_add}
                type="submit"
                onClick={() => AddEditedProduct(edittingProducts)}
              >
                <FaPlus size={20} />
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
                className={style.input_description}
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
                min={0}
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
                <LuEraser size={20} />
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
                <FaPlus size={18} scale={20} />
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
          </table>
        </div>
      </div>
      <div className={style.footer_wrapper}>
        <div>
          <p className={style.shopping_car}>
            <CiShoppingCart size={25} />
            {products.length}
          </p>
        </div>
        <div className={style.total_section}>
          <p>TOTAL: {DollarFormat.format(globalTotal)}</p>
        </div>
      </div>
      <div className={style.generate_section}>
        {products.length === 0 ? (
          <div className={tablestyle.button_wrapper}>
            <button className={style.btn_generate} disabled={true}>
              <LiaFileInvoiceDollarSolid size={20} />
              CREATE
            </button>
            <button className={style.btn_primary} disabled={true}>
              <RiSave3Fill size={20} />
              SAVE
            </button>
          </div>
        ) : (
          <div className={tablestyle.button_wrapper}>
            <button className={style.btn_generate} onClick={handleCreate}>
              <LiaFileInvoiceDollarSolid size={20} />
              CREATE
            </button>
            <button className={style.btn_primary} onClick={handleSave}>
              <RiSave3Fill size={20} />
              SAVE
            </button>
          </div>
        )}
      </div>
    </>
  );
};
