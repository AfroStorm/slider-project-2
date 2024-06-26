import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;

  & .name {
    color: var(--text-2);
    font-weight: 900;
    text-align: center;
  }

  & .description {
    text-align: justify;
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2;
    color: var(--text-1);
  }
`;

const Description = ({ whyUsData }) => {
  return (
    <StyledUl>
      {whyUsData.map((data) => {
        const { id, name, description } = data;

        return (
          <li key={id} className="data">
            <h4 className="name">{name}</h4>
            <p className="description">{description}</p>
          </li>
        );
      })}
    </StyledUl>
  );
};
export default Description;
