import styled from "styled-components";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import BigScreenNav from "./big-screen-nav/BigScreenNav";

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 3.5rem;
  z-index: 99;
`;

const NavBar = ({ windowWidth, pageLinks, socialLinks, handleMobileNav }) => {
  return (
    <StyledDiv>
      <Logo />
      {windowWidth >= 992 ? (
        <BigScreenNav pageLinks={pageLinks} socialLinks={socialLinks} />
      ) : (
        <HamburgerMenu handleMobileNav={handleMobileNav} />
      )}
    </StyledDiv>
  );
};
export default NavBar;
