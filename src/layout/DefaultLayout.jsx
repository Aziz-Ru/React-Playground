import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <h1>hi</h1>
      <Outlet />
    </>
  );
};

export default DefaultLayout;
