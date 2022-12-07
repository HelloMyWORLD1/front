import React from "react";
import UpdateBlogComponent from "../components/UpdateBlogComponent";
import useInquireMyInfo from "../useHooks/useInquireMyInfo";

export default function UpadateBlogPage() {
  useInquireMyInfo();
  return <UpdateBlogComponent />;
}
