import { Route, Routes } from "react-router-dom";
import { Sidebar } from "../components/sidebar";
import { Customer } from "../components/Customer";
import { Product } from "../components/Product";
import { Sales } from "../components/Sales";
import { LandingPage } from "../components/LandingPage";
import { Order } from "../components/Order";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Sidebar title="POST 2024" />
      <div>
        <Routes>
          <Route path="/" exact Component={LandingPage} />
          <Route path="/Customers" element={<Customer />} />
          <Route path="/Products" element={<Product />} />
          <Route path="/Orders" element={<Order />} />
          <Route path="/Sales" element={<Sales />} />
        </Routes>
      </div>
    </>
  );
};
