import { useState } from "react";
import LoginForm from "../components/LoginForm";
import "../App.css";
import { BrowserRouter, Routes, Route, useLoaderData } from "react-router-dom";
import { Navigation } from "../components/Navigations";
import LinkList from "../components/LinkList";
import UrlForm from "../components/UrlForm";


export async function loader() {
  const url = "http://127.0.0.1:8000/urldata/";
  const linkList = await fetch(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
  return linkList;
}

function App() {
    const {List}= useLoaderData()
    console.log(List)

  return (
    <>
      {/* <LoginForm />
      <UrlForm /> */}
      {/* <LinkList /> */}
      <LinkList List={List} />
    </>
  );
}

export default App;
