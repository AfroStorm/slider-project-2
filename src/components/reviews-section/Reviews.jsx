import styled from "styled-components";
import reviewData from "../../appData/reviews";
import CustomerSlider from "./CustomerSlider";
import { forwardRef } from "react";

const StyledSection = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding-top: 3rem;

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

  @media screen and (min-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 5rem;
    transition: 0.3s ease;
    ${({ $currentPage, $pageIndex }) => `
    transform: translateX(${100 * ($pageIndex - $currentPage)}%);
    opacity: ${$pageIndex === $currentPage ? 1 : 0};
    visibility: ${$pageIndex === $currentPage ? "visible" : "hidden"};
    `}

    .header {
      align-self: flex-start;
      margin-left: 3rem;
      margin-top: 3rem;
    }
    .header p {
      font-size: 1.8rem;
    }

    .header .title {
      font-size: 2.5rem;
    }
  }
`;

const Reviews = forwardRef(({ currentPage, pageIndex }, ref) => {
  return (
    <StyledSection ref={ref} $currentPage={currentPage} $pageIndex={pageIndex}>
      <div className="header">
        <p>don't just take our word for it...</p>
        <h4 className="title">What our clients are saying</h4>
      </div>
      <CustomerSlider reviewData={reviewData} />
    </StyledSection>
  );
});
export default Reviews;
