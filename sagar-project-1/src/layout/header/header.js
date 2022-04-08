import React, { Fragment } from "react";
import "../../assets/css/header.css";
import { AiOutlineDown, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoMailSharp, IoSettingsOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import img from "../../assets/img/header-logo.png";
import img1 from "../../assets/img/header-icon.png";
import { useSelector } from "react-redux";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const { firstNameIs } = useSelector((state) => state.Header);
  const { flagIs } = useSelector((state) => state.Header);
  const { lastNameIs } = useSelector((state) => state.Header);
  const { headerIconIs } = useSelector((state) => state.Header);
  const { profileImageIs } = useSelector((state) => state.Header);
  const { profileEmailIs } = useSelector((state) => state.Header);

  return (
    <>
      <div className="h-auto">
        <Disclosure as="nav" className="header-1">
          {({ open }) => (
            <>
              <div className=" mx-auto px-4 sm:px-6 lg:px-8 min-h-[70px]">
                <div className="flex items-center justify-between min-h-[70px] ">
                  <div className="flex items-center my-auto">
                    <div className="flex-shrink-0">
                      <img className="" src={img} alt="Workflow" />
                    </div>
                  </div>
                  <div className="flex my-auto">
                    <div className="ml-4 flex  md:ml-6 gap-5">
                      {flagIs >= 2 ? (
                        <button
                          type="button"
                          className=" hidden md:block p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6  text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                          </svg>
                        </button>
                      ) : (
                        ""
                      )}
                      {headerIconIs === true ? (
                        <Link to="./mailPage" className="hidden md:block my-auto">
                          <IoMailSharp className="h-6 w-6  text-white " />
                        </Link>
                      ) : (
                        ""
                      )}
                      <div className=" ">
                        <img src={img1} alt="img" className="max-h-[18px] my-auto" />
                      </div>

                      <Menu as="div" className="mt-1.5 hidden md:block">
                        <div>
                          <Menu.Button>
                            {flagIs >= 2 ? (
                              <div className="flex gap-2">
                                <div className="bg-[#E9E9ED] rounded-full h-8 w-8 ">
                                  {profileImageIs ? (
                                    <img
                                      src={profileImageIs}
                                      alt=""
                                      className="rounded-full h-8 w-8 "
                                    />
                                  ) : (
                                   null
                                  )}
                                </div>
                                <div className="flex gap-2">
                                  <p className="text-white my-auto">
                                    {firstNameIs} {lastNameIs}
                                  </p>
                                  <AiOutlineDown className="text-white my-auto" />
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </Menu.Button>
                        </div>
                        {headerIconIs === true ? (
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="z-10 origin-top-right absolute right-5 mt-2 w-auto  text-sm text-gray-700 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="flex gap-8 pl-5 pr-14 py-3 ">
                                <div className="bg-[#E9E9ED] rounded-full   h-14 w-14 my-auto ">
                                  <div className=" relative inline-block h-14 w-14 ">
                                    <img
                                      src={profileImageIs}
                                      alt=""
                                      className="rounded-full h-14 w-14   "
                                    />

                                    <BsCheckCircleFill class="absolute bottom-0 -right-[7px] inline-block w-5 h-5 bg-white text-green-600 border-2 border-white rounded-full" />
                                  </div>
                                </div>
                                <div>
                                  <p className="font-black">
                                    {firstNameIs} {lastNameIs}
                                  </p>
                                  <p className="text-[#7D7D89] text-xs">
                                    {profileEmailIs}
                                  </p>
                                  <div className="flex gap-3 text-[#7D7D89] text-xs mt-3">
                                    Available{" "}
                                    <FaChevronDown className="textblue my-auto" />
                                  </div>
                                </div>
                              </div>
                              <div className="font-extrabold ">
                                <hr />
                                <div className="  px-4 py-4 flex gap-2 ">
                                  <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18px"
                                    height="18px"
                                    viewBox="0 0 32 32"
                                  >
                                    <title>personal-information</title>
                                    <path d="M16.192 1.536c-3.393 0-6.144 2.751-6.144 6.144s2.751 6.144 6.144 6.144c3.393 0 6.144-2.751 6.144-6.144v0c0-3.393-2.751-6.144-6.144-6.144v0zM8.512 7.68c0-4.242 3.438-7.68 7.68-7.68s7.68 3.438 7.68 7.68c0 4.242-3.438 7.68-7.68 7.68v0c-4.242 0-7.68-3.438-7.68-7.68v0z"></path>
                                    <path d="M28.915 22.99c-3.684-1.996-8.065-3.169-12.72-3.169s-9.036 1.173-12.864 3.24l0.144-0.071c-0.199 0.107-0.333 0.314-0.333 0.553 0 0 0 0.001 0 0.001v-0 5.64c0 0.424 0.344 0.768 0.768 0.768v0h24.57c0.424 0 0.768-0.344 0.768-0.768v0-5.64c0-0 0-0 0-0.001 0-0.238-0.133-0.446-0.329-0.551l-0.003-0.002zM2.752 21.635c3.894-2.11 8.524-3.351 13.445-3.351s9.551 1.24 13.597 3.426l-0.152-0.075c0.688 0.371 1.147 1.086 1.147 1.909 0 0 0 0 0 0v0 5.64c0 1.272-1.032 2.304-2.304 2.304v0h-24.581c-1.272 0-2.304-1.032-2.304-2.304v0-5.64c0.001-0.823 0.462-1.539 1.14-1.903l0.012-0.006z"></path>
                                  </svg>
                                  <p>My profile</p>
                                </div>
                                <hr />
                                <Link
                                  to="./changePassword"
                                  className=" px-4 py-4 flex gap-2"
                                >
                                  <IoSettingsOutline className="h-[18px] w-[18px]" />
                                  <p>Settings</p>
                                </Link>
                              </div>

                              <div className="mt-10 text-[#7D7D89] ">
                                <hr />
                                <div className="px-4 py-2">Sign out</div>
                              </div>
                            </Menu.Items>
                          </Transition>
                        ) : (
                          ""
                        )}
                      </Menu>
                    </div>
                    {flagIs >= 2 ? (
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="  inline-flex items-center justify-center p-2 rounded-md text-white ">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <AiOutlineClose
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <AiOutlineMenu
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>): "" }
                  </div>

                </div>  
              </div>
              {flagIs >= 2 ? (
              <Disclosure.Panel className="md:hidden ">
                <div className="pt-4 pb-3 bg-gray-200">
                  <button
                    type="button"
                    className=" p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6  text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                  {/* {headerIconIs === true ? ( */}
                  <Link to="./mailPage">
                    <IoMailSharp className="h-6 w-6  text-white" />
                  </Link>
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={profileImageIs}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-black leading-none ">
                        {firstNameIs} {lastNameIs}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {profileEmailIs}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    <div className="font-extrabold ">
                      <hr />
                      <div className="  px-4 py-4 flex gap-2 ">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="18px"
                          height="18px"
                          viewBox="0 0 32 32"
                        >
                          <title>personal-information</title>
                          <path d="M16.192 1.536c-3.393 0-6.144 2.751-6.144 6.144s2.751 6.144 6.144 6.144c3.393 0 6.144-2.751 6.144-6.144v0c0-3.393-2.751-6.144-6.144-6.144v0zM8.512 7.68c0-4.242 3.438-7.68 7.68-7.68s7.68 3.438 7.68 7.68c0 4.242-3.438 7.68-7.68 7.68v0c-4.242 0-7.68-3.438-7.68-7.68v0z"></path>
                          <path d="M28.915 22.99c-3.684-1.996-8.065-3.169-12.72-3.169s-9.036 1.173-12.864 3.24l0.144-0.071c-0.199 0.107-0.333 0.314-0.333 0.553 0 0 0 0.001 0 0.001v-0 5.64c0 0.424 0.344 0.768 0.768 0.768v0h24.57c0.424 0 0.768-0.344 0.768-0.768v0-5.64c0-0 0-0 0-0.001 0-0.238-0.133-0.446-0.329-0.551l-0.003-0.002zM2.752 21.635c3.894-2.11 8.524-3.351 13.445-3.351s9.551 1.24 13.597 3.426l-0.152-0.075c0.688 0.371 1.147 1.086 1.147 1.909 0 0 0 0 0 0v0 5.64c0 1.272-1.032 2.304-2.304 2.304v0h-24.581c-1.272 0-2.304-1.032-2.304-2.304v0-5.64c0.001-0.823 0.462-1.539 1.14-1.903l0.012-0.006z"></path>
                        </svg>
                        <p>My profile</p>
                      </div>
                      <hr />

                      <Link
                        to="./changePassword"
                        className=" px-4 py-4 flex gap-2"
                      >
                        <IoSettingsOutline className="h-[18px] w-[18px]" />
                        <p>Settings</p>
                      </Link>
                    </div>

                    <div className="mt-10 text-[#7D7D89] ">
                      <hr />
                      <div className="px-4 py-2">Sign out</div>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>) : null}
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}

export default Header;
