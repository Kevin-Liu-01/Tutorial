import "../App.css";
import { CheckIcon } from "@heroicons/react/outline";
import Navbar from "../elements/Navbar";

function Creator() {
  return (
    <div className="min-h-screen bg-slate-200">
      <Navbar page="Creator" />
      <main className="">
        <div class="py-12 ">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
              <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Create a listing
              </h2>
              <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Choose which listing you'd like to make.
              </p>
            </div>

            <div class="mt-10 ">
              <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 ">
                <div class="relative py-4 hover:py-2 ease-out hover:ease-out duration-300">
                  <div class="m-4 bg-white shadow-lg border rounded-lg">
                    <div class="m-4">
                      <a
                        href="/create-tutor"
                        class="absolute flex items-center justify-center h-12 w-12 rounded-md hover:bg-indigo-500 text-indigo-200  hover:text-indigo-50 bg-white transition duration-150"
                      >
                        <CheckIcon />
                      </a>
                      <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                        Create a tutor listing
                      </p>
                      <dd class="mt-2 ml-16 text-base text-gray-500">
                        Create a new listing for a prospective tutor.
                      </dd>
                    </div>
                  </div>
                </div>

                <div class="relative py-4 hover:py-2 ease-out hover:ease-out duration-300">
                  <div class="m-4 bg-white shadow-lg border rounded-lg">
                    <div class="m-4">
                      <a
                        href="/create-client"
                        class="absolute flex items-center justify-center h-12 w-12 rounded-md hover:bg-indigo-500 text-indigo-200  hover:text-indigo-50 bg-white transition duration-150"
                      >
                        <CheckIcon />
                      </a>
                      <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                        Create a client listing
                      </p>
                      <dd class="mt-2 ml-16 text-base text-gray-500">
                        Upload your details and contact information.
                      </dd>
                    </div>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Creator;
