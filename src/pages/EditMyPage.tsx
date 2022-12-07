import React from "react";
import Footer from "../subComponents/Footer";
import MyPageForm from "../components/MyPageForm";
import useInquireMyInfo from "../useHooks/useInquireMyInfo";

export default function EditMyPage() {
  useInquireMyInfo();
  return (
    <div>
      <MyPageForm />
      <Footer></Footer>
    </div>
  );
}
