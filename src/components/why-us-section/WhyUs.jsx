import styled from "styled-components";
import { whyUsImage } from "../../appData/whyUs";
import whyUsData from "../../appData/whyUs";
import { forwardRef } from "react";

const StyledSection = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  & .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    width: 90vw;
  }

  & .image {
    width: 100%;
    height: 100%;
    max-width: 30rem;
    object-fit: cover;
    border-radius: 0.2rem;
    box-shadow: var(--light-shadow);
  }

  & .title {
    text-align: center;
    font-weight: 900;
  }

  @media screen and (min-width: 992px) {
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s ease;
    ${({ $currentPage, $pageIndex }) => `
    transform: translateX(${100 * ($pageIndex - $currentPage)}%);
    opacity: ${$pageIndex === $currentPage ? 1 : 0};
    visibility: ${$pageIndex === $currentPage ? "visible" : "hidden"};
    `}

    .content-container {
      display: grid;
      grid-template-columns: repeat(6, 8rem);
      grid-template-areas:
        "header header header header header header"
        "text1 text1 image image text2 text2"
        "text3 text3 image image text4 text4";
      align-items: start;
      justify-items: center;
      margin-top: 5rem;
      width: 100vw;
      row-gap: 2rem;
    }

    .title {
      grid-area: header;
      font-size: 5rem;
    }

    .image {
      grid-area: image;
      object-fit: cover;
      object-position: 37% 50%;
    }
  }
`;

const StyledArticle = styled.article`
  ${({ $gridTextNum }) => `grid-area: text${$gridTextNum};`}
  & .name {
    color: var(--secondary);
    font-weight: 900;
    text-align: center;
  }

  & .description {
    text-align: justify;
    padding: 0.5rem;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 2;
    color: var(--text-1);
  }

  @media screen and (min-width: 992px) {
    .name {
      font-size: 1.8rem;
    }

    .description {
      font-size: 1rem;
    }
  }
`;

const WhyUs = forwardRef(({ currentPage, pageIndex }, ref) => {
  let gridTextNum = 0;

  return (
    <StyledSection ref={ref} $currentPage={currentPage} $pageIndex={pageIndex}>
      <div className="content-container">
        <h3 className="title">4 reasons to choose us</h3>
        <img src={whyUsImage} alt="image" className="image" />

        {whyUsData.map((data) => {
          const { id, name, description } = data;

          return (
            <StyledArticle
              key={id}
              className="data"
              $gridTextNum={(gridTextNum += 1)}
            >
              <h4 className="name">{name}</h4>
              <p className="description">{description}</p>
            </StyledArticle>
          );
        })}
      </div>
    </StyledSection>
  );
});
export default WhyUs;
