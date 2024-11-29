import { Fragment, useState } from "react";
import {
  Dialog,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = {
  categories: [
    {
      id: "1",
      name: "Home",
      to: "/",
    },

    {
      id: "2",
      name: "Products",
      to: "/product",
    },

    {
      id: "3",
      name: "About",
      to: "/about",
    },

    {
      id: "4",
      name: "Contact",
      to: "/contact",
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-50">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Dialog.Panel className="relative  flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px  flex flex-row space-x-8 px-4">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        to={category.to}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? "border-red-600 text-red-600"
                              : "border-transparent text-gray-900",
                            "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                          )
                        }
                      >
                        <Link to={category.to} className="w-full">
                          {category.name}
                        </Link>
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
              </Tab.Group>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition.Root>
      {/*------Main header section start-------*/}
      <header className="relative my-1 mx-2">
        <p className="flex h-10 items-center justify-center bg-black text-sm font-medium text-white sm:px-6 lg:px-7 -mb-3 ">
          Summer sales now on: Up to 40% off
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 "
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0 py-10">
                <a href="#">
                  <span className="sr-only">Company</span>
                  <img className="h-8 w-auto sr-only" src="" alt="" />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch ">
                <div className="flex h-full space-x-6 mx-26 pt-4 mt-2 py-4">
                  <p className="text-2xl z-10 px-1">Company logo</p>
                  {navigation.categories.map((category) => (
                    <Popover
                      key={category.name}
                      to={category.to}
                      className="flex"
                    >
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-red-600 text-red-600"
                                  : "border-transparent text-black",
                                "relative z-10 px-2 flex items-center outline-none border-b-2  font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              <Link to={category.to} className="w-full">
                                {category.name}
                              </Link>
                            </Popover.Button>
                          </div>
                          <div
                            className="absolute inset-0 top-1/2 py-4 border-b  shadow"
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Popover>
                  ))}
                </div>
              </Popover.Group>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"></div>

                {/* Search */}
                <div className=" relative flex lg:ml-6 mt-4 max-sm:hidden">
                  {/*-------------------- search icon --- */}
                  <div className="pointer-events-none absolute  ml-24 inset-y-0 left-0 flex items-center pl-3 content-center ">
                    <MagnifyingGlassIcon
                      className="h-6 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  {/*------- search area---------- */}
                  <input
                    id="search"
                    name="search"
                    className=" ml-24  w-full rounded-md border-0 bg-gray-200  py-1.5 pl-10 pr-3 text-black-900 ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search for product "
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
