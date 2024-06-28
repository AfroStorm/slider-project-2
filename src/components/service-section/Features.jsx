import styled from "styled-components";
import { MdDoubleArrow } from "react-icons/md";
import { v4 as uuid4 } from "uuid";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.5rem;

  & .name {
    font-weight: 900;
    color: var(--text-2);
  }

  & .image {
    width: 100%;
    height: 100%;
    max-width: 30rem;
    object-fit: cover;
    border-radius: 0.2rem;
    box-shadow: var(--light-shadow);
  }

  & .feature {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  & .icon {
    flex: 0.5;
    font-size: 1.5rem;
    color: var(--secondary);
  }

  & .feature-text {
    font-size: 1.2rem;
    font-weight: 900;
    color: var(--secondary);
  }

  @media screen and (min-width: 992px) {
    align-items: center;

    .image {
      width: 18rem;
      height: 14rem;
    }
    .feature {
      align-self: flex-start;
    }
    .icon {
      font-size: 1.2rem;
    }
    .feature-text {
      font-size: 1rem;
    }
  }
`;

const Features = ({ features, name, image }) => {
  return (
    <StyledUl>
      <img src={image} alt={name} className="image" />
      <h4 className="name">{name}</h4>

      {features.map((feature) => {
        return (
          <li key={uuid4()} className="feature">
            <div>
              <MdDoubleArrow className="icon" />
            </div>
            <h5 className="feature-text">{feature}</h5>
          </li>
        );
      })}
    </StyledUl>
  );
};
export default Features;
