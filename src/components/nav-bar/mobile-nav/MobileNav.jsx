import styled from "styled-components";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const StyledDiv = styled.div`
  position: fixed;
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
`;

const MobileNav = ({ navLinks, socialLinks, isMobileNavOpen }) => {
  return (
    <StyledDiv $isMobileNavOpen={isMobileNavOpen}>
      <PageLinks navLinks={navLinks} />
      <SocialLinks socialLinks={socialLinks} />
    </StyledDiv>
  );
};
export default MobileNav;
