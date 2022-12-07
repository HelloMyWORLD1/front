import React from "react";
import MakeBlogComponent from "../components/MakeBlogComponent";
import useInquireMyInfo from "../useHooks/useInquireMyInfo";

function MakeBlogPage() {
  useInquireMyInfo();
  return <MakeBlogComponent />;
}

export default MakeBlogPage;
