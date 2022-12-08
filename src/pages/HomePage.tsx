import React from "react";
import HomePageForm from "../components/HomePageForm";
import HomeCard from "../subComponents/HomeCard";
import Footer from "../subComponents/Footer";
import Header from "../subComponents/Header";

function HomePage() {
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
