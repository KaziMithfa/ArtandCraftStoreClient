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
import Update from "./components/Update/Update.jsx";
import AllItems from "./components/AllItems/AllItems.jsx";
import VIewDetials from "./components/ViewDetails/VIewDetials.jsx";
import ViewDetailsPrivateRoute from "./components/ViewDetailsPrivateRoute/ViewDetailsPrivateRoute.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://art-and-craft-store-server-alpha.vercel.app/items"),
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

      {
        path: `/item/:id`,
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://art-and-craft-store-server-alpha.vercel.app/item/${params.id}`
          ),
      },

      {
        path: "/viewDetails/:id",
        element: (
          <ViewDetailsPrivateRoute>
            <VIewDetials></VIewDetials>
          </ViewDetailsPrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://art-and-craft-store-server-alpha.vercel.app/item/${params.id}`
          ),
      },

      {
        path: "/items",
        element: <AllItems></AllItems>,
        loader: () =>
          fetch("https://art-and-craft-store-server-alpha.vercel.app/items"),
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
