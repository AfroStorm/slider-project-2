import styled from "styled-components";
const companyName = "The Company";

const StyledDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & h4,
  p {
    font-weight: 500;
  }
  & h3 {
    color: var(--secondary);
    font-weight: 900;
  }

  & p {
    text-align: justify;
    padding: 0.5rem;
    font-size: 1.2rem;
    line-height: 2;
    color: var(--text-1);
  }
`;

const Info = () => {
  return (
    <StyledDiv>
      <h3>about {companyName}</h3>
      <p>
        Welcome to {companyName}, where tradition meets quality. We provide
        high-quality products that seamlessly fit into your everyday life while
        adhering to Islamic principles. Our diverse range includes stylish
        modest clothing and everyday essentials, all carefully selected for
        quality and ethical production. We strive to make your shopping
        experience simple and trustworthy. Thank you for choosing {companyName}.
        We look forward to being part of your daily life.
      </p>
    </StyledDiv>
  );
};
export default Info;
