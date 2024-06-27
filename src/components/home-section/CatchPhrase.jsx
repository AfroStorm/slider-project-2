import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  height: 10rem;
  margin-bottom: 7rem;

  @media screen and (min-width: 992px) {
    align-items: flex-start;
    margin-left: 17rem;

    .main-text {
      font-size: 3.046rem;
    }
    .lower-text {
      font-size: 1.8rem;
    }
  }

  & .lower-text {
    font-size: 1.3rem;
  }

  & .main-text,
  & .lower-text {
    font-weight: 900;
    color: var(--primary);
  }

  & .main-text {
    font-size: 2.2rem;
  }
  & span {
    color: var(--accent-1);
  }
`;

const CatchPhrase = () => {
  return (
    <StyledDiv>
      <h1 className="main-text">
        Crafted with Care <br /> Rooted in <span>Faith</span>.
      </h1>
      <p className="lower-text">Where Quality Meets Devotion.</p>
    </StyledDiv>
  );
};
export default CatchPhrase;
