import React from "react";
import HomePageForm from "../components/HomePageForm";
import HomeCard from "../subComponents/HomeCard";
import Footer from "../subComponents/Footer";
import Header from "../subComponents/Header";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { inquireMyInfo } from "../slices/userSlice";
function HomePage() {
  const jwtToken = localStorage.getItem("jwtToken");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (jwtToken) {
      dispatch(inquireMyInfo());
    }
  }, [jwtToken]);
  return (
    <div>
      <Header />
      <HomePageForm />
      <HomeCard />
      <Footer />
    </div>
  );
}

export default HomePage;
