import * as Scroll from "react-scroll";
import { useState, useEffect } from "react";

import Allocation from "../components/Allocation";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";
import IntroSection from "../components/IntroSection";
import Navbar from "../components/Navbar";
import RoadMap from "../components/RoadMap";
import WhySection from "../components/WhySection";

import UpArrow from "../assets/up-arrow.svg";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  let scroll = Scroll.animateScroll;


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [] )



  const handleScroll = () => {
    // console.log(window.scrollY);

    if (window.scrollY > 120) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <div>
      <Navbar scrolled={scrolled}/>
      <Banner />
      <IntroSection />
      <WhySection />
      <HowItWorks />
      <Allocation />
      <RoadMap />
      <ContactUs />
      <Footer />

      {/* scroll to top button */}

      <div
        className="scroll-to-top scroll-to-target"
        onClick={() => scroll.scrollToTop()}
        style={{display: `${scrolled ? 'block' : 'none'}`}}
      >
        <span class="icon">
          <img src={UpArrow} alt="" title="Go To Top" />
        </span>
      </div>
    </div>
  );
};

export default Home;
