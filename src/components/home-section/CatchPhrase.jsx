import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  width: 100%;
  height: 10rem;
  margin-bottom: 7rem;

  & p {
    font-size: 1.3rem;
  }

  & h1,
  & p {
    margin-left: 1.5rem;
    font-weight: 900;
  }

  & h1 {
    font-size: 2.2rem;
  }
  & span {
    color: var(--secondary);
  }
`;

const CatchPhrase = () => {
  return (
    <StyledDiv>
      <h1>
        Crafted with Care <br /> Rooted in <span>Faith</span>.
      </h1>
      <p>Where Quality Meets Devotion.</p>
    </StyledDiv>
  );
};
export default CatchPhrase;
