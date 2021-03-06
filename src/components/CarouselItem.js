import React from "react";
import Img from "../assets/GMB-1.webp";
function CarouselItem() {
  return (
    <section class="bg-gray-100  py-20 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center ">
      <div class=" dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
        {/* <div class="lg:w-1/2"> */}
        <div
          class="  basis-full  w-full bg-cover   lg:rounded-lg lg:h-full "
          // style={{
          //   backgroundImage: `url(${require("../assets/GMB-1.webp")})`,
          // }}
        >
          <img src={Img} alt="" />
          {/* </div> */}
        </div>

        <div class="max-w-xl sm:w-full  sm:mx-auto px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">
            Build Your New{" "}
            <span class="text-blue-600 dark:text-blue-400">Idea</span>
          </h2>
          <p class="mt-4 text-gray-600 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            modi reprehenderit vitae exercitationem aliquid dolores ullam
            temporibus enim expedita aperiam mollitia iure consectetur dicta
            tenetur, porro consequuntur saepe accusantium consequatur.
          </p>

          <div class="mt-8">
            <a
              href="#"
              class="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarouselItem;
