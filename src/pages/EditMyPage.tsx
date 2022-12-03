import React,{useEffect} from "react";
import Footer from "../subComponents/Footer";
import { useAppDispatch } from "../hooks";
import { inquireMyInfo } from "../slices/userSlice";
import MyPageForm from "../components/MyPageForm";

export default function EditMyPage() {
  const jwtToken = localStorage.getItem("jwtToken");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (jwtToken) {
      dispatch(inquireMyInfo());
    }
  }, [jwtToken]);
  return (
    <div>
        <MyPageForm />
      <Footer></Footer>
    </div>
  );
}