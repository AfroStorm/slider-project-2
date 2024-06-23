import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  ${({ $isMobileNavOpen }) =>
    `
  transform: ${$isMobileNavOpen ? "translateY(0%)" : "translateY(100%)"};
  opacity:${$isMobileNavOpen ? "1" : "0"};
  transition:${$isMobileNavOpen ? "0.6s ease" : "none"};
  transition-delay: 0.6s;
`}

  & .icon {
    font-size: 2.5rem;
    color: var(--accent-1);
  }
`;

const SocialLinks = ({ socialLinks, isMobileNavOpen }) => {
  return (
    <StyledUl $isMobileNavOpen={isMobileNavOpen}>
      {socialLinks.map((socialLink) => {
        const { id, link, Icon } = socialLink;
        return (
          <li key={id} className="social-link">
            <a href={link}>
              <Icon className={"icon"} />
            </a>
          </li>
        );
      })}
    </StyledUl>
  );
};
export default SocialLinks;
