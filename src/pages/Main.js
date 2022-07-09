import "../App.css";
import { Disclosure } from "@headlessui/react";
import { ClockIcon, UserIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "/", page: "Home" },
  { name: "Find Tutors", href: "/find-a-tutor", page: "FindTutor" },
  { name: "Find Clients", href: "/find-a-client", page: "FindClient" },
  { name: "Create a Listing", href: "/create-listing", page: "Creator" },
];

function Main() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="min-h-screen bg-gray-100 drop-shadow-sm">
      <div className="relative bg-white overflow-hidden drop-shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="relative pt-1 pr-4 sm:pr-6 lg:px-3">
              {/*Navbar*/}
              <Disclosure as="nav" className="bg-white ">
                {({ open }) => (
                  <>
                    <div className="px-2 sm:px-0 border-b-indigo-500">
                      <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                          {/* Mobile menu button*/}
                          <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                              <XIcon
                                className="block h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <MenuIcon
                                className="block h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </Disclosure.Button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                          <a
                            href="/"
                            className="flex-shrink-0 flex items-center"
                          >
                            <img
                              className="hidden lg:block h-10 w-auto"
                              src="/images/TutorialNavbarLogo.png"
                              alt="TutorialLogo"
                              href="/"
                            />
                            <img
                              className="block lg:hidden h-10 w-auto"
                              src="/images/TutorialNavbarLogo.png"
                              alt="TutorialLogo"
                            />
                          </a>
                          <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                              {navigation.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className={classNames(
                                    item.page === "Home"
                                      ? "hover:bg-gray-300 text-gray-700 border border-t-0 border-l-0 border-r-0 border-b-4 border-indigo-500"
                                      : "text-gray-400 hover:bg-gray-300 hover:text-gray-700 rounded-b-md",
                                    "px-3 py-2 text-sm font-medium rounded-t-md"
                                  )}
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={classNames(
                              item.page === "Home"
                                ? "hover:bg-gray-300 text-gray-700 w-[30%] border border-t-0 border-l-0 border-r-0 border-b-4 border-indigo-500"
                                : "text-gray-400 hover:bg-gray-300 hover:text-gray-700",
                              "block px-3 py-2 text-base font-medium"
                            )}
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <div className="border border-b-2 border-t-0 border-x-0 border-gray-300 mt-3"></div>

            <main class="mt-5 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-16 lg:px-8 xl:mt-17">
              <div class="sm:text-center lg:text-left">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span class="block xl:inline">Find a tutor</span>
                  <span class="block text-indigo-600 xl:inline"> near you</span>
                </h1>
                <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Tutorial allows clients and tutors to find and connect each
                  other for their needs. No signup needed - just put your
                  listing on Tutorial.
                </p>
                <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div class="rounded-md shadow">
                    <a
                      href="/find-a-tutor"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      {" "}
                      Find Tutors{" "}
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/find-a-client"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      {" "}
                      Find Clients{" "}
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://schoolnotices-production.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/02/08081748/tutoring.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="bg-gray-100">
        <div className=" max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2">
          <div className="flex drop-shadow-lg md:my-10 mt-10 place-content-center">
            <a href="/find-a-tutor" className="relative w-[70%]">
              <img
                src="/images/FindTutorImage.png"
                alt="Find a tutor page"
              ></img>
            </a>
          </div>

          <div className=" place-content-center mt-20 mb-10 mx-10 md:mx-0">
            <p className=" text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center md:text-left">
              How does it work?
            </p>
            <p className="mt-4 max-w-5xl text-xl text-gray-500 text-center md:text-left ">
              Simply upload a listing with your details onto Tutorial. Your
              listing will be able to be viewed by anyone seeking your services.
            </p>
            <div>
              <div className="absolute mt-1 flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white ">
                <ClockIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 max-w-5xl text-gray-500 mt-10">
                Tutorial allows clients and tutors to connect with each other
                and find each other quickly. No more asking around on chats
                anymore - now you can easily discover suitable tutors/clients.
              </p>
            </div>
            <dt>
              <div className="absolute  flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white ">
                <UserIcon className=" h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 max-w-5xl  text-gray-500 mt-10">
                Tutorial allows every individual to share necessary information
                about their details and requirements. However, if you have any
                reservations, you can easily email them and contact them for
                inquiries and questions.
              </p>
            </dt>
          </div>
        </div>
      </div>
      <div class="bg-white">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">Ready to Begin?</span>
            <span class="block text-indigo-600">Create a listing today.</span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
              <a
                href="/create-tutor"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                {" "}
                Create a tutor listing{" "}
              </a>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
              <a
                href="/create-client"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                {" "}
                Create a client listing{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
