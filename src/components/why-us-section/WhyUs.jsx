import styled from "styled-components";
import { whyUsImage } from "../../appData/whyUs";
import whyUsData from "../../appData/whyUs";
import Description from "./Description";
import { forwardRef } from "react";

const StyledSection = styled.section`
  width: 90vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  & .image {
    width: 100%;
    height: 100%;
    max-width: 30rem;
    object-fit: cover;
    border-radius: 0.2rem;
    box-shadow: var(--light-shadow);
  }

  & .title {
    color: var(--secondary);
    font-weight: 900;
  }
`;

const WhyUs = forwardRef(({}, ref) => {
  return (
    <StyledSection ref={ref}>
      <h3 className="title">why halal haven ?</h3>
      <img src={whyUsImage} alt="image" className="image" />
      <Description whyUsData={whyUsData} />
    </StyledSection>
  );
});
export default WhyUs;
