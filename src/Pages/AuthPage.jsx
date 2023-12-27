import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Authentication/Login";
import { Register } from "../components/Authentication/Register";

export const AuthPage = () => {
  return (
    <>
      <Routes>
        <Route path="/Login" Component={Login} />
        <Route path="/Register" Component={Register} />
      </Routes>
    </>
  );
};
