import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const StyledLi = styled.li`
  ${({ $isMobileNavOpen, $index }) =>
    `
  transform: ${$isMobileNavOpen ? "translateY(0%)" : "translateY(100%)"};
  opacity:${$isMobileNavOpen ? "1" : "0"};
  transition:${$isMobileNavOpen ? "0.6s ease" : "none"};
  transition-delay: ${($index + 1) * 0.1}s;
`}

  & button {
    border: none;
    background: transparent;
    font-weight: 900;
    font-size: 1.8rem;
    color: var(--accent-1);
  }
`;

const PageLinks = ({ navLinks, isMobileNavOpen }) => {
  return (
    <StyledUl>
      {navLinks.map((pageLink, index) => {
        const { id, name } = pageLink;
        return (
          <StyledLi key={id} $index={index} $isMobileNavOpen={isMobileNavOpen}>
            <button type="button">{name}</button>
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};
export default PageLinks;
