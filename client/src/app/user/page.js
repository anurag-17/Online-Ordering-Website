"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import cap from "../../../public/images/cap.svg";
import food1 from "../../../public/images/food1.svg";
import food2 from "../../../public/images/food2.svg";
import food3 from "../../../public/images/food3.jpg";
import food4 from "../../../public/images/food4.png";
import food5 from "../../../public/images/food5.jpg";
import food6 from "../../../public/images/food6.jpg";
import maggie from "../../../public/images/maggie.svg";
import calen from "../../../public/images/calender.svg";
import microweb from "../../../public/images/microweb.svg";
import person1 from "../../../public/images/Rectangle11.svg";
import person2 from "../../../public/images/Rectangle12.svg";
import person3 from "../../../public/images/Rectangle13.svg";
import person4 from "../../../public/images/Rectangle14.svg";
import person5 from "../../../public/images/Rectangle15.svg";
import eightPoster from "../../../public/images/eight-poster.svg";
import plate1 from "../../../public/images/Rectangle86.svg";
import plate2 from "../../../public/images/Rectangle87.svg";
import plate3 from "../../../public/images/Rectangle88.svg";
import plate4 from "../../../public/images/Rectangle89.svg";
import review1 from "../../../public/images/Ellipse31.svg";
import review2 from "../../../public/images/Ellipse32.svg";
import review3 from "../../../public/images/Ellipse33.svg";
import fb from "../../../public/images/fb.svg";
import linkedin from "../../../public/images/in.svg";
import insta from "../../../public/images/insta.svg";
import twiter from "../../../public/images/twiter.svg";
import google from "../../../public/images/google.svg";
import Rectangle1 from "../../../public/images/Rectangle162.svg";
import Rectangle2 from "../../../public/images/Rectangle263.svg";
import Rectangle3 from "../../../public/images/Rectangle364.svg";
import Rectangle4 from "../../../public/images/Rectangle465.svg";
import Rectangle5 from "../../../public/images/Rectangle574.svg";
import Rectangle6 from "../../../public/images/Rectangle675.svg";
import Rectangle7 from "../../../public/images/Rectangle776.svg";
import Rectangle8 from "../../../public/images/Rectangle877.svg";
import p1 from "../../../public/images/Ellipse119.svg";
import p2 from "../../../public/images/Ellipse220.svg";
import p3 from "../../../public/images/Ellipse321.svg";
import p4 from "../../../public/images/Ellipse422.svg";
import day from "../../../public/images/day.svg";

import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <section>
        <nav className="flex justify-center bg-[#F38181] 2xl:h-[116px] xl:h-[80px] lg:h-[50px] ">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px] flex justify-between items-center">
            <div className="w-1/3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-white w-[48px] h-[40px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </div>
            <div className="w-1/3 ">
              <Image src={logo} className="nav_logo" />
            </div>
            <div className="flex gap-7 ">
              <button className="nav_login">Log In</button>
              <button className="nav_signup">Sign Up</button>
            </div>
          </div>
        </nav>
        {/* ===================Second================== */}

        <div className="poster-bg 2xl:h-[880px] h-screen  flex justify-center ">
          <div className="">
            <h1 className="alata font-[400] text-white 2xl:text-[65px] 2xl:leading-[70px] xl:text-[35px] xl:leading-[55px] 2xl:mt-[475px] xl:mt-[365px] lg:text-[25px] lg:leading-[30px lg:mt-[70%] mx-auto">
              Where’s your next food destination?
            </h1>
            <div className="flex 2xl:mt-12 xl:mt-6 lg:mt-5">
              <button className=" alata font-[400] bg-[#DB5353] text-white mx-auto rounded-[5px] 2xl:w-[218px] 2xl:h-[60px] 2xl:text-[20px] xl:text-[12px] xl:px-7 xl:py-[10px]">
                Explore Dishes
              </button>
            </div>
            <div className="flex 2xl:mt-14 xl:mt-8 lg:mt-5">
              <h1
                className="alata font-[400] mx-auto text-white 2xl:text-[40px] 2xl:leading-[20px] xl:text-[25px] xl:leading-[20px]
              lg:text-[20px] lg:leading-[20px]  "
              >
                Save 30% on your first order
              </h1>
            </div>
          </div>
        </div>
        {/* ===================Third================== */}

        <div className="flex justify-center 2xl:my-20 xl:my-14 lg:my-8">
          <div className="">
            <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px] flex justify-between mx-auto">
              <div className="">
                <h1 className="third_head">Select your cuisine</h1>
              </div>
              <div className="flex justify-between 2xl:gap-10 xl:gap-5 lg:gap-4 items-center">
                <div className="flex gap-3 ">
                  <Image src={cap} className="third_img" />
                  <p className="alata font-[400] 2xl:text-[16px] 2xl:leading-[20px] xl:text-[12px] lg:text-[10px] lg:leading-[20px]">
                    Recommended chef
                  </p>
                  <input
                    type="checkbox"
                    className="toggle toggle-error bg-[#BFBFBF] "
                  />
                </div>
                <div className="flex 2xl:gap-5 xl:gap-3 lg:gap-2">
                  <div className="">
                    <select className="  2xl:w-[153px] third_select  ">
                      <option disabled selected>
                        All Cuisines
                      </option>
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                    </select>
                  </div>
                  <div className="">
                    <select className="  2xl:w-[126px] third_select">
                      <option disabled selected>
                        Dietary
                      </option>
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                    </select>
                  </div>
                  <div className="">
                    <select className="  2xl:w-[143px] third_select ">
                      <option disabled selected>
                        More fiters
                      </option>
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                    </select>
                  </div>
                  <div className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-[13px] h-[13px] absolute 2xl:right-3 2xl:top-[16px] xl:right-3 xl:top-[10px] lg:right-3 lg:top-[5px] lg:text-[8px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>

                    <input
                      type=" search"
                      placeholder="Search"
                      className=" third_input"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center 2xl:my-10 xl:my-8 lg:my-5">
              <div className="carousel rounded-box 2xl:gap-14 xl:gap-7 lg:gap-5">
                <div className="">
                  <Image
                    className="2xl:w-[216px] 2xl:h-[216px] xl:w-[160px] xl:h-[160px] lg:w-[125px] lg:h-[125px]"
                    src={food1}
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:my-4 xl:text-[14px] xl:leading-[20px] xl:my-4
                  lg:text-[12px] lg:leading-[18px] lg:my-3  mx-auto text-center"
                  >
                    Indian
                  </h1>
                </div>
                <div className="">
                  <Image
                    className="2xl:w-[216px] 2xl:h-[216px] xl:w-[160px] xl:h-[160px] lg:w-[125px] lg:h-[125px]"
                    src={food2}
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:my-4 xl:text-[14px] xl:leading-[20px] xl:my-4
                  lg:text-[12px] lg:leading-[18px] lg:my-3  mx-auto text-center"
                  >
                    American
                  </h1>
                </div>
                <div className="">
                  <Image
                    className="2xl:w-[216px] 2xl:h-[216px] xl:w-[160px] xl:h-[160px] lg:w-[125px] lg:h-[125px]"
                    src={food3}
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:my-4 xl:text-[14px] xl:leading-[20px] xl:my-4
                  lg:text-[12px] lg:leading-[18px] lg:my-3  mx-auto text-center"
                  >
                    Mexican
                  </h1>
                </div>
                <div className="">
                  <Image
                    className="2xl:w-[216px] 2xl:h-[216px] xl:w-[160px] xl:h-[160px] lg:w-[125px] lg:h-[125px]"
                    src={food4}
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:my-4 xl:text-[14px] xl:leading-[20px] xl:my-4
                  lg:text-[12px] lg:leading-[18px] lg:my-3  mx-auto text-center"
                  >
                    Mediterranean
                  </h1>
                </div>
                <div className="">
                  <Image
                    className="2xl:w-[216px] 2xl:h-[216px] xl:w-[160px] xl:h-[160px] lg:w-[125px] lg:h-[125px]"
                    src={food5}
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:my-4 xl:text-[14px] xl:leading-[20px] xl:my-4
                  lg:text-[12px] lg:leading-[18px] lg:my-3  mx-auto text-center"
                  >
                    Italian
                  </h1>
                </div>
                <div className="">
                  <Image
                    className="2xl:w-[216px] 2xl:h-[216px] xl:w-[160px] xl:h-[160px] lg:w-[125px] lg:h-[125px]"
                    src={food6}
                  />
                  <h1
                    className="alata font-[400] 2xl:text-[20px] 2xl:leading-[20px] 2xl:my-4 xl:text-[14px] xl:leading-[20px] xl:my-4
                  lg:text-[12px] lg:leading-[18px] lg:my-3  mx-auto text-center"
                  >
                    Middle Eastern
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================Four================== */}
        <div className="flex justify-center 2xl:my-20 xl:my-10 lg:my-10">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px] ">
            <div className="flex">
              <h1 className="four_head">Popular Dishes</h1>
            </div>
            <div className="flex flex-wrap justify-between">
              <div className="2xl:w-[373px] xl:w-[260px] lg:w-[190px] 2xl:my-5 lg:my-4">
                <div>
                  <Image src={Rectangle1} className="four_img" />
                </div>
                <div className="2xl:my-5 xl:my-5">
                  <div>
                    <h1 className="fourth_title">Spaghetti</h1>
                    <div className="flex items-center 2xl:gap-3 xl:gap-2 lg:gap-2 xl:my-3 lg:my-2">
                      <Image src={p1} className="four_img2 " />
                      <h1 className="fourth_name ">Chef Radha</h1>
                    </div>
                  </div>
                  <p className="fourth_p">Chef Cuisine - Indian & Italian</p>
                  <p className="fourth_p">Dietary Specialty - Veg only</p>
                  <button className="four_btn">
                    <Image
                      src={day}
                      className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px]"
                    />
                    <p className="fourth_day">Wednesday</p>
                  </button>
                </div>
              </div>
              <div className="2xl:w-[373px] xl:w-[260px] lg:w-[190px] 2xl:my-5 lg:my-4">
                <div>
                  <Image src={Rectangle2} className="four_img" />
                </div>
                <div className="2xl:my-5 xl:my-5">
                  <div>
                    <h1 className="fourth_title">Spaghetti</h1>
                    <div className="flex items-center 2xl:gap-3 xl:gap-2 lg:gap-2 xl:my-3 lg:my-2">
                      <Image src={p2} className="four_img2 " />
                      <h1 className="fourth_name ">Chef Kumari</h1>
                    </div>
                  </div>
                  <p className="fourth_p">Chef Cuisine - Indian & Italian</p>
                  <p className="fourth_p">Dietary Specialty - Veg only</p>
                  <button className="four_btn">
                    <Image
                      src={day}
                      className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px]"
                    />
                    <p className="fourth_day">Wednesday</p>
                  </button>
                </div>
              </div>
              <div className="2xl:w-[373px] xl:w-[260px] lg:w-[190px] 2xl:my-5 lg:my-4">
                <div>
                  <Image src={Rectangle3} className="four_img" />
                </div>
                <div className="2xl:my-5 xl:my-5">
                  <div>
                    <h1 className="fourth_title">Spaghetti</h1>
                    <div className="flex items-center 2xl:gap-3 xl:gap-2 lg:gap-2 xl:my-3 lg:my-2">
                      <Image src={p3} className="four_img2 " />
                      <h1 className="fourth_name ">Chef Dinesh</h1>
                    </div>
                  </div>
                  <p className="fourth_p">Chef Cuisine - Indian & Italian</p>
                  <p className="fourth_p">Dietary Specialty - Veg only</p>
                  <button className="four_btn">
                    <Image
                      src={day}
                      className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px]"
                    />
                    <p className="fourth_day">Wednesday</p>
                  </button>
                </div>
              </div>
              <div className="2xl:w-[373px] xl:w-[260px] lg:w-[190px] 2xl:my-5 lg:my-4">
                <div>
                  <Image src={Rectangle4} className="four_img" />
                </div>
                <div className="2xl:my-5 xl:my-5">
                  <div>
                    <h1 className="fourth_title">Spaghetti</h1>
                    <div className="flex items-center 2xl:gap-3 xl:gap-2 lg:gap-2 xl:my-3 lg:my-2">
                      <Image src={p4} className="four_img2 " />
                      <h1 className="fourth_name ">Chef Rajesh</h1>
                    </div>
                  </div>
                  <p className="fourth_p">Chef Cuisine - Indian & Italian</p>
                  <p className="fourth_p">Dietary Specialty - Veg only</p>
                  <button className="four_btn">
                    <Image
                      src={day}
                      className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px]"
                    />
                    <p className="fourth_day">Wednesday</p>
                  </button>
                </div>
              </div>
              <div className="2xl:w-[373px] xl:w-[260px] lg:w-[190px] 2xl:my-5 lg:my-4">
                <div>
                  <Image src={Rectangle5} className="four_img" />
                </div>
                <div className="2xl:my-5 xl:my-5">
                  <div>
                    <h1 className="fourth_title">Spaghetti</h1>
                    <div className="flex items-center 2xl:gap-3 xl:gap-2 lg:gap-2 xl:my-3 lg:my-2">
                      <Image src={p1} className="four_img2 " />
                      <h1 className="fourth_name ">Chef Radha</h1>
                    </div>
                  </div>
                  <p className="fourth_p">Chef Cuisine - Indian & Italian</p>
                  <p className="fourth_p">Dietary Specialty - Veg only</p>
                  <button className="four_btn">
                    <Image
                      src={day}
                      className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px]"
                    />
                    <p className="fourth_day">Wednesday</p>
                  </button>
                </div>
              </div>
              <div className="2xl:w-[373px] xl:w-[260px] lg:w-[190px] 2xl:my-5 lg:my-4">
                <div>
                  <Image src={Rectangle6} className="four_img" />
                </div>
                <div className="2xl:my-5 xl:my-5">
                  <div>
                    <h1 className="fourth_title">Spaghetti</h1>
                    <div className="flex items-center 2xl:gap-3 xl:gap-2 lg:gap-2 xl:my-3 lg:my-2">
                      <Image src={p2} className="four_img2 " />
                      <h1 className="fourth_name ">Chef Kumari</h1>
                    </div>
                  </div>
                  <p className="fourth_p">Chef Cuisine - Indian & Italian</p>
                  <p className="fourth_p">Dietary Specialty - Veg only</p>
                  <button className="four_btn">
                    <Image
                      src={day}
                      className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px]"
                    />
                    <p className="fourth_day">Wednesday</p>
                  </button>
                </div>
              </div>
              <div className="2xl:w-[373px] xl:w-[260px] lg:w-[190px] 2xl:my-5 lg:my-4">
                <div>
                  <Image src={Rectangle7} className="four_img" />
                </div>
                <div className="2xl:my-5 xl:my-5"></div>
                <div>
                  <h1 className="fourth_title">Spaghetti</h1>
                  <div className="flex items-center 2xl:gap-3 xl:gap-2 lg:gap-2 xl:my-3 lg:my-2">
                    <Image src={p3} className="four_img2 " />
                    <h1 className="fourth_name ">Chef Dinesh</h1>
                  </div>
                </div>
                <p className="fourth_p">Chef Cuisine - Indian & Italian</p>
                <p className="fourth_p">Dietary Specialty - Veg only</p>
                <button className="four_btn">
                  <Image
                    src={day}
                    className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px]"
                  />
                  <p className="fourth_day">Wednesday</p>
                </button>
              </div>
              <div className="2xl:w-[373px] xl:w-[260px] lg:w-[190px] 2xl:my-5 lg:my-4">
                <div>
                  <Image src={Rectangle8} className="four_img" />
                </div>
                <div className="2xl:my-5 xl:my-5">
                  <div>
                    <h1 className="fourth_title">Spaghetti</h1>
                    <div className="flex items-center 2xl:gap-3 xl:gap-2 lg:gap-2 xl:my-3 lg:my-2">
                      <Image src={p4} className="four_img2 " />
                      <h1 className="fourth_name ">Chef Rajesh</h1>
                    </div>
                  </div>
                  <p className="fourth_p">Chef Cuisine - Indian & Italian</p>
                  <p className="fourth_p">Dietary Specialty - Veg only</p>
                  <button className="four_btn">
                    <Image
                      src={day}
                      className="2xl:w-[13px] 2xl:h-[13px] lg:w-[10px] lg:h-[10px]"
                    />
                    <p className="fourth_day">Wednesday</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================Five================== */}

        <div className=" flex justify-center">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px] mx-auto">
            <div className=" flex justify-center ">
              <div>
                <h1 className="five_head alata font-[400] 2xl:text-[55px] 2xl:leading-[75px] text-center mx-auto xl:text-[35px] xl:leading-[45px] lg:text-[25px] lg:leading-[35px]">
                  How does Authentichef work?
                </h1>
                <p className="five_p">
                  We hand pick our chefs from communities in the UK, to give to
                  you a unique authentic experience of homemade global cuisine,
                  delivered right to your doorstep. All our chef dishes are
                  cooked and hand-made in small batches to ensure the highest
                  quality of each dish.
                </p>
              </div>
            </div>
            <div className="flex justify-around 2xl:my-16 xl:my-10 lg:my-5">
              <div className="2xl:w-[425px]   xl:w-[350px] ">
                <div>
                  <div>
                    <Image
                      src={maggie}
                      className="mx-auto 2xl:w-[77.89px] 2xl:h-[94px] xl:w-[50px] xl:h-[60px] lg:w-[40px] lg:h-[50px]"
                    />
                  </div>
                  <h1 className="five_head 2xl:w-auto xl:w-[302px] lg:w-[250px]">
                    Select dishes based on your dietary preferences
                  </h1>
                  <p className="five_p2   ">
                    Choose from a range of global dishes
                  </p>
                </div>
              </div>
              <div className="2xl:w-[425px]  xl:w-[350px] ">
                <div>
                  <div>
                    <Image
                      src={calen}
                      className="mx-auto 2xl:w-[89.2px] 2xl:h-[94px] xl:w-[50px] xl:h-[60px] lg:w-[40px] lg:h-[50px]"
                    />
                  </div>
                  <h1 className="five_head">
                    Choose your preferred delivery date
                  </h1>
                  <p className="five_p2 ">
                    We deliver all your dishes in sustainable recyclable
                    packaging, without compromising on dish quality
                  </p>
                </div>
              </div>
              <div className="2xl:w-[425px] xl:w-[350px]">
                <div>
                  <div>
                    <Image
                      src={microweb}
                      className="mx-auto 2xl:w-[94px] 2xl:h-[94px] xl:w-[50px] xl:h-[60px] lg:w-[40px] lg:h-[50px]"
                    />
                  </div>
                  <h1 className="five_head">Heat and enjoy the experience</h1>
                  <p className="five_p2 2xl:w-[392px] xl:w-[302px] lg:w-[260px]">
                    Dishes delivered frozen ready to heat and eat, or store in
                    your freezer, whenever you need
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===================Six================== */}

        <div className="flex justify-center 2xl:my-28 xl:my-10 lg:my-10">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px] flex flex-wrap">
            <div>
              <h1 className="six_head ">Our Commitment</h1>
              <div className=" flex justify-between flex-wrap">
                {" "}
                <div className="w-1/2 flex 2xl:my-10 ">
                  <div className="flex  items-center">
                    <Image src={plate1} className="six_img " />

                    <p className="six_p">
                      Authentic homemade food made by independent chefs from
                      their cultural background
                    </p>
                  </div>
                </div>
                <div className="w-1/2 flex 2xl:my-10 ">
                  <div className="flex items-center">
                    <Image src={plate2} className="six_img" />

                    <p className="six_p">
                      No dish will be made in a factory or in a large-scale
                      production kitchen
                    </p>
                  </div>
                </div>
                <div className="w-1/2 flex 2xl:my-10 ">
                  <div className="flex items-center">
                    <Image src={plate3} className="six_img" />

                    <p className="six_p">
                      Small batch cooking to ensure the highest quality dish,
                      every time
                    </p>
                  </div>
                </div>
                <div className="w-1/2 flex 2xl:my-10 ">
                  <div className="flex items-center">
                    <Image src={plate4} className="six_img" />

                    <p className="six_p">
                      Use vegan packaging materials ensuring food safety
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===================Seven================== */}

        <div className="yellow-bg 2xl:h-[884px] xl:h-[600px] lg:h-[500px] flex justify-center items-center">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px] ">
            <h1 className="seven_head">Our Chef Community</h1>
            <p className="seven_p">
              Our independent chefs create dishes from their country of origin.
              Made with love and care to give you a culinary experience without
              the need of a passport
            </p>
            <div className="flex justify-between my-10">
              <div className="w-[286px]">
                <Image src={person1} className="seven_img" />
                <h2 className="seven_name">Uncle Roger Hendrics</h2>
              </div>
              <div className="w-[286px]">
                <Image src={person2} className="seven_img" />
                <h2 className="seven_name">Jason Bosh</h2>
              </div>
              <div className="w-[286px]">
                <Image src={person3} className="seven_img" />
                <h2 className="seven_name">Mathew Kaymer</h2>
              </div>
              <div className="w-[286px]">
                <Image src={person4} className="seven_img" />
                <h2 className="seven_name">Scarlet Carter</h2>
              </div>
              <div className="w-[286px]">
                <Image src={person5} className="seven_img" />
                <h2 className="seven_name">Karan Malhotra</h2>
              </div>
            </div>
            <div className="flex 2xl:mt-12">
              <button className=" seven_btn">Meet the Chefs</button>
            </div>
          </div>
        </div>

        {/* ===================Eight================== */}

        <div className="flex justify-center xl:my-28 lg:my-14">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px] flex">
            <div className="w-1/2">
              <h1 className=" eight_head ">Food Safety</h1>
              <p className="eight_p">
                At authentichef, all our chefs prepare and handle food with care
                and love, ensuring the highest levels of food safety and
                hygiene. Each chef has a scorecard rating provided by their
                local councils and the food standards agency to provide that
                added peace of mind. Join our chef community and share your
                memories and love by serving others.
              </p>
              <button className=" eight_btn ">Join the Chef Community</button>
            </div>
            <div className="w-1/2">
              <Image
                src={eightPoster}
                className="2xl:w-[814px] 2xl:h-[507px]"
              />{" "}
            </div>
          </div>
        </div>

        {/* ===================Nine================== */}
        <div className="flex justify-center lg:my-14 xl:my-28">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px]">
            <h1 className="nine_head">Testimonials</h1>
            <p className="nine_p">
              All our chefs have fans raving about their food
            </p>

            <div className="lg:flex justify-around 2xl:my-10 xl:my-8 lg:my-6">
              <div>
                <div>
                  <Image src={review1} className="nine_img" />
                </div>
                <div className="rating flex justify-center my-4">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#DB5353]"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#DB5353]"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#DB5353]"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#DB5353]"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#DB5353]"
                    checked
                  />
                </div>
                <p className="nine_p2">
                  Lorem ipsum dolor sit amet. Ut maxime necessitatibus rem odio
                  Quis 33 galisum molestias ut voluptas fuga et quia voluptate
                  ut pariatur aperiam.
                </p>
                <p className="nine_name">Mayank Jaiswal</p>
              </div>
              <div>
                <div>
                  <Image src={review2} className="nine_img" />
                </div>
                <div className="rating flex justify-center my-4">
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-[#DB5353]"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-[#DB5353]"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-[#DB5353]"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-[#DB5353]"
                  />
                  <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-star-2 bg-[#DB5353]"
                    checked
                  />
                </div>
                <p className="nine_p2">
                  Lorem ipsum dolor sit amet. Ut maxime necessitatibus rem odio
                  Quis 33 galisum molestias ut voluptas fuga et quia voluptate
                  ut pariatur aperiam.
                </p>
                <p className="nine_name">Rohit Thakur</p>
              </div>
              <div>
                <div>
                  <Image src={review3} className="nine_img" />
                </div>
                <div className="rating flex justify-center my-4">
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#DB5353]"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#DB5353]"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#DB5353]"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#DB5353]"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-[#DB5353]"
                    checked
                  />
                </div>
                <p className="nine_p2">
                  Lorem ipsum dolor sit amet. Ut maxime necessitatibus rem odio
                  Quis 33 galisum molestias ut voluptas fuga et quia voluptate
                  ut pariatur aperiam.
                </p>
                <p className="nine_name">Shubham Sharma</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================Footer================== */}
        <footer className="bg-[#F6F6F6] flex justify-center">
          <div className="2xl:w-[1600px] xl:w-[1100px] lg:w-[850px] 2xl:mt-[100px] xl:mt-[50px] lg:mt-[35px]">
            <div className="flex justify-between">
              <div className="">
                <div>
                  <h1 className="footer_heading">Quick Links</h1>
                  <p className="footer_text">Our Story</p>
                  <p className="footer_text">Food Safety</p>
                  <p className="footer_text">Help Center</p>
                  <p className="footer_text">Global Cuisines</p>
                </div>
              </div>
              <div className="">
                <div>
                  <h1 className="footer_heading">Resources</h1>
                  <p className="footer_text">
                    Become a chef
                    <p className="footer_text">Browse more chef</p>
                    <p className="footer_text">Homemade food delivery</p>
                  </p>
                </div>
              </div>
              <div className="">
                <div>
                  <h1 className="footer_heading">Other Links</h1>
                  <p className="footer_text">Log In</p>
                  <p className="footer_text">Sign Up</p>
                  <p className="footer_text">Privacy Policy</p>
                  <p className="footer_text">Terms of Service</p>
                </div>
              </div>
              <div className="">
                <div>
                  <h1 className="footer_heading">Connect with us</h1>
                  <div className="flex gap-2">
                    <div>
                      <Link href="https://www.facebook.com/" target="_blank">
                        <Image src={fb} className="2xl:w-[30px] 2xl:h-[30px]" />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://www.linkedin.com/home"
                        target="_blank"
                      >
                        <Image
                          src={linkedin}
                          className="2xl:w-[30px] 2xl:h-[30px]"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://www.instagram.com/accounts/login/"
                        target="_blank"
                      >
                        <Image
                          src={insta}
                          className="2xl:w-[30px] 2xl:h-[30px]"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fwww.google.co.in%2F%3Fpli%3D1&ec=GAlAmgQ&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1375757007%3A1709800522255495&theme=glif"
                        target="_blank"
                      >
                        <Image
                          src={google}
                          className="2xl:w-[30px] 2xl:h-[30px]"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://twitter.com/i/flow/login"
                        target="_blank"
                      >
                        <Image
                          src={twiter}
                          className="2xl:w-[30px] 2xl:h-[30px]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="2xl:mt-[56px] xl:mt-[25px] lg:mt-[15px]" />
            <div>
              <div className="flex justify-between 2xl:my-5 xl:my-3 lg:my-2">
                <h1 className="footer_text_b">
                  © 2024 Authentichef | All Rights Reserved
                </h1>
                <h1 className="footer_text_b">Developed by ControlF5</h1>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default LandingPage;
