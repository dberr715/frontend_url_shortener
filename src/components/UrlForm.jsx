import { useState } from "react";
import { nanoid } from "nanoid";

export default function UrlForm() {
  const [title, setTitle] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeUrl = (e) => {
    setLongUrl(e.target.value);
  };
  //   console.log(localStorage.getItem("access_token"));
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUrl = {
      title,
      longUrl,
      shortUrl: nanoid(8),
      userId: 1,
    };
    
    const apiUrl = "http://localhost:8000/urldata/";
    const data = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify(newUrl),
    }).then((response) => response.json());
    console.log("DATA: ", data);

    // localStorage.clear();
    // localStorage.setItem("access_token", data.access);
    // localStorage.setItem("refresh_token", data.refresh);
    // console.log(data);
    // // console.log("DATATATATA:", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="pt-8 text-base font-semibold leading-7">
        <input
          name="title"
          type="text"
          placeholder="Url Nickname"
          className="border-solid border-2 border-sky-500 rounded-lg "
          value={title}
          onChange={handleChangeTitle}
        />
        <br />
        <input
          type="url"
          name="longUrl"
          value={longUrl}
          onChange={handleChangeUrl}
          placeholder="Long url"
          className="border-solid border-2 border-sky-500 rounded-lg "
        />
        <br />
        <input
          type="text"
          placeholder="Short url"
          className="border-solid border-2 border-sky-500 rounded-lg "
        />

        <br />
        <button type="submit" className="text-sky-500 hover:text-sky-600 ">
          Shrinkify &rarr;
        </button>
      </div>
      {/* <input
          type="text"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />
      </label>
      <label>
        Url
        <input type="url" name="url" value={url} onChange={handleChangeUrl} />
      </label>
      <button type="submit">Add Url</button> */}
    </form>
  );
}
