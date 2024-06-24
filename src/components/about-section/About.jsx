import styled from "styled-components";
import halalLogo from "../../assets/halal.png";
import Info from "./Info";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .image-container {
    width: 12rem;
    height: 12rem;
    border-radius: 0.2rem;
    overflow: hidden;
  }

  & .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const About = () => {
  return (
    <StyledSection>
      <div className="image-container">
        <img src={halalLogo} alt="halal-logo" className="certificate" />
      </div>
      <Info />
    </StyledSection>
  );
};
export default About;
