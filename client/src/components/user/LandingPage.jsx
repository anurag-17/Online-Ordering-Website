"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { allChefs ,foodCategories} from "@/config/data";

const LAndingPage = () => {
  const [menuItems, setMenuItems] = useState([])
  const [allChefs, setAllChefs] = useState([])

  const [isLoader, setIsLoader] = useState(false);
  const visiblePageCount = 10; // Assuming you have a constant for visible page count

  const getallMenuItems = (pageNo) => {
    setIsLoader(true);
    const options = {
      method: "GET",
      url: `/api/menu/menuItems?page=${pageNo}&limit=${visiblePageCount}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .request(options)
      .then((res) => {
          if (res?.status === 200) {
              setIsLoader(false);
            setMenuItems(res?.data?.menuItems);
        } else {
          setIsLoader(false);
          return;
        }
      })
      .catch((error) => {
        setIsLoader(false);
        console.error("Error:", error);
      });
  };

  const getAllChefs = (pageNo) => {
    setIsLoader(true);
    const options = {
      method: "GET",
      url: `/api/chef/chefs?page=${pageNo}&limit=${visiblePageCount}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .request(options)
      .then((res) => {
        if (res?.status === 200) {
          setIsLoader(false);
          setAllChefs(res?.data?.chefs);

        } else {
          setIsLoader(false);
          return;
        }
      })
      .catch((error) => {
        setIsLoader(false);
        console.error("Error:", error);
      });
  };

    useEffect(() => {
      getallMenuItems(1);
      getAllChefs(1);
    }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="py-[40px]">
        <div className="rounded-[10px] bg-white py-[20px] flexBetween  md:flex-row gap-3 px-[20px] mt-[20px] lg:mt-0">
          <p className=" text-[22px] font-semibold">Chefs</p>
        </div>
        {isLoader && <div>Loading...</div>}
        <div className="grid grid-cols-4 gap-4">
            {console.log(allChefs)}
          {Array.isArray(allChefs) &&
            allChefs?.length > 0 &&
            allChefs.map((menuItem) => (
              <div
                key={menuItem?._id}
                className="border border-gray-300 p-4 rounded"
              >
                <img
                  src="https://i.pinimg.com/564x/42/ca/cb/42cacb7811e0bf73c89725e792ea9f94.jpg"
                  alt={menuItem?.name}
                  className="w-full h-auto mb-2"
                />
                {/* <Image src={menuItem.image} alt="Maggi" width={500} height={500} /> */}

                <h2 className="text-lg font-semibold">{menuItem?.name}</h2>
                <p className="text-sm text-gray-600">{menuItem?.experience}+ years of experience</p>
                
              </div>
            ))}
        </div>
      </div>
      <div className="py-[40px]">
        <div className="rounded-[10px] bg-white py-[20px] flexBetween  md:flex-row gap-3 px-[20px] mt-[20px] lg:mt-0">
          <p className=" text-[22px] font-semibold">Menu Items</p>
        </div>
        {isLoader && <div>Loading...</div>}
        <div className="grid grid-cols-4 gap-4">
          {Array.isArray(menuItems) &&
            menuItems?.length > 0 &&
            menuItems.map((menuItem) =>
           { 
            // console.log(menuItem)
            return (
                <div
                key={menuItem?._id}
                className="border border-gray-300 p-4 rounded"
                >
                
                <img
                  src="https://cdn.yenicaggazetesi.com.tr/news/804611.jpg"
                  alt={menuItem?.name}
                  className="w-full h-auto mb-2"
                />
                <h2 className="text-lg font-semibold">{menuItem?.name}</h2>
                <p className="text-sm text-gray-600">{menuItem?.description}</p>
                <p className="text-sm text-gray-600">Category : {menuItem?.category?.title}</p>
                <p className="text-sm text-gray-600">Price : {menuItem?.price}</p>
                <p className="text-sm text-gray-600">
                  Chef: {menuItem?.chef?.name}
                </p>
              </div>
            )}
            )}
        </div>
      </div>
      <div className="py-[40px]">
        <div className="rounded-[10px] bg-white py-[20px] flexBetween  md:flex-row gap-3 px-[20px] mt-[20px] lg:mt-0">
          <p className=" text-[22px] font-semibold">Food categories</p>
        </div>
        {isLoader && <div>Loading...</div>}
        <div className="grid grid-cols-4 gap-4">
          {Array.isArray(foodCategories) &&
            foodCategories?.length > 0 &&
            foodCategories?.map((menuItem) => (
              <div
                key={menuItem._id}
                className="border border-gray-300 p-4 rounded"
              >
                <img
                  src="https://media.cnn.com/api/v1/images/stellar/prod/230320152734-02-mexican-foods-birria.jpg?c=original&q=h_618,c_fill"
                  alt={menuItem?.name}
                  className="w-full h-auto mb-2"
                />
                <h2 className="text-lg font-semibold">{menuItem}</h2>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LAndingPage;
