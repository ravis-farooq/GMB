import React from "react";
import Img from "../assets/GMB-8.webp";
function Product({ text = "I'm%20interested%20in%20your%20car%20for%20sale" }) {
  return (
    <div class="flex flex-col items-center justify-center xs:w-full max-w-sm ">
      <div
        class="w-full lake h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md "
        style={{
          backgroundImage: `url(${require("../assets/GMB-8.webp")})`,
        }}
      ></div>

      <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
        <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
          Nike Revolt
        </h3>

        <div class="flex  items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
          <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
          <a target="_blank" href={`https://wa.me/15551234567?text=${text}`}>
            <button class="px-2 flex items-center py-1 text-xs font-semibold text-gray-700 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-100 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              <img src="whatsapp.gif" width={"20px"} alt="" /> Order Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
