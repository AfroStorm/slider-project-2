import styled from "styled-components";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
import BackDrop from "../../common/BackDrop";

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 70vw;
  height: 100vh;
  background: var(--secondary);
  z-index: 101;
  transform: ${({ $isMobileNavOpen }) =>
    $isMobileNavOpen ? "translateX(0%)" : "translateX(-100%)"};
  transition: 0.3s ease;
`;

const MobileNav = ({
  navLinks,
  socialLinks,
  isMobileNavOpen,
  handleMobileNav,
}) => {
  const isBackDropOpen = isMobileNavOpen;
  return (
    <>
      <BackDrop
        handleMobileNav={handleMobileNav}
        isBackDropOpen={isBackDropOpen}
      />
      <StyledDiv $isMobileNavOpen={isMobileNavOpen}>
        <PageLinks navLinks={navLinks} />
        <SocialLinks socialLinks={socialLinks} />
      </StyledDiv>
    </>
  );
};
export default MobileNav;
