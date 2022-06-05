import React from "react";

import Header from "./Header";
import Typewriter from "typewriter-effect";
function Hero() {
  return (
    <div class="w-full bg-center bg-cover h-screen bg-img ">
      <Header />
      <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div class="">
          <h1 class="herotext text-2xl font-semibold text-white uppercase w-[20rem] h-[16rem]  lg:text-3xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2500)
                  .typeString(
                    "<strong>Welcome to<span style='color: #27ae60;'> GMB Timber Traders</span> </strong>"
                  )
                  // .pauseFor(300)

                  .typeString(
                    " <strong> <br/> Quality and Assurance prior sale</strong>"
                  )
                  .pauseFor(1000)
                  .start();
              }}
              options={{
                //   strings: ["Hello", "World"],
                skipAddStyles: false,
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
