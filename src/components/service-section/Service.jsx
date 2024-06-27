import styled from "styled-components";
import serviceData from "../../appData/services";
import Description from "./Description";
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

  & .background-image {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--secondary);
    width: 100vw;
    height: 100%;
    z-index: -1;
  }

  & .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90vw;
    gap: 3rem;
  }
  & .header .title {
    color: var(--accent-1);
    font-weight: 900;
    text-align: center;
    font-size: 1.8rem;
  }

  & .service-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

const Service = forwardRef(({}, ref) => {
  return (
    <StyledSection ref={ref}>
      <div className="background-image"></div>

      <div className="content-container">
        <div className="header">
          <h4 className="title">our services for you</h4>
        </div>

        {serviceData.map((service) => {
          const { id, name, description, image, features } = service;
          return (
            <div key={id} className="service-container">
              <Description
                name={name}
                image={image}
                description={description}
              />
              <Features features={features} />
            </div>
          );
        })}
      </div>
    </StyledSection>
  );
});
export default Service;
