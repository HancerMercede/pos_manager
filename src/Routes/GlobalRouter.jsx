import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../components/Authentication/Login";
import { Register } from "../components/Authentication/Register";

export const GlobalRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};
