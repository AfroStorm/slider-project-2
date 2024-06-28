import styled from "styled-components";
import serviceData from "../../appData/services";
import Features from "./Features";
import { forwardRef } from "react";

const StyledSection = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;

  & .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90vw;
    gap: 3rem;
  }

  & .header .title {
    color: var(--secondary);
    font-weight: 900;
    text-align: center;
    font-size: 1.8rem;
    margin-top: 3rem;
  }

  @media screen and (min-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    gap: 0;
    margin-top: 2rem;
    transition: 0.3s ease;
    ${({ $currentPage, $pageIndex }) => `
    transform: translateX(${100 * ($pageIndex - $currentPage)}%);
    opacity: ${$pageIndex === $currentPage ? 1 : 0};
    visibility: ${$pageIndex === $currentPage ? "visible" : "hidden"};
    `}

    .content-container {
      margin-top: 3rem;
      align-items: flex-start;
      flex-direction: row;
      gap: 0;
    }
  }
`;

const Service = forwardRef(({ currentPage, pageIndex }, ref) => {
  return (
    <StyledSection ref={ref} $currentPage={currentPage} $pageIndex={pageIndex}>
      <div className="header">
        <h4 className="title">our services for you</h4>
      </div>

      <div className="content-container">
        {serviceData.map((service) => {
          const { id, name, image, features } = service;
          return (
            <Features key={id} features={features} name={name} image={image} />
          );
        })}
      </div>
    </StyledSection>
  );
});
export default Service;
