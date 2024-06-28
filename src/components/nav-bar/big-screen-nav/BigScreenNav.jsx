import styled from "styled-components";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
import { useState } from "react";
import DropDown from "./DropDown";

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 3rem 0.5rem 0.5rem;
  height: 100%;
  background: var(--secondary);
  transform: skewX(-10deg) translateX(1rem);
  border-radius: 0.1rem;
  box-shadow: var(--light-shadow);
`;

const BigScreenNav = ({ pageLinks, socialLinks, handlePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleHovering = (boolean) => {
    setIsHovering(boolean);
  };

  const handleSocialLinks = (command) => {
    command === "open" ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <StyledDiv>
      <DropDown
        handleSocialLinks={handleSocialLinks}
        isHovering={isHovering}
        handleHovering={handleHovering}
      />
      <SocialLinks
        socialLinks={socialLinks}
        isOpen={isOpen}
        handleSocialLinks={handleSocialLinks}
      />
      <PageLinks pageLinks={pageLinks} handlePage={handlePage} />
    </StyledDiv>
  );
};
export default BigScreenNav;
