import React, { useEffect } from "react";
import MakePortFolioComponent from "../components/MakePortFolioComponent";
import { useAppDispatch } from "../hooks";
import { inquireMyInfo } from "../slices/userSlice";

function MakePortFolioPage() {
  const jwtToken = localStorage.getItem("jwtToken");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (jwtToken) {
      dispatch(inquireMyInfo());
    }
  }, [jwtToken]);
  return <MakePortFolioComponent />;
}

export default MakePortFolioPage;
