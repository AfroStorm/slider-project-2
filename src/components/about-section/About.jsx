import styled from "styled-components";
import halalLogo from "../../assets/halal.png";
import Info from "./Info";
import { forwardRef } from "react";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;

  @media screen and (min-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: 0.3s ease;
    ${({ $currentPage, $pageIndex }) => `
    transform: translateX(${100 * ($pageIndex - $currentPage)}%);
    opacity: ${$pageIndex === $currentPage ? 1 : 0};
    visibility: ${$pageIndex === $currentPage ? "visible" : "hidden"};
    `}
  }

  & .image-container {
    width: 12rem;
    height: 12rem;
    border-radius: 0.2rem;
    overflow: hidden;
  }

  & .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const About = forwardRef(({ currentPage, pageIndex }, ref) => {
  return (
    <StyledSection ref={ref} $currentPage={currentPage} $pageIndex={pageIndex}>
      <div className="image-container">
        <img src={halalLogo} alt="halal-logo" className="certificate" />
      </div>
      <Info />
    </StyledSection>
  );
});
export default About;
