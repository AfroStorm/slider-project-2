import styled from "styled-components";
import { IoShareSocial } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const StyledDiv = styled.div`
  & .icon {
    font-size: 1.5rem;
    color: var(--accent-1);
  }

  & .icon {
    font-size: 1.5rem;
    color: var(--accent-1);
    ${({ $isHovering }) =>
      $isHovering &&
      `
      color: var(--primary);
      scale: 1.1;
    `}
    cursor: pointer;
  }
`;

const DropDown = ({ handleSocialLinks, handleHovering, isHovering }) => {
  return (
    <StyledDiv
      $isHovering={isHovering}
      onMouseEnter={() => {
        handleSocialLinks("open"), handleHovering(true);
      }}
      onMouseLeave={() => handleHovering(false)}
    >
      <IoShareSocial className="icon" />
      <IoMdArrowDropdown className="icon" />
    </StyledDiv>
  );
};
export default DropDown;
