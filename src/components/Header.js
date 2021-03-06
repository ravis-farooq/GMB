import React, { useState } from "react";
import Logo from "../assets/Final gmb-04.png";
function Header() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="absolute left-0 right-0 top-0">
      <nav class="  ">
        <div class="max-w-7xl mx-auto px-8">
          <div class="flex items-center justify-between h-16">
            <div class="w-full justify-between flex items-center">
              <a class="flex-shrink-0" href="/">
                <img class=" w-40 object-contain" src={Logo} alt="Workflow" />
              </a>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <a
                    class="text-gray-300  active:text-red-500 focus:text-red-500 hover:text-gray-100 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    href="/#"
                  >
                    Link
                  </a>

                  <a
                    target="_blank"
                    class="text-gray-300 active:text-red-500 focus:text-red-500 hover:text-gray-100 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    href="https://wa.me/15551234567?text=I'm%20interested%20in%20your%20car%20for%20sale"
                  >
                    Link
                  </a>
                  <a
                    class="text-gray-300 active:text-red-500 focus:text-red-500  hover:text-gray-100 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    href="/#"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="ml-4 flex items-center md:ml-6"></div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button
                onClick={() => handleToggle()}
                class="text-gray-300 dark: hover:text-gray-100 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      
        <div
          class={`md:hidden transition-all duration-1000 ${
            toggle ? "opacity-0 max-h-0" : "opacity-100 max-h-[440px]"
          } `}
        >
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              class="text-gray-300 hover:text-gray-100 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Link
            </a>

            <a
              class="text-gray-300 hover:text-gray-100 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Link
            </a>
            <a
              class="text-gray-300 hover:text-gray-100 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Link
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
