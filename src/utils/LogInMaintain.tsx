import React, { useEffect } from "react";
import { useAppDispatch } from "../hooks";

function LogInMaintain() {
  const dispatch = useAppDispatch();
  const jwtToken = localStorage.getItem("jwtToken");
  useEffect(() => {
    if (jwtToken) {
      //dispatch(logInCheck());
    }
  }, [jwtToken]);
}

export default LogInMaintain;
