import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "../Svg/CloseIcon";
import Loader from "../../loader/Index";
import AddModal from "./modal/AddModal";

export const headItems = [
  "S. No.",
  "Name",
  "Specialty",
  "Bio",
  "Images",
  "Action",
];

const ChefMain = () => {
  const [isRefresh, setRefresh] = useState(false);
  const [allData, setAllData] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [Id, setId] = useState(null);
  const [addNewChef, setAddNewChef] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [previewData, setPreviewData] = useState({});
  const visiblePageCount = 10;
  const { token } = useSelector((state) => state?.auth);

  const refreshdata = () => {
    setRefresh(!isRefresh);
  };

  const closeAddPopup = () => {
    setAddNewChef(false);
  };

  const handleDelete = (del_id) => {
    setId(del_id);
    setOpenDelete(true);
  };

  const closeDeleteModal = () => {
    setOpenDelete(false);
  };

  // handle search ----
  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
    searchDataFunc(e.target.value);
  };

  const handleSearch = () => {
    if (searchText) {
      searchDataFunc(searchText.trim());
    }
  };
  const handleKeyDown = (e) => {
    console.log("Pressed key:", e.key);
    if (e.key === "Backspace") {
      // e.preventDefault(); // Prevent the default action
      searchDataFunc(searchText);
    }
  };
  const handleClearSearch = () => {
    refreshdata();
    setSearchText("");
  };
  const searchDataFunc = (search_cate) => {
    const options = {
      method: "GET",
      url: `/api/auth/all-users?search=${search_cate}`,
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response?.data);
        if (response.status === 200) {
          setAllData(response?.data);
        } else {
          return;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // get all data ----
  const getAllData = (pageNo) => {
    setIsLoader(true);
    const options = {
      method: "GET",
      url: `/api/chef/chefs?page=${pageNo}&limit=${visiblePageCount}`,
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    axios
      .request(options)
      .then((res) => {
        console.log(res);
        if (res?.data.status===200) {
          setIsLoader(false);
          setAllData(res?.data);
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
    getAllData(1);
  }, [isRefresh]);

  return (
    <>
      {isLoader && <Loader />}
      <section className="w-full">
        <div className=" mx-auto">
          <div className="rounded-[10px] bg-white py-[20px] flexBetween  md:flex-row gap-3 px-[20px] mt-[20px] lg:mt-0">
            <p className=" text-[22px] font-semibold">Chef Management</p>
            <div className="flexCenter gap-x-7 lg:gap-x-5 md:flex-auto gap-y-3 ">
              <div className="border rounded border-primary  bg-[#302f2f82]] flexCenter h-[32px] pl-[10px] md:w-auto w-full">
                <input
                  type="text"
                  className="input_search"
                  value={searchText}
                  onChange={handleSearchInput}
                  onKeyDown={handleKeyDown}
                  placeholder="Search by name, contact, email."
                />
                {searchText !== "" ? (
                  <button
                    className="clear_search_btn"
                    onClick={handleClearSearch}
                  >
                    <CloseIcon />
                  </button>
                ) : (
                  ""
                )}
                <button className="search_btn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
            <div className="">
              <button
                className="primary_btn"
                onClick={() => setAddNewChef(true)}
              >
                Add new chef
              </button>
            </div>
          </div>
          <div className="">
            <div className="outer_table">
              <table className="w-full min-w-[640px] table-auto mt-[20px] ">
                <thead className="">
                  <tr className=" ">
                    {headItems.map((items, inx) => (
                      <th className="table_head" key={inx}>
                        <p className="block text-[13px] font-medium uppercase whitespace-nowrap text-[#72727b]">
                          {items}
                        </p>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {Array.isArray(allData?.k) &&
                    allData?.chefs?.length > 0 &&
                    allData?.chefs?.map((items, index) => (
                      <tr key={index}>
                        <td className="table_data">{index + 1}</td>
                        <td className="table_data capitalize">
                          {items?.name}
                        </td>
                        <td className="table_data">{items?.specialty} </td>
                        <td className="table_data">{items?.bio}</td>
                        <td className="table_data">{items?.images}</td>
                        <td className="table_data">
                          <div className="table_btn_div">
                            <button
                              className="secondary_btn"
                              onClick={() => handlePreview(items?._id)}
                            >
                              Preview
                            </button>
                            <button
                              className="delete_btn"
                              onClick={() => handleDelete(items?._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            {Array.isArray(allData?.chefs) && allData?.chefs?.length === 0 && (
              <div className="no_data">
                <p className="text-[18px] fontsemibold">No data</p>
              </div>
            )}
          </div>

          {/* {allData?.totalPages > 1 && (
            <Pagination
              currentpage={allData?.currentPage}
              totalCount={allData?.totalPages}
              visiblePageCount={visiblePageCount}
              getAllData={getAllData}
            />
          )} */}
        </div>
      </section>

      {/*---------- Add popup---------- */}
      <Transition appear show={addNewChef} as={Fragment}>
        <Dialog as="div" className="relative z-[11]" onClose={closeAddPopup}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[600px] transform overflow-hidden rounded-2xl bg-white p-[40px]  text-left align-middle shadow-xl transition-all relative">
                  <Dialog.Title
                    as="h3"
                    className="xl:text-[20px] text-[18px] font-medium leading-6 text-gray-900 " 
                  >
                    Add new chef
                  </Dialog.Title>
                  <div className="absolute right-5 top-5 z-10"><CloseIcon /> </div>
                  <AddModal
                    closeModal={closeAddPopup}
                    refreshdata={refreshdata}
                    deleteId={Id}
                    token={token}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/*---------- Delete popup---------- */}
      <Transition appear show={openDelete} as={Fragment}>
        <Dialog as="div" className="relative z-[11]" onClose={closeDeleteModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[500px] transform overflow-hidden rounded-2xl bg-white 2xl:py-10 2xl:px-12 px-8 py-8  text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="xl:text-[20px] text-[18px] font-medium leading-6 text-gray-900"
                  >
                    Delete user
                  </Dialog.Title>
                  {/* <DeleteUser
                    closeModal={closeDeleteModal}
                    refreshdata={refreshdata}
                    deleteId={Id}
                    token={token}
                  /> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ChefMain;
