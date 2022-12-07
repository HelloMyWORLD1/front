import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MakePortFolioComponent from "../components/MakePortFolioComponent";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import useInquireMyInfo from "../useHooks/useInquireMyInfo";

function MakePortFolioPage() {
  const { user } = useSelector((state: RootState) => state.user);
  const { getPortFolioError, getPortFolioDone } = useSelector(
    (state: RootState) => state.portFolio
  );
  const navigate = useNavigate();

  useInquireMyInfo();

  useEffect(() => {
    if (getPortFolioDone === true && getPortFolioError === null && user) {
      navigate(`/portfolio/get/:${user.nickname}`);
      return;
    }
  }, [getPortFolioError, getPortFolioDone]);

  return <MakePortFolioComponent />;
}

export default MakePortFolioPage;
