import styled from "styled-components";
import { LiaStarSolid } from "react-icons/lia";

const StyledLi = styled.li`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 15rem;
  padding: 2rem 0;
  border-radius: 0.5rem;
  gap: 1rem;
  background: var(--secondary);
  transition: 0.6s ease;
  ${({ $currentPerson, $personIndex }) => `
    transform: translateX(${100 * ($personIndex - $currentPerson)}%);
    opacity: ${$personIndex === $currentPerson ? 1 : 0};
    visibility: ${$personIndex === $currentPerson ? "visible" : "hidden"};
  `}

  & .image-container {
    width: 11rem;
    height: 11rem;
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
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
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
    color: white;
  }

  & .user-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    width: 100%;
  }

  & .age,
  .name {
    font-weight: 500;
    color: var(--accent-1);
  }

  @media screen and (min-width: 992px) {
    padding: 1rem 2rem;
    flex-direction: row;

    .content-container {
      flex: 3;
      display: flex;
      flex-direction: column;
    }

    .stars {
      justify-content: flex-start;
    }

    & .star-icon {
      font-size: 1.3rem;
    }

    .review-text {
      font-size: 1rem;
    }

    .age,
    .name {
      font-weight: 500;
      font-size: 1.2rem;
      color: var(--accent-1);
    }
  }
`;

const SingleSlide = ({
  image,
  userName,
  age,
  numOfStars,
  reviewText,
  personIndex,
  currentPerson,
}) => {
  return (
    <StyledLi $currentPerson={currentPerson} $personIndex={personIndex}>
      <div className="image-container">
        <img src={image} alt={userName} className="image" />
      </div>
      <div className="content-container">
        <div className="stars">
          {Array.from({ length: numOfStars }, (_, index) => {
            return <LiaStarSolid key={index} className="star-icon" />;
          })}
        </div>

        <p className="review-text">{reviewText}</p>

        <div className="user-info">
          <h4 className="name">{userName}</h4>
          <h4 className="age">{age}</h4>
        </div>
      </div>
    </StyledLi>
  );
};
export default SingleSlide;
