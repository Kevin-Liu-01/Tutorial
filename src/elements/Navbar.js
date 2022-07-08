import "../App.css";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "/", page: "Home" },
  { name: "Find Tutors", href: "/find-a-tutor", page: "FindTutor" },
  { name: "Find Clients", href: "/find-a-client", page: "FindClient" },
  { name: "Create a Listing", href: "/create-listing", page: "Creator" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar(props) {
  return (
    <div className="bg-white drop-shadow-md mt-1">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-1 lg:px-2 border-b-indigo-500">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <a href="/" className="flex-shrink-0 flex items-center">
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
                            item.page === props.page
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
                      item.page === props.page
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
  );
}

export default Navbar;
