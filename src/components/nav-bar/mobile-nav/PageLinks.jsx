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
    $isMobileNavOpen
      ? `
  transform: translateY(0%);
  opacity: 1;
  transition: 0.6s ease;
  transition-delay: ${($index + 1) * 0.1}s;
  `
      : `
  transform: translateY(100%);
  opacity: 0;
  transition: none;
`}
  & button {
    border: none;
    background: transparent;
    font-weight: 900;
    font-size: 1.8rem;
    color: var(--accent-1);
    cursor: pointer;
    transition: 0.3s ease;
  }

  & button:hover,
  button:active {
    color: var(--primary);
    scale: 1.1;
  }
`;

const PageLinks = ({
  pageLinks,
  isMobileNavOpen,
  scrollToSection,
  handleMobileNav,
}) => {
  return (
    <StyledUl>
      {pageLinks.map((pageLink, index) => {
        const { id, name } = pageLink;
        return (
          <StyledLi key={id} $index={index} $isMobileNavOpen={isMobileNavOpen}>
            <button
              type="button"
              onClick={() => {
                scrollToSection(name), handleMobileNav();
              }}
            >
              {name}
            </button>
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};
export default PageLinks;
