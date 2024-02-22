  "use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import Loader from "@/components/admin/loader/Index";
import { setToken, removeToken, adDetails } from "@/redux/adminSlice/authSlice";

// import Loader from '../loader';

const protectedRoute = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const adminAuthToken = useSelector((state) => state.auth?.token);
    // const loading = true
    const [isLoading, setIsLoading] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    console.log(adminAuthToken);

    useEffect(() => {
      const checkAuth = () => {
        if (!adminAuthToken) {
          router.push("/admin/sign-in");
        }
        if (adminAuthToken) {
          verify();
        }
      };

      checkAuth();
    }, [adminAuthToken, router]);

    const verify = async () => {
      setIsLoading(true);
      setIsAuth(false);
      try {
        const res = await axios.get(
          `/api/auth/verifyUserToken/${adminAuthToken}`
        );
        if (res?.data?.data === null) {
          router.push("/admin/sign-in");
          dispatch(removeToken());
        }
        if (res.status === 200) {
          setIsAuth(true);
          setIsLoading(false);
          return;
        } else {
          dispatch(removeToken());
          router.push("/admin/sign-in");
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error occurred:", error);
        router.push("/admin/sign-in");
        setIsLoading(false);
      }
    };

    return (
      <>
        {isLoading ? (
          <Loader />
        ) : adminAuthToken && isAuth ? (
          <WrappedComponent {...props} />
        ) : null}
      </>
    );
  };

  return Wrapper;
};

export default protectedRoute;
