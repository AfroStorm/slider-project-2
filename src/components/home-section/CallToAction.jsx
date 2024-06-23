import styled from "styled-components";

const StyledDiv = styled.div`
  transform: skewX(-10deg);
  box-shadow: var(--light-shadow);

  & button {
    width: 10rem;
    height: 4rem;
    background: var(--secondary);
    border-radius: 0.1rem;
    border: none;
    cursor: pointer;
  }

  & h4 {
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--accent-1);
    transition: 0.3s ease;
  }

  & h4:hover,
  & h4:active {
    color: var(--accent-1);
    scale: 1.1;
  }
`;

const CallToAction = () => {
  return (
    <StyledDiv>
      <button>
        <h4>start here</h4>
      </button>
    </StyledDiv>
  );
};
export default CallToAction;
