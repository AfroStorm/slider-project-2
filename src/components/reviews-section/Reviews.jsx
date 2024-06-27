import styled from "styled-components";
import reviewData from "../../appData/reviews";
import CustomerSlider from "./CustomerSlider";
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
  padding-top: 3rem;

  & .background-image {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--secondary);
    width: 100vw;
    height: 100%;
    z-index: -1;
  }

  & .header p,
  .title {
    color: var(--accent-1);
    font-weight: 900;
    text-align: center;
  }

  & .header p {
    font-size: 1.2rem;
  }

  & .header .title {
    font-size: 1.8rem;
  }
`;

const Reviews = forwardRef(({}, ref) => {
  return (
    <StyledSection ref={ref}>
      <div className="background-image"></div>

      <div className="header">
        <p>don't just take our word for it...</p>
        <h4 className="title">What our clients are saying</h4>
      </div>
      <CustomerSlider reviewData={reviewData} />
    </StyledSection>
  );
});
export default Reviews;
