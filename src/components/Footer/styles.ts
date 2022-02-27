import styled, { css } from "styled-components";

export const Footer = styled.div`
  ${({ theme }) => css`
    height: 8rem;
    display: flex;
    bottom: 0rem;
    align-items: center;
    justify-content: space-between;
    animation: footerAnimation 4s ease-in-out;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small} ${theme.spacings.xxlarge};

    @keyframes footerAnimation {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `}
`;

export const Paragraph = styled.p``;

export const SocialText = styled.p`
`;

export const IconsWrapper = styled.div`
  ${({ theme }) => css`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  `}
`;
