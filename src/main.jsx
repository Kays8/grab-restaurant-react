import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Add from "./pages/Add.jsx";
import Home from "./pages/Home.jsx";
import Edit from "./pages/Edit.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Add",
    element: <Add />,
  },
  ,
  {
    path: "/Edit/:id",
    element: <Edit />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Navbar />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
