import styled from "styled-components";
const companyName = "The Company";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & .title {
    color: var(--secondary);
    font-weight: 900;
  }

  & .info-text {
    text-align: justify;
    max-width: 40rem;
    font-weight: 500;
    padding: 0.5rem;
    font-size: 1.2rem;
    line-height: 2;
    color: var(--text-1);
  }
`;

const Info = () => {
  return (
    <StyledDiv>
      <h3 className="title">about {companyName}</h3>
      <p className="info-text">
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
