import styled from "styled-components";
import CatchPhrase from "./CatchPhrase";
import CallToAction from "./CallToAction";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Home = () => {
  return (
    <StyledSection>
      <CatchPhrase />
      <CallToAction />
    </StyledSection>
  );
};
export default Home;
