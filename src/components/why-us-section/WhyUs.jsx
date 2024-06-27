import styled from "styled-components";
import { whyUsImage } from "../../appData/whyUs";
import whyUsData from "../../appData/whyUs";
import Description from "./Description";
import { forwardRef } from "react";

const StyledSection = styled.section`
  position: relative;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  & .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    width: 90vw;
  }

  & .image {
    width: 100%;
    height: 100%;
    max-width: 30rem;
    object-fit: cover;
    border-radius: 0.2rem;
    box-shadow: var(--light-shadow);
  }

  & .title {
    text-align: center;
    font-weight: 900;
  }
`;

const WhyUs = forwardRef(({}, ref) => {
  return (
    <StyledSection ref={ref}>
      <div className="content-container">
        <h3 className="title">
          4 reasons <br /> to choose us
        </h3>
        <img src={whyUsImage} alt="image" className="image" />
        <Description whyUsData={whyUsData} />
      </div>
    </StyledSection>
  );
});
export default WhyUs;
