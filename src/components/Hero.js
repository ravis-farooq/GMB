import React from "react";

import Header from "./Header";
import Typewriter from "typewriter-effect";
function Hero() {
  return (
    <div class="w-full bg-center bg-cover h-screen bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')] ">
      <Header />
      <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div class="">
          <h1 class="text-2xl font-semibold text-white uppercase w-[16rem]  max-w-[16rem] lg:text-3xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2500)
                  .typeString(
                    "<strong>only <span style='color: #27ae60;'>5kb</span> Gzipped!</strong>"
                  )
                  // .pauseFor(300)

                  .typeString(
                    '<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
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
