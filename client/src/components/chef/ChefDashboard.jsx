"use client";
import React, { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";
import { chefSideMenu } from "@/config/data";
import CloseIcon from "./chef-pages/Svg/CloseIcon";
import { removeChefToken, rem_chefDetails } from "@/redux/adminSlice/authSlice";
import Link from "next/link";
import Image from "next/image";

const ChefDashboard = () => {
  const dispatch = useDispatch();
  const [ComponentId, setComponentId] = useState(0);

  const [showDrawer, setShowDrawer] = useState(false);
  const token = useSelector((state) => state?.auth)?.chef_auth;
  const router = useRouter();

  const handleClick = (id, url) => {
    setComponentId(id);
    setShowDrawer(false);
  };
  const handleSignout = async () => {
    try {
      const res = await axios.get(`/api/auth/chefLogout`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      // console.log(res);
      if (res?.data?.success) {
        toast.success("Logout successfully !");
        dispatch(removeChefToken());
        dispatch(rem_chefDetails());
        router.push("/chef-dashboard/sign-in");
      } else {
        dispatch(removeChefToken());
        dispatch(rem_chefDetails());
        router.push("/chef-dashboard/sign-in");
        // toast.error("Logout failed try again !");
      }
    } catch (error) {
      dispatch(removeChefToken());
      dispatch(rem_chefDetails());
      router.push("/chef-dashboard/sign-in");
      console.error("Error occurred:", error);
      // toast.error(error?.response?.data?.error || "Invalid token !");
    }
  };

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="">
      {/* ----------  Sidemenu start ------------------ */}
      <div
        className={`fixed left-0 top-0 w-64 h-full bg-primary p-4 z-50 sidebar-menu text-white transition-transform
                 ${isOpen ? "active" : ""}`}
      >
        <div
          className="relative text-white  flex flex-col gap-[5px] cursor-pointer lg:hidden  text-right mr-3 mt-2  md:hidden"
          onClick={() => setShowDrawer(false)}
        >
          <div className="">
            {" "}
            <CloseIcon />
          </div>
        </div>
        <div className="">
          <a
            href="#"
            class="flex items-center pb-4 border-b border-b-[#f3f3f359]"
          >
            <img
              src="https://placehold.co/32x32"
              alt=""
              class="w-8 h-8 rounded object-cover"
            />
            <span class="text-lg font-bold text-white ml-3">Logo</span>
          </a>
          {/* <div className="bg-white h-[1px] w-[70%]  px-4 mt-[10px]"></div> */}
          <div className="flex flex-col 2xl:gap-6 gap-3 pt-[60px]">
            {chefSideMenu.map((item, index) => (
              <div
                key={index}
                className={`flex items-center py-2 px-4 text-gray-300 hover:bg-[#465258] hover:text-white rounded-md
                   group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-[#465258] group-[.selected]:text-gray-100 cursor-pointer
                                    ${
                                      item.id === ComponentId
                                        ? "bg-[#465258] text-[white]"
                                        : ""
                                    } `}
                onClick={() => handleClick(item.id, item.url)}
              >
                {item?.icon}
                <p className=" capitalize whitespace-nowrap ">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#f3f3f359] h-[1px]  px-4 mt-[100px] mb-[20px]"></div>
        </div>

        <div
          className={`flex items-center py-2 px-4 text-gray-300 hover:bg-[#465258] hover:text-gray-100 rounded-md 
            group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-[#465258] group-[.selected]:text-gray-100  cursor-pointer`}
          onClick={handleSignout}
        >
          {/* <LogoutIcon /> */}
          <div>
            <p>Sign Out</p>
          </div>
        </div>
      </div>
      {/* ----------  Sidemenu end ------------------ */}

      {/* ----------  right start ------------------ */}
      <div
        className={`w-full md:ml-64 bg-gray-50 min-h-screen transition-all main ${
          isOpen ? "md:w-[calc(100%-256px)] " : "active "
        }`}
      >
        {/* ----------  top start ------------------ */}
        <div className="py-2 px-6 bg-white flexBetween shadow-md shadow-black/5 sticky top-0 left-0 z-10 mb-[15px]">
          <div className="flexStart">
            <div
              className="py-2 px-3 flex flex-col gap-[3px] cursor-pointer "
              onClick={toggleSidebar}
            >
              <div className="bg-black h-[2px] w-[20px]"></div>
              <div className="bg-black h-[2px] w-[20px]"></div>
              <div className="bg-black h-[2px] w-[15px]"></div>
            </div>

            <ul className="flex items-center text-sm ml-4">
              <li className="mr-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 font-medium"
                >
                  Dashboard
                </a>
              </li>
              <li className="text-gray-600 mr-2 font-medium">/</li>
              <li className="text-gray-600 mr-2 font-medium">Analytics</li>
            </ul>
          </div>
          <div className="flex gap-5 items-center">
            <div className="">
              <Image
                src="/images/profile.svg"
                alt="profile"
                height={30}
                width={30}
              />
            </div>

            <div className="">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center items-center">
                    <div className="flex gap-1 items-end">
                      <p className="">Dealer</p>
                      <Image
                        src="/images/downarrow.svg"
                        alt="profile"
                        height={18}
                        width={18}
                      />
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform scale-95"
                  enterTo="transform scale-100"
                  leave="transition ease-in duration=75"
                  leaveFrom="transform scale-100"
                  leaveTo="transform scale-95"
                >
                  <Menu.Items className="absolute right-0 w-56 z-50 mt-2 px-2 py-5 shadow-2xl rounded-lg origin-top-right border border-[#f3f3f3]  bg-white side-profile">
                    <div className="p-1 flex flex-col gap-4">
                      <Menu.Item>
                        <Link
                          href="/change-password"
                          className="flex gap-x-3  hover:underline text-gray-700 rounded  text-sm group transition-colors items-center"
                        >
                          {/* <PasswordIcon className="h-4 w-4 mr-2" /> */}
                          Change password
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          href="/login"
                          className="flex gap-x-3  hover:underline text-gray-700 rounded  text-sm group transition-colors items-center"
                        >
                          {/* <SignOutIcon /> */}
                          Sign out
                        </Link>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        {/* ----------  right end ------------------ */}

        <div className="p-6">
          {chefSideMenu.map((item, index) => (
            <Fragment key={index}>
              {ComponentId === item.id && item.component}
            </Fragment>
          ))}
        </div>
      </div>

      {/* ----------  right end ------------------ */}
    </section>
  );
};

export default ChefDashboard;
