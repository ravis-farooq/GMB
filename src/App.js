import lax from "lax.js";
import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import CarouselSection from "./components/Carousel";

import Contact from "./components/Contact";

import Hero from "./components/Hero";
import Product from "./components/Product";
import Service from "./components/Service";
function App() {
  useEffect(() => {
    lax.init();

    // Add a driver that we use to control our animations
    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });

    // Add animation bindings to elements
    lax.addElements(".herotext", {
      scrollY: {
        translateY: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 0, 40],
          {
            inertia: -1,
            inertiaMode: "absolute",
          },
        ],
      },
    });

    // return () => {
    //   second
    // }
  }, []);

  return (
    <div className="  overflow-x-hidden ">
      <Hero />

      <CarouselSection />

      <About />

      <div class="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
        <div class="relative">
          <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="lg:col-start-1  lg:max-w-2xl  ">
              <p class="text-base leading-6 text-indigo-500 font-semibold uppercase">
                Our products
              </p>
              <h4 class="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                Interactivity between team members is the key of the success.
              </h4>
              <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                Build a simply and powered collaborative space for all your
                team. Track, share, measure, you have a fully control, it&#x27;s
                never be simply and efficient.
              </p>
              <ul class="mt-8 md:grid md:grid-cols-2 gap-6">
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Live modifications
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Data tracker
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      24/24 support
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                      <svg
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Free tips to improve work time
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="mt-10 lg:col-start-2 ml-auto lg:-mx-4 relative relative-20 lg:mt-0 ">
              <div class="relative space-y-4">
                <div class="flex flex-wrap gap-5 items-end justify-center lg:justify-end space-x-4">
                  <Product />
                  <Product />
                  <Product />
                  <Product />
                  {/* <img
                    class="rounded-lg shadow-lg w-32 md:w-56"
                    width="200"
                    src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                    alt="1"
                  />
                  <img
                    class="rounded-lg shadow-lg w-40 md:w-64"
                    width="260"
                    src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                    alt="2"
                  />
                </div>
                <div class="flex items-start justify-center lg:justify-end space-x-4 ml-12">
                  <img
                    class="rounded-lg shadow-lg w-24 md:w-40"
                    width="170"
                    src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                    alt="3"
                  />
                  <img
                    class="rounded-lg shadow-lg w-32 md:w-56"
                    width="200"
                    src="https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
                    alt="4"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10 xs:px-6">
           <Product /> <Product /> <Product /> <Product />{" "}
          <Product />
        </div> */}
      </div>

      <Service />
      <Contact />
    </div>
  );
}

export default App;
