import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';
import { ButtonProps } from '.';

export const Button = styled.button<ButtonProps>`
  ${({ theme, fontBig, big, primary, dark }) => css`
    border-radius: 50px;
    background: ${primary ? theme.colors.primary : theme.colors.dark};
    white-space: nowrap;
    padding: ${big ? '14px  48px' : '12px 30px'};
    color: ${dark ? theme.colors.dark : theme.colors.white};
    font-size: ${fontBig ? '20px' : '16px'};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
      transition: all 0.2s ease-in-out;
      background: ${primary ? theme.colors.white : theme.colors.primary};
    }
  `}
`;

export const href = styled(Link)``;
