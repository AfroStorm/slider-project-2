import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;

  & .page-link button {
    border: none;
    background: transparent;
    font-weight: 900;
    font-size: 1.8rem;
    color: var(--accent-1);
  }
`;

const PageLinks = ({ navLinks }) => {
  return (
    <StyledUl>
      {navLinks.map((pageLink) => {
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
