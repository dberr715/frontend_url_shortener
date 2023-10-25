
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setIsAuth(true);
    }
  }, [isAuth]);
  return (
    <div>
      <navbar bg="dark" variant="dark">
        
        <nav className="me-auto">
          {isAuth ? <Link to = "/">Home</Link> : null}
        </nav>
        <nav>
          {isAuth ? (
            <Link to ="/logout">Logout</Link>
          ) : (
            <Link to ="/login">Login</Link>
          )}
        </nav>
      </navbar>
    </div>
  );
}
