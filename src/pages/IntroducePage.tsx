import React from "react";
import Header from "../subComponents/Header";
import IntroduceComponent from "../components/IntroduceComponent";
import useInquireMyInfo from "../useHooks/useInquireMyInfo";

export default function IntroducePage() {
  useInquireMyInfo();
  return (
    <div>
      <Header />
      <IntroduceComponent />
    </div>
  );
}
