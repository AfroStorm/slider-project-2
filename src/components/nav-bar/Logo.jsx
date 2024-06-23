import styled from "styled-components";
import logo from "../../assets/logo.png";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.1rem;
  padding: 0.9rem 0.5rem 0.7rem 2rem;
  height: 100%;
  background: var(--secondary);
  transform: skewX(5deg) translateX(-1rem);
  box-shadow: var(--light-shadow);

  & .img-container {
    transform: skewX(-5deg);
  }
  & .logo {
    width: 50px;
    height: 50px;
  }

  & .brand-name {
    transform: skewX(-5deg);
    font-weight: 900;
    color: var(--accent-1);
  }
`;

const Logo = () => {
  return (
    <StyledDiv>
      <div className="img-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <h3 className="brand-name">Company</h3>
    </StyledDiv>
  );
};
export default Logo;
