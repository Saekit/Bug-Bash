import React, { useState, useEffect } from "react";
import "./index.css";
import { Hamburger, User } from "./assets/svg";
import cellPhone from "./assets/smartphone.png";
import { Text } from "./components/text";
import { Button } from "./components/button";
import { faq, keyPoints } from "./components/utils";
import { Point } from "./components/point";
import { Accordian } from "./components/accordian";

export default function App() {
  const [bannerCopy, setBannerCopy] = useState(null);
  const bannerUrl =
    "https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1";

  useEffect(() => {
    fetch(bannerUrl)
      .then((res) => res.json())
      .then((data) => setBannerCopy(data));
  }, []);

  return (
    <div className="App">
      <div className="header">
        <div style={{ padding: "0 0 8px 10px", margin: "0 90px" }}>
          <div style={{ display: "flex" }}>
            <Hamburger style={{ width: 15, cursor: "pointer" }} />
            <div className="header-links">
              <Text style={{cursor: "pointer"}}>Blonk Heeths</Text>
              <div style={{display: "flex", alignItems: "center"}}>
              <User style={{height: 15, marginRight: 6}} />
              <Text style={{ textAlign: "right", cursor: "pointer" }}>Sign In</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="phantom-header" />

      <div className="layout">
        {bannerCopy && (
          <div className="banner">
            <Text style={{ color: "white" }}>{bannerCopy}</Text>
          </div>
        )}
        <div className="hero">
          <div className="hero-left">
            <Text style={{ fontSize: 30, fontWeight: 700 }}>
              Welcome to Blonk Heeths Pharmacy
            </Text>
            <Text>A digital pharmacy with delivery to your doorstep</Text>
            <Button>Get Started</Button>
            <Text style={{ fontSize: 10, color: "gray" }}>
              Available with a prescription
            </Text>
          </div>
          <div className="hero-right">
            <img src={cellPhone} alt="cellphone" style={{ height: 400 }} />
          </div>
        </div>
        <div className="points-section">
        <div className="points-container">
          {keyPoints.map((point, idx) => (
            <Point key={idx} point={point} />
          ))}
          </div>
        </div>
        <div className="faq-section">
          <Text style={{ fontSize: 30 }}>FAQs</Text>
          {faq.map((qa, idx) => (
            <Accordian key={idx} props={qa} />
          ))}
        </div>
      </div>
    </div>
  );
}
