import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
};

export default Layout;
