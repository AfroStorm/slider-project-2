import styled from "styled-components";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import SingleSlide from "./SingleSlide";

const StyledUl = styled.ul`
  position: relative;
  width: 90vw;
  height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  overflow: hidden;

  & .arrow-btn {
    position: absolute;
    top: 4.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    z-index: 99;
  }

  & .arrow-btn.left-btn {
    left: 0;
  }
  & .arrow-btn.right-btn {
    right: 0;
  }

  & .arrow-icon {
    font-size: 2rem;
    color: var(--secondary);
  }
`;

const CustomerSlider = ({ reviewData }) => {
  return (
    <StyledUl>
      <button className="arrow-btn left-btn">
        <MdArrowBackIosNew
          className="arrow-icon"
          //   onClick={() => handleCustomerSlide("prev")}
        />
      </button>
      <button className="arrow-btn right-btn">
        <MdArrowForwardIos
          className="arrow-icon"
          //   onClick={() => handleCustomerSlide("next")}
        />
      </button>

      {reviewData.map((data, index) => {
        return <SingleSlide key={data.id} {...data} />;
      })}
    </StyledUl>
  );
};
export default CustomerSlider;
