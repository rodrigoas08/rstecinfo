import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'sobre' })`
  ${({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    padding: 9rem 0;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0.1rem 0.4rem 1rem rgba(0, 0, 0, 0.9);

    @media (max-width: ${theme.breakpoints.desktop}) {
      ${DivIcons} h2 {
        font-size: 1.8rem;
      }
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      ${Section} {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: ${theme.spacings.medium};
      }

      ${AboutText} {
        padding-inline: 5rem;
        word-break: keep-all;
      }

      ${DivIcons} h2 {
        font-size: 2.2rem;
      }
    }

    @media (max-width: ${theme.breakpoints.ipad}) {
      ${Section} {
        display: flex;
        justify-content: center;
      }

      ${AboutText} ${Text} {
        display: none;
      }

      ${DivIcons} {
        flex-wrap: wrap;
      }

      ${DivIcons} h2 {
        font-size: 1.6rem;
      }
    }
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 90%;
    height: auto;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1.5fr;
    column-gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.xxlarge};
    grid-template-areas: 'aboutCard aboutText';
  `}
`;

export const AboutText = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: start;
  grid-area: aboutText;
  flex-direction: column;
  justify-content: space-around;
`;

export const Text = styled.p`
  ${({ theme }) => css`
    line-height: 160%;
    font-family: sans-serif;
    font-size: ${theme.font.sizes.medium};
  `}

  a {
    cursor: pointer;
  }
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;

export const DivIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.medium};
    margin-top: ${theme.spacings.small};

    h2 {
      font-family: sans-serif;
      font-size: 2.4rem;
    }

    svg {
      transition: 1s ease;
    }

    svg:hover {
      transition: 1s ease;
      fill: ${theme.colors.primary};
    }
  `}
`;
