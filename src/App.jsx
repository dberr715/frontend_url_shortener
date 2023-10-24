import { useState } from "react";

import "./App.css";

function App() {
  return (
    // <>
    //   <h1>Url Shortener </h1>
    //   <input type="text" placeholder="Enter URL to be shortened" />
    //   <br/>
    //   <button type="submit">Shrinkify</button>
    // </>
    <div class="rounded-lg h-14 bg-gradient-to-r from-cyan-500 to-blue-500 radius relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <img
        src="/img/beams.jpg"
        alt=""
        class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        width="1308"
      />

      <h1 class="flex items-center text-5xl font-extrabold dark:text-white self-center ">
        Url Shrink Ray
        <span class=" bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
          PRO
        </span>
      </h1>

      <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div class="mx-auto max-w-md">
          <img
            src="src/images/shrinkray.png"
            class=" object-cover"
            alt="Shrink Ray Image"
          />
          <div class="divide-y divide-gray-300/50">
            <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p>Lets shorten that url!</p>
              <ul class="space-y-4">
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">Enter in a url</p>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">Click "Shrinkify"</p>
                </li>
                <li class="flex items-center">
                  <svg
                    class="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p class="ml-4">Now you have a shortened url!</p>
                </li>
              </ul>
            </div>
            <div class="pt-8 text-base font-semibold leading-7">
              <input
                type="text"
                placeholder="Type url here to shorten"
                class="border-solid border-2 border-sky-500 rounded-lg "
              />
              <br />
              <button type="submit" class="text-sky-500 hover:text-sky-600 ">
                Shrinkify &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
