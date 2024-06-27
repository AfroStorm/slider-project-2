import styled from "styled-components";
import NavBar from "./components/nav-bar/NavBar";
import { useEffect, useRef, useState } from "react";
import pageLinks from "./appData/navLinks";
import socialLinks from "./appData/socialMediaLinks";
import MobileNav from "./components/nav-bar/mobile-nav/MobileNav";
import Home from "./components/home-section/Home";
import About from "./components/about-section/About";
import Service from "./components/service-section/Service";
import WhyUs from "./components/why-us-section/WhyUs";
import Reviews from "./components/reviews-section/Reviews";

const StyledMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 100vw;
`;
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [currentPage, setCurrentPge] = useState(0);

  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const serviceSectionRef = useRef(null);
  const whyUsSectionRef = useRef(null);
  const reviewsSectionRef = useRef(null);

  // Mobile nav section scrolling
  const scrollToSection = (sectionId) => {
    let sectionRef;
    switch (sectionId) {
      case "Home":
        sectionRef = homeSectionRef;
        break;
      case "About":
        sectionRef = aboutSectionRef;
        break;
      case "Service":
        sectionRef = serviceSectionRef;
        break;
      case "Why Us":
        sectionRef = whyUsSectionRef;
        break;
      case "Reviews":
        sectionRef = reviewsSectionRef;
        break;

      default:
        break;
    }

    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // Function to update the state with the current window width
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener to handle window resize
    window.addEventListener("resize", updateWindowWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <StyledMain>
      <NavBar
        windowWidth={windowWidth}
        pageLinks={pageLinks}
        socialLinks={socialLinks}
        handleMobileNav={handleMobileNav}
      />

      <MobileNav
        pageLinks={pageLinks}
        socialLinks={socialLinks}
        isMobileNavOpen={isMobileNavOpen}
        handleMobileNav={handleMobileNav}
        scrollToSection={scrollToSection}
      />

      {/* <Home ref={homeSectionRef} currentPage={currentPage} pageIndex={0} /> */}
      {/* <About ref={aboutSectionRef} currentPage={currentPage} pageIndex={1} /> */}
      <Service
        ref={serviceSectionRef}
        currentPage={currentPage}
        pageIndex={0}
      />
      {/* <WhyUs ref={whyUsSectionRef} currentPage={currentPage} pageIndex={3} /> */}
      {/* <Reviews
        ref={reviewsSectionRef}
        currentPage={currentPage}
        pageIndex={4}
      /> */}
    </StyledMain>
  );
}

export default App;
