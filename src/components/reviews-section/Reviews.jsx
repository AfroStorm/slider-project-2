import styled from "styled-components";
import reviewData from "../../appData/reviews";
import CustomerSlider from "./CustomerSlider";

const StyledSection = styled.section`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  & .header p,
  .title {
    color: var(--secondary);
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

const Reviews = () => {
  return (
    <StyledSection>
      <div className="header">
        <p>don't just take our word for it...</p>
        <h4 className="title">What our clients are saying</h4>
      </div>
      <CustomerSlider reviewData={reviewData} />
    </StyledSection>
  );
};
export default Reviews;
