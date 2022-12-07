import React, { useEffect } from "react";
import GetBlogComponenet from "../components/GetBlogComponent";
import GetComments from "../components/GetComments";
import PostComment from "../components/PostComment";
import PortfolioHeader from "../subComponents/PortfolioHeader";
import { useAppDispatch } from "../hooks";
import { inquireMyInfo } from "../slices/userSlice";

export default function BlogDetailpage() {
  const jwtToken = localStorage.getItem("jwtToken");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (jwtToken) {
      dispatch(inquireMyInfo());
    }
  }, [jwtToken]);
  return (
    <div>
      <PortfolioHeader />
      <GetBlogComponenet />
      <PostComment />
      <GetComments />
    </div>
  );
}
