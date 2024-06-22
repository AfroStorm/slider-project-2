import styled from "styled-components";

const StyledDiv = styled.div`
  width: 6.5rem;
  height: 100%;
  padding: 0.5rem;
  padding-top: 0.7rem;
  background: var(--secondary);
  transform: skewX(5deg) translateX(0.5rem);
  box-shadow: var(--light-shadow);

  & .lines {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    width: 95%;
    transform: skewX(-5deg);
    background: transparent;
    border: none;
  }
  & .line {
    width: 80%;
    padding: 0.3rem;
    background: var(--accent-1);
    border-radius: 0.2rem;
  }
`;

const HamburgerMenu = ({ handleMobileNav }) => {
  return (
    <StyledDiv>
      <button type="button" className="lines" onClick={() => handleMobileNav()}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
    </StyledDiv>
  );
};
export default HamburgerMenu;
