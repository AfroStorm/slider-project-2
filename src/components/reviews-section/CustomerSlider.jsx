import styled from "styled-components";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import SingleSlide from "./SingleSlide";
import { useState } from "react";

const StyledUl = styled.ul`
  position: relative;
  width: 90vw;
  max-width: 40rem;
  height: 38rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  overflow: hidden;

  & .arrow-btn {
    position: absolute;
    top: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    z-index: 99;
    cursor: pointer;
  }

  & .arrow-btn.left-btn {
    left: 0;
  }

  & .arrow-btn.right-btn {
    right: 0;
  }

  & .arrow-icon {
    font-size: 2rem;
    color: var(--accent-1);
    transition: 0.3s ease;
  }

  & .arrow-icon:hover,
  .arrow-icon:active {
    scale: 1.2;
    color: var(--primary);
  }

  @media screen and (min-width: 992px) {
    height: 20rem;
    align-self: center;
    margin-top: 4rem;

    .arrow-btn {
      top: 8rem;
    }
  }
`;

const CustomerSlider = ({ reviewData }) => {
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + reviewData.length) % reviewData.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % reviewData.length;
      return result;
    });
  };

  return (
    <StyledUl>
      <button className="arrow-btn left-btn">
        <MdArrowBackIosNew className="arrow-icon" onClick={prevSlide} />
      </button>
      <button className="arrow-btn right-btn">
        <MdArrowForwardIos className="arrow-icon" onClick={nextSlide} />
      </button>

      {reviewData.map((data, index) => {
        return (
          <SingleSlide
            key={data.id}
            {...data}
            personIndex={index}
            currentPerson={currentPerson}
          />
        );
      })}
    </StyledUl>
  );
};
export default CustomerSlider;
