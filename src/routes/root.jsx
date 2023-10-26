import { Outlet } from "react-router-dom";
import { AuthProvider } from "../AuthContext";
import MainNav from "../components/Navigations";
import Home from "./homePage";

import "../index.css";

export default function Root() {
  return (
    <AuthProvider>
      <MainNav />

      <main>
        <Outlet />
      </main>
    </AuthProvider>
  );
}
