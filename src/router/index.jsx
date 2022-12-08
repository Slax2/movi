import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Search from "../pages/Search";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
