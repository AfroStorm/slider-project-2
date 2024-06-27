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
  padding: 3rem 0;

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
  }

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

    .content-container {
      margin-top: 3rem;
      align-items: flex-start;
      flex-direction: row;
      gap: 0;
    }

    & .header .title {
      display: none;
    }
  }
`;

const Service = forwardRef(({ currentPage, pageIndex }, ref) => {
  return (
    <StyledSection ref={ref} $currentPage={currentPage} $pageIndex={pageIndex}>
      <div className="content-container">
        <div className="header">
          <h4 className="title">our services for you</h4>
        </div>

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
