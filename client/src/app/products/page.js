import React from 'react'
import Image from 'next/image';
import logo from "../../../public/images/logo.svg";
import fb from "../../../public/images/fb.svg";
import linkedin from "../../../public/images/in.svg";
import insta from "../../../public/images/insta.svg";
import twiter from "../../../public/images/twiter.svg";
import google from "../../../public/images/google.svg";
import Link from 'next/link';


const Products = () => {
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
  )
}

export default Products