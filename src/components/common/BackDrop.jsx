import styled from "styled-components";

const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ $isBackDropOpen }) => ($isBackDropOpen ? "block" : "none")};
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background: rgba(0, 0, 0, 0.3);
  ${($isBackDropOpen) =>
    $isBackDropOpen &&
    `
    
  `}
`;

const BackDrop = ({ handleMobileNav, isBackDropOpen }) => {
  return (
    <StyledDiv
      $isBackDropOpen={isBackDropOpen}
      onClick={handleMobileNav}
    ></StyledDiv>
  );
};
export default BackDrop;
