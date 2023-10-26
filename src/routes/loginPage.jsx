import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../AuthContext";
import { Form } from "react-router-dom";
import "../index.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setIsAuth } = useAuth();
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

    try {
      const url = "http://localhost:8000/token/";
      const data = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((response) => response.json());

      const { access, refresh, userId } = data;
      console.log("DATAAAAAA", data);
      localStorage.clear();
      localStorage.setItem("user_id", userId);
      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      console.log("We're IN!");
      setIsAuth(true);
      return navigate(`/home`);
    } catch (error) {
      console.error("ERROR: ", error);
      return navigate(`/login`, { replace: true });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChangeUsername}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
        />
      </label>
      <button type="submit">Login</button>
    </Form>
  );

  //       <section class="bg-gray-50 dark:bg-gray-900">
  //         <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  //           <a
  //             href="#"
  //             class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
  //           >
  //             <img
  //               class="w-8 h-8 mr-2"
  //               src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
  //               alt="logo"
  //             />
  //             ShrinkRay
  //           </a>
  //           <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
  //             <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
  //               <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
  //                 Sign in to your account
  //               </h1>
  //               <form class="space-y-4 md:space-y-6" action="#">
  //                 <div>
  //                   <input
  //                     type="text"
  //                     name="username"
  //                     value={username}
  //                     onChange={handleChangeUsername}
  //                     id="email"
  //                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //                     placeholder="enter username"
  //                     required=""
  //                   />
  //                 </div>
  //                 <div>
  //                   <input
  //                     type="password"
  //                     name="password"
  //                     value={password}
  //                     onChange={handleChangePassword}
  //                     id="password"
  //                     placeholder="••••••••"
  //                     class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //                     required=""
  //                   />
  //                 </div>
  //                 {/* <div class="flex items-center justify-between">
  //                       <div class="flex items-start">

  //                       </div>
  //                       <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
  //                   </div> */}
  //                 <button
  //                   onSubmit={handleSubmit}
  //                   type="submit"
  //                   class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
  //                 >
  //                   Sign in
  //                 </button>
  //               </form>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //     </Form>
  //   );
}
