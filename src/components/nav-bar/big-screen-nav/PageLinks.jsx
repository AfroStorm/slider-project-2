import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 100%;
  transform: skewX(-5deg);

  & .page-link button {
    border: none;
    background: transparent;
    font-weight: 900;
    font-size: 1.1rem;
    color: var(--accent-1);
    cursor: pointer;
  }

  & .page-link button:hover,
  .page-link button:active {
    color: var(--primary);
    scale: 1.1;
  }
`;

const PageLinks = ({ pageLinks }) => {
  return (
    <StyledUl>
      {pageLinks.map((pageLink) => {
        const { id, name } = pageLink;
        return (
          <li key={id} className="page-link">
            <button type="button">{name}</button>
          </li>
        );
      })}
    </StyledUl>
  );
};
export default PageLinks;
