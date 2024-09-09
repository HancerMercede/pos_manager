import { Route, Routes } from "react-router-dom";
import { Customer } from "../components/Customer";
import { Product } from "../components/Product";
import { Sales } from "../components/Sales";
import { LandingPage } from "../components/LandingPage";
import { Order } from "../components/Order";
import { Sidebar } from "../components/sidebar";

import "./Home.css";
import { HeaderContent } from "../components/HeaderContent";

export const Home = () => {
  return (
    <>
      <Sidebar title="POST 2024" />
      <HeaderContent />
      <div className="main">
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
