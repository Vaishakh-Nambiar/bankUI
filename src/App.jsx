import { useState } from "react";
import "./App.css";
import "./index.css";

import Billing from "./components/Billing";
import Hero from "./components/Hero";
import CardDeal from "./components/CardDeal";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Business from "./components/Business";

import styles from "./styles";

function App() {
  return (
    <div className="App overflow-hidden ss:overflow">
      <div className="w-full bg-black overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div id="" className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      <div className="w-full bg-black marker:relative">
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div id="home" className={`w-full flex items-center justify-center`}>
            <Hero />
          </div>
        </div>
      </div>

      <div className="w-full py-4 bg-black marker:relative">
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div id="" className={`w-full flex items-center justify-center`}>
            <Stats />
          </div>
        </div>
      </div>

      <div className="w-full bg-black marker:relative">
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div
            id="features"
            className={`w-full flex items-center justify-center`}
          >
            <Business />
          </div>
        </div>
      </div>

      <div className="w-full bg-black marker:relative ">
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div id="" className={`w-full flex items-center justify-center`}>
            <Billing />
          </div>
        </div>
      </div>

      <div className="w-full bg-black marker:relative">
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div
            id="product"
            className={`w-full flex items-center justify-center`}
          >
            <CardDeal />
          </div>
        </div>
      </div>

      <div className="w-full bg-black marker:relative">
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div id="" className={`w-full flex items-center justify-center`}>
            <Testimonials />
          </div>
        </div>
      </div>

      <div className="w-full bg-black marker:relative">
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div
            id="clients"
            className={`w-full flex items-center justify-center`}
          >
            <CTA />
          </div>
        </div>
      </div>

      <div className="w-full bg-black marker:relative">
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div id="" className={`w-full flex items-center justify-center`}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
