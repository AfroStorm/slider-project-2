import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  ${({ $isMobileNavOpen }) =>
    $isMobileNavOpen
      ? `
  transform: translateY(0%);
  opacity: 1;
  transition: 0.6s ease;
  transition-delay: 0.6s;
  `
      : `
  transform: translateY(100%);
  opacity: 0;
  transition: none;
`}

  & .social-link a {
    cursor: pointer;
  }

  & .icon {
    font-size: 2.5rem;
    color: var(--accent-1);
    transition: 0.3s ease;
  }

  & .icon:hover,
  .icon:active {
    color: var(--primary);
    scale: 1.1;
  }
`;

const SocialLinks = ({ socialLinks, isMobileNavOpen, handleMobileNav }) => {
  return (
    <StyledUl $isMobileNavOpen={isMobileNavOpen}>
      {socialLinks.map((socialLink) => {
        const { id, link, Icon } = socialLink;
        return (
          <li key={id} className="social-link">
            <a href={link} onClick={() => handleMobileNav()}>
              <Icon className={"icon"} />
            </a>
          </li>
        );
      })}
    </StyledUl>
  );
};
export default SocialLinks;
