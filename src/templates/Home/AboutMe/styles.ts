import styled, { css } from 'styled-components';

export const Wrapper = styled.div.attrs({ id: 'sobre' })`
  width: 100%;
  display: flex;
  max-height: 100vh;
  padding-top: 8rem;
  align-items: start;
  justify-content: center;
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: rgba(0, 0, 0, 0.9);
    padding: ${theme.spacings.xlarge} 15rem;
    box-shadow: 0.1rem 0.4rem 1rem rgba(0, 0, 0, 0.9);
  `}
`;

export const About = styled.div`
  ${({ theme }) => css`
    width: 80%;
    display: grid;
    grid-template-columns: auto auto;
    margin-top: ${theme.spacings.large};

    > p {
      width: 100%;
      font-size: 1.8rem;
      line-height: 150%;
      align-self: center;
      word-break: keep-all;
      font-family: ${theme.font.family.josefin};
    }
    a {
      cursor: pointer;
    }
  `}
`;

export const Image = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    height: 20rem;
    filter: saturate(230%);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin-right: ${theme.spacings.large};
    border-radius: ${theme.border.radius};
    background-image: url(/img/euPedro.jpg);

    ::after {
      content: '';
      position: absolute;
      /* display: block; */
      width: 40%;
      height: 40%;
      top: -4px;
      left: -4px;
      border-radius: ${theme.border.radius};
      border: 0.3rem solid ${theme.colors.primary};
      border-bottom: 0;
      border-right: 0;
    }

    ::before {
      content: '';
      position: absolute;
      /* display: block; */
      width: 40%;
      height: 40%;
      bottom: -4px;
      right: -4px;
      border-radius: ${theme.border.radius};
      border: 0.3rem solid ${theme.colors.primary};
      border-top: 0;
      border-left: 0;
    }

    @media (max-width: ${theme.breakpoints.smallTablet}) {
    }
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.large};

    @media (max-width: ${theme.breakpoints.smallTablet}) {
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: 45rem;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.medium};
    column-gap: ${theme.spacings.xxsmall};
    background-color: rgba(255, 255, 255, 0.1);
    border-top: 0.3rem solid ${theme.colors.primary};

    > p {
      color: ${theme.colors.text};
      line-height: 140%;
    }
    > ul {
      align-self: flex-start;
      padding-left: ${theme.spacings.small};
    }
    > ul,
    li {
      color: ${theme.colors.text};
      padding-bottom: ${theme.spacings.xsmall};
    }
    li::marker {
      color: ${theme.colors.primary};
    }
  `}
`;

export const TitleCard = styled.h1`
  ${({ theme }) => css`
    text-decoration: underline;
    text-underline-offset: 0.3rem;
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    padding-bottom: ${theme.spacings.xsmall};

    @media (max-width: ${theme.breakpoints.smallTablet}) {
    }
  `}
`;

export const DivIcons = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    gap: ${theme.spacings.xxsmall};
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(4, 1fr);
  `}
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;
