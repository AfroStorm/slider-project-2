import styled from "styled-components";
import { LiaStarSolid } from "react-icons/lia";

const StyledLi = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  & .image-container {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    overflow: hidden;
  }

  & .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .stars {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.7rem;
  }

  & .star-icon {
    font-size: 1.6rem;
    color: gold;
  }

  & .review-text {
    text-align: justify;
    font-size: 1.2rem;
    padding: 0.5rem;
    font-weight: 500;
    line-height: 2;
  }

  & .user-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    width: 100%;
  }
`;

const SingleSlide = ({ image, userName, age, numOfStars, reviewText }) => {
  return (
    <StyledLi>
      <div className="image-container">
        <img src={image} alt={userName} className="image" />
      </div>

      <div className="stars">
        {Array.from({ length: numOfStars }, (_, index) => {
          return <LiaStarSolid key={index} className="star-icon" />;
        })}
      </div>

      <p className="review-text">{reviewText}</p>

      <div className="user-info">
        <h4 className="name">{userName}</h4>
        <h5>{age}</h5>
      </div>
    </StyledLi>
  );
};
export default SingleSlide;
