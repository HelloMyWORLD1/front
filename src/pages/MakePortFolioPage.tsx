import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MakePortFolioComponent from "../components/MakePortFolioComponent";
import { useAppDispatch } from "../hooks";
import { inquireMyInfo } from "../slices/userSlice";
import { RootState } from "../store/store";
import { getPortFolio } from "../slices/portFolioSlice";
import { useNavigate } from "react-router-dom";

function MakePortFolioPage() {
  const jwtToken = localStorage.getItem("jwtToken");
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { getPortFolioError, getPortFolioDone } = useSelector(
    (state: RootState) => state.portFolio
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (jwtToken) {
      dispatch(inquireMyInfo());
    }
  }, [jwtToken]);
  useEffect(() => {
    if (getPortFolioDone === true && getPortFolioError === null) {
      console.log("test1입니다");
      navigate(`/portfolio/get/:${user.nickname}`);
      return;
    }
  }, [getPortFolioError, getPortFolioDone]);
  return <MakePortFolioComponent />;
}

export default MakePortFolioPage;
