import React from "react";
import OrdersManagement from "./OrdersManagement";
import UsersIcon from "./Svg/UsersIcon";

const MainDashboard = () => {
  // const { userDetails } = useSelector((state) => state?.auth);
  // console.log(userDetails);
  return (
    <>
      <section className>
    
        <div className="px-[20px]">
          <div className="md:py-[30px] py-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <div className="col-span-1 bg-white px-5 py-4 rounded flex items-center gap-5">
              <div className="bg-primary h-[50px] w-[50px] flexCenter rounded-[6px]">
                {" "}
                <UsersIcon />{" "}
              </div>
              <div className="">
                <h6 className="capitalize text-[15px]">Total Dishes</h6>
                <h6 className="capitalize text-[16px] font-semibold pt-1">4</h6>
              </div>
            </div>
            <div className="col-span-1 bg-white px-5 py-4 rounded flex items-center gap-5">
              <div className="bg-primary h-[50px] w-[50px] flexCenter rounded-[6px]">
                {" "}
                <UsersIcon />{" "}
              </div>
              <div className="">
                <h6 className="capitalize text-[15px]">Total Orders</h6>
                <h6 className="capitalize text-[16px] font-semibold pt-2">
                  10
                </h6>
              </div>
            </div>
          </div>

          <div className=" md:py-[30px]  py-[20px]  bg-white relative">
            <div className="">
              <OrdersManagement/>
            </div>
            <div className="w-[30%]">
              {/* <img src={dash_img} alt="welcome dashboard" className="w-full" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainDashboard;
