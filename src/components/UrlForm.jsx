import { useRef } from "react";
import { useRevalidator } from "react-router-dom";
import { nanoid } from "nanoid";
import { Form } from "react-router-dom";
import "../index.css";
// import { Button } from "react-router-dom";

export default function UrlForm() {
  const revalidator = useRevalidator();
  const updateForm = useRef(null);
  const auth = localStorage.getItem("access_token");
  const userId = localStorage.getItem("user_id");

  console.log(userId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(updateForm.current);
    console.log(formData);
    const apiUrl = "http://localhost:8000/urldata/";
    await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth}`,
      },
      body: formData,
    });
    updateForm.current.reset();
    revalidator.revalidate();
  };

  return (
    <Form ref={updateForm} onSubmit={handleSubmit}>
      <div className="pt-8 text-base font-semibold leading-7">
        <input
          name="title"
          type="text"
          placeholder="Url Nickname"
          className="border-solid border-2 border-sky-500 rounded-lg "
          //   value={title}
          //   onChange={handleChangeTitle}
        />
        <br />
        <input
          type="url"
          name="longUrl"
          //   value={longUrl}
          //   onChange={handleChangeUrl}
          placeholder="Long url"
          className="border-solid border-2 border-sky-500 rounded-lg "
        />
        <br />
        {/*  */}

        <br />
        <input type="hidden" name="shortUrl" value={nanoid(8)} />
        <input type="hidden" name="userId" value={userId} />
        <button
          type="submit"
          className="text-sky-500 hover:text-sky-600 "
          onSubmit={handleSubmit}
        >
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
    </Form>
  );
}
