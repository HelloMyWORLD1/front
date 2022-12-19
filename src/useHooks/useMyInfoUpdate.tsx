import React, { useEffect, SetStateAction, Dispatch } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function useMyInfoUpdate(
  setNickname: Dispatch<SetStateAction<string>>,
  setName: Dispatch<SetStateAction<string>>,
  setBirth: Dispatch<SetStateAction<string>>,
  setPhone: Dispatch<SetStateAction<string>>,
  setEmail: Dispatch<SetStateAction<string>>,
  setDomain: Dispatch<SetStateAction<string>>,
  setField: Dispatch<SetStateAction<string>>
) {
  const { user } = useSelector((state: RootState) => state.user);

  return useEffect(() => {
    if (user) {
      setNickname(user.nickname);
      setName(user.username.split("#")[0]);
      setBirth(user.birth);
      setPhone(user.phone);
      setEmail(user.email.split("@")[0]);
      setDomain(user.email.split("@")[1]);
      setField(user.field);
    }
  }, [user]);
}

export default useMyInfoUpdate;
