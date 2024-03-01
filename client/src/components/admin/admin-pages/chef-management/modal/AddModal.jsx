import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/admin/loader/Index";
const AddModal = ({ closeModal, refreshdata }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    number: "",
    name: "",
    specialty: "",
    bio: "",
    images: [],
  });
  const [image, setImage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [imageDisable, setImageDisable] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);
  const { ad_token, isLoggedIn } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const InputHandler = (e) => {
    if (e.target.name === "image") {
      setImage({ file: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const uploadVideo = async () => {
    setImageUploading(true);
    try {
      if (!image) {
        setImageUploading(false);
        return toast.warn("Please upload video");
      }

      const response = await axios.post(`/api/auth/upload`, image, {
        headers: {
          authorization: `${ad_token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        const videoUrl = response?.data?.url;
        setFormData({ ...formData, ["images"]: videoUrl });
        setImageDisable(true);
        setImageUploading(false);
      } else {
        setImageDisable(false);
        setImageUploading(false);
      }
    } catch (error) {
      console.error(
        "Error uploading video:",
        error.response?.data || error.message
      );
      setImageUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.bgUrl == "") {
      toast.error("Please upload video");
    } else {
      // console.log(formData);
      setLoading(true);
      try {
        const response = await axios.post(`/api/chef/chefs`, formData, {
          headers: {
            authorization: `${ad_token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(response);
        if (response.status === 201) {
          toast.success("Page added successfully.");
          setLoading(false);
          refreshdata();
          closeModal();
        } else if (response.status === 203) {
          toast.error(response?.data?.error);
          setLoading(false);
        } else {
          toast.error("Invalid details");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error during category:", error);
        toast.error("Something went wrong, try again later.");
        setLoading(false);
      }
    }
  };

  return (
    <>
      {imageUploading && <Loader />}
      <div className="">
        <form action="" className="" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center px-4 lg:px-8 py-4 ">
            <div className="grid grid-cols-2 gap-4">
            <div className="py-2 ">
              {/* <span className="login-input-label capitalize"> Name :</span> */}
              <input
                type="text"
                name="name"
                placeholder="Chef name"
                className="login-input w-full h-auto "
                onChange={InputHandler}
                required  
              />
            </div>
            <div className="py-2 ">
              {/* <span className="login-input-label capitalize"> Number :</span> */}
              <input
                type="number"
                name="number"
                placeholder="Mobile number"
                className="login-input w-full h-auto"
                onChange={InputHandler}
                required
              />
            </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
            <div className="py-2">
            {/* <span className="login-input-label capitalize"> Email :</span> */}
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="login-input"
                      onChange={InputHandler}
                      title="enter valid email ex. abc@gmail.com"
                      required
                    />
                  </div>
                  <div className="py-2">
                  {/* <span className="login-input-label capitalize"> Password :</span> */}
                    <input
                      type="text"
                      name="password"
                      placeholder="Password"
                      className="login-input "
                      onChange={InputHandler}
                      minLength={8}
                      required
                      autoComplete="current-password"
                    />
                    {/* <div className="flex items-center mt-4 px-2 cursor-pointer">
                      <input
                        type="checkbox"
                        id="showPassword"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                        className="mr-2"
                      />
                      <label
                        htmlFor="showPassword"
                        className="login-input-label"
                      >
                        Show Password
                      </label>
                    </div> */}
                  </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
            <div className="py-2 ">
              {/* <span className="login-input-label capitalize"> specialty :</span> */}
              <input
                type="text"
                name="specialty"
                placeholder="Enter specialty"
                className="login-input w-full h-auto"
                onChange={InputHandler}
              />
            </div>

            <div className="py-2 ">
              {/* <span className="login-input-label capitalize"> bio :</span> */}
              <input
                type="text"
                name="bio"
                placeholder="Enter chef`s bio"
                className="login-input w-full h-auto"
                onChange={InputHandler}
              />
            </div>
            </div>
            <div className="py-2 flex  items-end gap-x-10">
              <div className="w-[50%]">
                <span className="login-input-label cursor-pointer mb-1">
                  Images :
                </span>
                <div className="flex items-center  w-full mt-1">
                  <input
                    id="image"
                    type="file"
                    name="image"
                    className="w-full"
                    onChange={InputHandler}
                    disabled={imageDisable}
                    // accept="video/mp4,video/x-m4v,video/*"
                  />
                </div>
              </div>
              <div className="">
                <button
                  className={`focus-visible:outline-none  text-white text-[13px] px-4 py-1 rounded
                            ${imageDisable ? "bg-[green]" : "bg-[#070708bd]"}`}
                  type="button"
                  onClick={uploadVideo}
                  disabled={imageDisable || imageUploading}
                >
                  {imageDisable
                    ? "Uploaded"
                    : imageUploading
                    ? "Loading.."
                    : "Upload"}
                </button>
              </div>
            </div>

            <div className="py-[20px] flex items-center justify-center md:justify-end  md:flex-nowrap gap-y-3 gap-x-3 ">
              <button
                type="button"
                className="secondary_btn w-full"
                onClick={() => closeModal()}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="primary_btn w-full"
              >
                {isLoading ? "Loading.." : "Add"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddModal;
