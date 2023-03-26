import React from "react";
import { useState, useEffect } from "react";
import Card from "./card";
import "../Assets/style.css";
import JsonData from "../Assets/data.json";

const HeroSection = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div>
      <div className="hero-section">
        <div className="text-2xl font-bold mt-4">Topping</div> <br />
        <div className="basis-1/3 flex flex-row gap-8 flex-wrap mb-3">
          <Card data={landingPageData.Card} />
          <Card data={landingPageData.Card2} />
          <Card data={landingPageData.Card3} />
        </div>
        <div className="text-2xl font-bold mt-4">Ingridents</div> <br />
        <div className="basis-1/3 flex flex-row gap-8 flex-wrap mb-3">
          <Card data={landingPageData.Card} />
          <Card data={landingPageData.Card} />
          <Card data={landingPageData.Card} />
        </div>
        <div className="text-2xl font-bold mt-4">Base</div> <br />
        <div className="basis-1/3 flex flex-row gap-8 flex-wrap mb-3">
          <Card data={landingPageData.Card} />
          <Card data={landingPageData.Card} />
          <Card data={landingPageData.Card} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
