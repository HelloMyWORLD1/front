import { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { inquireMyInfo } from "../slices/user/userSlice";

export default function useInquireMyInfo() {
  const token = localStorage.getItem("jwtToken");
  const dispatch = useAppDispatch();

  return useEffect(() => {
    if (token) {
      dispatch(inquireMyInfo());
    }
  }, [token]);
}
