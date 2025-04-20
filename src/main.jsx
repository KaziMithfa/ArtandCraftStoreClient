import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/layouts/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Register from "./components/Register/Register.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import Login from "./components/Login/Login.jsx";
import AddItem from "./components/AddItem/AddItem.jsx";
import AddItemsPrivateRoute from "./components/AddItemsPrivateRoute/AddItemsPrivateRoute.jsx";
import MyItemsPrivateRoute from "./components/MyItemsPrivateRoute/MyItemsPrivateRoute.jsx";
import MyItems from "./components/MyItems/MyItems.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addItem",
        element: (
          <AddItemsPrivateRoute>
            <AddItem></AddItem>
          </AddItemsPrivateRoute>
        ),
      },

      {
        path: "/myList",
        element: (
          <MyItemsPrivateRoute>
            <MyItems></MyItems>
          </MyItemsPrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
