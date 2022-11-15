import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { inquireMyInfo } from "../slices/userSlice";

function PortFolioPage() {
  const jwtToken = localStorage.getItem("jwtToken");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (jwtToken) {
      dispatch(inquireMyInfo());
    }
  }, [jwtToken]);
  return <div>포트폴리오 페이지</div>;
}

export default PortFolioPage;
