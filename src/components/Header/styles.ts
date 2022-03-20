import styled, { css } from 'styled-components';
import * as ButtonStyles from 'components/Button/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 8rem;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    /* box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.1); */
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xxlarge};
  `}
`;

export const ImgLogo = styled.div`
  width: 15rem;
  height: 4.5rem;
  cursor: pointer;
  background-size: 100% 100%;
  background-image: url(${process.env.PUBLIC_URL}/img/rstecinfo.svg);
`;

export const NavWrapper = styled.div`
  display: flex;

  ${ButtonStyles.Wrapper} {
    ${({ theme }) => css`
      border: none;
      font-size: ${theme.font.sizes.xlarge};
      color: ${({ theme }) => theme.colors.white};

      :first-child {
        margin-left: 0rem;
      }

      &:after {
        content: '';
        width: 0%;
        height: 1px;
        display: block;
        transition: 1s ease-in-out;
        background: ${({ theme }) => theme.colors.white};
      }

      &:before {
        content: '';
        width: 100%;
        height: 1px;
        display: block;
        background: transparent;
        transition: 1s ease-in-out;
      }

      &:hover {
        &:after {
          width: 100%;
        }
        :before {
          width: 0%;
          height: 1px;
          background: ${({ theme }) => theme.colors.white};
        }
        background-color: transparent;
      }
    `}
  }
`;
