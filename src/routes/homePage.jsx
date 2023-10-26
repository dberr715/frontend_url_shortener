import { useState } from "react";
import LoginForm from "../components/LoginForm";
import "../index.css";
import { redirect, useLoaderData } from "react-router-dom";
import  MainNav  from "../components/Navigations";
import LinkList from "../components/LinkList";
import UrlForm from "../components/UrlForm";


export async function loader() {
  try {
    const url = "http://localhost:8000/urldata/";
    const linkList = await fetch(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((response) => response.json());
    if (!Array.isArray(linkList)) {
      throw Error("Not an array of links");
    }
    return { linkList };
  } catch (error) {
    return redirect("/login");
  }
}

export default function Home() {
  const { linkList } = useLoaderData();

  return (
    <>
      <UrlForm />

      <LinkList linkList={linkList} />
    </>
  );
}
// export async function loader() {
//   const url = "http://127.0.0.1:8000/urldata/";
//   const linkList = await fetch(url, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   }).then((response) => response.json());
//   return linkList;
// }

// function App() {
//     const {List}= useLoaderData()
//     console.log(List)

//   return (
//     <>
//       {/* <LoginForm />
//       <UrlForm /> */}
//       {/* <LinkList /> */}
//       <LinkList List={List} />
//     </>
//   );
// }

// export default App;
