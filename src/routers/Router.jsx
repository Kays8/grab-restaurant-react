import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Add from "../pages/Add.jsx";
import Edit from "../pages/Edit.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Layout from "../components/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
    ],
  },
  {
    path: "/dasboard",
    element: <div>Admin</div>,
    children: [
      {
        path: "user",
        element: <div>Dasboard Admin</div>,
      },
    ],
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <Navbar />
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </React.StrictMode>
// );
export default router;
