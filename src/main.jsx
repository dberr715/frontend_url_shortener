import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/errorPage";
import Home, { loader as homeLoader } from "./routes/homePage";
import LoginPage from "./routes/loginPage";
import LogoutPage, { loader as logoutLoader } from "./routes/logoutPage";
import "./index.css";
import HomeText from "./components/HomeText";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        // index: true,
        path: "home/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "login/",
        element: <LoginPage />,
      },
      {
        path: "logout/",
        element: <LogoutPage />,
        loader: logoutLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
