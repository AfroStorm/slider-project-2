import styled from "styled-components";
import CatchPhrase from "./CatchPhrase";
import CallToAction from "./CallToAction";
import { forwardRef } from "react";
import mosqueWhite from "../../assets/mosque-white.jpg";

const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  @media screen and (min-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s ease;
    ${({ $currentPage, $pageIndex }) => `
    transform: translateX(${100 * ($pageIndex - $currentPage)}%);
    opacity: ${$pageIndex === $currentPage ? 1 : 0};
    visibility: ${$pageIndex === $currentPage ? "visible" : "hidden"};
    `}
  }

  & .background-image {
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${mosqueWhite});
    background-clip: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    filter: brightness(80%);
  }
`;

const Home = forwardRef(({ currentPage, pageIndex }, ref) => {
  return (
    <StyledSection ref={ref} $currentPage={currentPage} $pageIndex={pageIndex}>
      <div className="background-image"></div>
      <CatchPhrase />
      <CallToAction />
    </StyledSection>
  );
});
export default Home;
