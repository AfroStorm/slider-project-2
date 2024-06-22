import styled from "styled-components";
import NavBar from "./components/nav-bar/NavBar";
import { useEffect, useState } from "react";
import navLinks from "./appData/navLinks";
import socialLinks from "./appData/socialMediaLinks";
import MobileNav from "./components/nav-bar/mobile-nav/MobileNav";

const StyledMain = styled.main`
  width: 100vw;
`;
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

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
        navLinks={navLinks}
        socialLinks={socialLinks}
        handleMobileNav={handleMobileNav}
      />
      <MobileNav
        navLinks={navLinks}
        socialLinks={socialLinks}
        isMobileNavOpen={isMobileNavOpen}
      />
    </StyledMain>
  );
}

export default App;