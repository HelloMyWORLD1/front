import React, { useEffect } from "react";
import UpdateBlogComponent from "../components/UpdateBlogComponent";
import { inquireMyInfo } from "../slices/userSlice";
import { useAppDispatch } from "../hooks";
export default function UpadateBlogPage() {
  const jwtToken = localStorage.getItem("jwtToken");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (jwtToken) {
      dispatch(inquireMyInfo());
    }
  }, [jwtToken]);
  return <UpdateBlogComponent />;
}
