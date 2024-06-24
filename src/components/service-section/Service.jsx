import styled from "styled-components";
import serviceData from "../../appData/services";
import Description from "./Description";
import Features from "./Features";

const StyledSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;

  & .header .title {
    color: var(--secondary);
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
    width: 90%;
  }
`;

const Service = () => {
  return (
    <StyledSection>
      <div className="header">
        <h4 className="title">what we offer</h4>
      </div>

      {serviceData.map((service) => {
        const { id, name, description, image, features } = service;
        return (
          <div key={id} className="service-container">
            <Description name={name} image={image} description={description} />
            <Features features={features} />
          </div>
        );
      })}
    </StyledSection>
  );
};
export default Service;
