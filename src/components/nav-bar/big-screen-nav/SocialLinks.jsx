import styled from "styled-components";

const StyledUl = styled.ul`
  position: absolute;
  left: 0;
  top: 3.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  height: 100%;
  padding: 0.9rem 0.5rem 0.7rem 0.5rem;
  background: var(--secondary);
  border-radius: 0.1rem;
  box-shadow: var(--light-shadow-right), var(--light-shadow-left),
    var(--light-shadow-bottom);
  z-index: 1;
  transition: 0.3s ease;
  transition-delay: 0.1s;
  ${({ $isOpen }) =>
    $isOpen
      ? `
    visibility: visible;
    opacity: 1;
  `
      : `
    visibility: hidden;
    opacity: 0;

      `}

  & .icon {
    font-size: 1.5rem;
    color: var(--accent-1);
    cursor: pointer;
  }

  & .icon:hover,
  .icon:active {
    color: var(--primary);
    scale: 1.1;
  }
`;

const SocialLinks = ({
  socialLinks,
  handleSocialLinks,

  isOpen,
}) => {
  return (
    <StyledUl
      $isOpen={isOpen}
      onMouseLeave={() => {
        handleSocialLinks("close");
      }}
    >
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
