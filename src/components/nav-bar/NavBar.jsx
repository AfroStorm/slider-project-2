import styled from "styled-components";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 4rem;
  z-index: 99;
`;

const NavBar = ({ windowWidth, navLinks, handleMobileNav }) => {
  return (
    <StyledDiv>
      <Logo />
      {windowWidth >= 992 ? (
        "big navbar"
      ) : (
        <HamburgerMenu handleMobileNav={handleMobileNav} />
      )}
    </StyledDiv>
  );
};
export default NavBar;
