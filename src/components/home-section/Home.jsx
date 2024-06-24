import styled from "styled-components";
import CatchPhrase from "./CatchPhrase";
import CallToAction from "./CallToAction";
import { forwardRef } from "react";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const Home = forwardRef(({}, ref) => {
  return (
    <StyledSection ref={ref}>
      <CatchPhrase />
      <CallToAction />
    </StyledSection>
  );
});
export default Home;
