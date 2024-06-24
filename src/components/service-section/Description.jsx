import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & .name {
    font-weight: 500;
  }

  & .image {
    width: 100%;
    height: 100%;
    max-width: 30rem;
    object-fit: cover;
    border-radius: 0.2rem;
    box-shadow: var(--light-shadow);
  }

  & .description {
    text-align: justify;
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2;
  }
`;

const Description = ({ name, image, description }) => {
  return (
    <StyledDiv>
      <img src={image} alt={name} className="image" />
      <h4 className="name">{name}</h4>
      <p className="description">{description}</p>
    </StyledDiv>
  );
};
export default Description;
