import React from "react";
import HomePageForm from "../components/HomePageForm";
import HomeCard from "../subComponents/HomeCard";
import Footer from "../subComponents/Footer";
import Header from "../subComponents/Header";
import useInquireMyInfo from "../useHooks/useInquireMyInfo";

function HomePage() {
  useInquireMyInfo();
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
