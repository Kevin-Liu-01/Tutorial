import "../App.css";
import React from "react";
import Navbar from "../elements/Navbar";

function Privacy() {
  return (
    <div className=" min-h-screen bg-gray-100 ">
      <Navbar page="" />
      <div class="">
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="relative z-10 flex items-baseline justify-between pt-12 pb-6 border-b border-gray-300">
            <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
              Privacy Policy
            </h1>
          </div>
          <div class="mt-4">
            <p class="mt-2">
              Tutorial does not have a privacy policy, as it is a concept.
              Private data will not be shared.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Privacy;
