import styled, { css, DefaultTheme } from 'styled-components';
import { TypographyProps } from '.';

const textSize = {
  h1: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.heading.huge};
  `,
  h2: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.heading.large};
  `,
  h3: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.heading.big};
  `,
  h4: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.heading.medium};
  `,
  h5: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.heading.small};
  `,
  h6: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.heading.xsmall};
  `,
};

const textSizeParagraph = {
  xsmall: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.paragraph.xsmall};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.paragraph.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.paragraph.medium};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.paragraph.big};
  `,
};

const textCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const textItalic = (italic: boolean) => css`
  font-style: ${italic ? 'italic' : 'none'};
`;

const textUnderline = (underline: boolean) => css`
  text-decoration: ${underline ? 'underline' : 'none'};
`;

const textBold = (bold: boolean) => css`
  font-weight: ${bold ? 'bold' : 'normal'};
`;

const textColor = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary};
  `,
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  black: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
  `,
};

const textDisplay = {
  display1: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.display.huge};
  `,
  display2: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.display.large};
  `,
  display3: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.display.big};
  `,
  display4: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.display.medium};
  `,
  display5: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.display.small};
  `,
  display6: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.display.xsmall};
  `,
};

export const Text = styled.h1<TypographyProps>`
  ${({
    theme,
    align,
    italic,
    uppercase,
    as,
    display,
    size,
    underline,
    bold,
    color,
  }) => css`
    text-align: ${align};
    ${textCase(uppercase)};
    ${textColor[color](theme)};
    ${textUnderline(underline)};
    ${textItalic(italic)};
    ${textBold(bold)};
    ${as === 'p' ? textSizeParagraph[size](theme) : textSize[as](theme)};
    ${display !== 'none' ? textDisplay[display](theme) : 'none'};
  `}
`;
