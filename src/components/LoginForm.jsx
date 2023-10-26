import { useState } from "react";
import "../index.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    console.log(user);
    const url = "http://localhost:8000/token/";
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => response.json());
    //   const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const data = new FormData(form.current);
    //     fetch("http://localhost:8000/token/", {
    //       method: "POST",
    //       headers: new Headers({
    //         AuthHeader: "123",
    //       }),
    //       body: data,
    //     })
    //       .then((response) => response.json())
    //       .then((json) => setUsername(json.user));

    localStorage.clear();
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
    console.log(data);
    // console.log("DATATATATA:", data);
  };

  return (
    <>
      <h5>You must log-in to use the Shrink ray</h5>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChangeUsername}
            placeholder="Username"
            className="border-solid border-2 border-sky-500 rounded-lg "
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="Password"
            className="border-solid border-2 border-sky-500 rounded-lg "
          />
        </label>
        <button
          type="submit"
          className="bg-sky-500 hover:bg-blue-300 text-blue-700  py-2 px-4 rounded-full "
        >
          Login &rarr;
        </button>
      </form>
    </>
  );
}
