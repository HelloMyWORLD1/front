import React, { useEffect } from "react";
import MakeBlogComponent from "../components/MakeBlogComponent";
import { useAppDispatch } from "../hooks";
import { inquireMyInfo } from "../slices/userSlice";

function MakeBlogPage() {
  const jwtToken = localStorage.getItem("jwtToken");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (jwtToken) {
      dispatch(inquireMyInfo());
    }
  }, [jwtToken]);
  return <MakeBlogComponent />;
}

export default MakeBlogPage;
