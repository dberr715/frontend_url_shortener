import { Outlet, Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import "../App.css";

import { Navigation } from "../components/Navigations";
import UrlForm from "../components/UrlForm";
import LinkList from "../components/LinkList";
import HomeText from "../components/HomeText";
function App() {
    
  return (
    <>
      <Outlet />
      <LoginForm />
      <HomeText />
      <LinkList linkList={} />
    </>
  );
}

export default App;
