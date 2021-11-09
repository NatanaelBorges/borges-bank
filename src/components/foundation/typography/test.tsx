import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { renderTheme } from '../../../styles/render-theme';
import { theme } from '../../../styles/theme';

import { Typography } from '.';

describe('<Typography />', () => {
  it('should render with default values', () => {
    renderTheme(<Typography>text</Typography>);
    const typography = screen.getByRole('heading', { name: 'text' });

    expect(typography).toHaveStyle({
      color: theme.colors.primary,
      'text-align': 'start',
      'text-decoration': 'none',
      'font-style': 'none',
      'font-size': theme.font.sizes.heading.huge,
      'text-transform': 'none',
      'font-weight': 'normal',
    });
  });

  it('should render correct colors', () => {
    const { rerender } = renderTheme(
      <Typography color="secondary">text</Typography>,
    );
    const typography = screen.getByRole('heading', { name: 'text' });

    expect(typography).toHaveStyle({
      color: theme.colors.secondary,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography color="white">text</Typography>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      color: theme.colors.white,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography color="black">text</Typography>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      color: theme.colors.black,
    });
  });

  it('should render correct paragraph sizes', () => {
    const { rerender } = renderTheme(<Typography as="p">text</Typography>);
    const typography = screen.getByText('text');

    expect(typography).toHaveStyle({
      'font-size': theme.font.sizes.paragraph.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography size="xsmall" as="p">
          text
        </Typography>
      </ThemeProvider>,
    );

    expect(screen.getByText('text')).toHaveStyle({
      'font-size': theme.font.sizes.paragraph.xsmall,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography size="small" as="p">
          text
        </Typography>
      </ThemeProvider>,
    );

    expect(screen.getByText('text')).toHaveStyle({
      'font-size': theme.font.sizes.paragraph.small,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography size="big" as="p">
          text
        </Typography>
      </ThemeProvider>,
    );

    expect(screen.getByText('text')).toHaveStyle({
      'font-size': theme.font.sizes.paragraph.big,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Typography as="h1">text</Typography>);
    const typography = screen.getByRole('heading', { name: 'text' });

    expect(typography).toHaveStyle({
      'font-size': theme.font.sizes.heading.huge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography as="h2">text</Typography>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.heading.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography as="h3">text</Typography>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.heading.big,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography as="h4">text</Typography>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.heading.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography as="h5">text</Typography>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.heading.small,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography as="h6">text</Typography>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.heading.xsmall,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Typography uppercase={true}>text</Typography>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Typography as="h6">text</Typography>);
    screen.getByRole('heading', { name: 'text' });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });

  it('should render correct display sizes', () => {
    const { rerender } = renderTheme(
      <Typography display="display1">text</Typography>,
    );
    const typography = screen.getByRole('heading', { name: 'text' });

    expect(typography).toHaveStyle({
      'font-size': theme.font.sizes.display.huge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography display="display2">text</Typography>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.display.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography display="display3">text</Typography>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.display.big,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography display="display4">text</Typography>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.display.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography display="display5">text</Typography>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.display.small,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography display="display6">text</Typography>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.display.xsmall,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(
      <Typography align="start">text</Typography>,
    );
    const typography = screen.getByRole('heading', { name: 'text' });

    expect(typography).toHaveStyle({
      'text-align': 'start',
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography align="end">text</Typography>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'text-align': 'end',
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography align="center">text</Typography>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'text-align': 'center',
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Typography align="justify">text</Typography>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'text-align': 'justify',
    });
  });

  it('should render with italic letters', () => {
    renderTheme(<Typography italic={true}>text</Typography>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'font-style': 'italic',
    });
  });

  it('should render with underline letters', () => {
    renderTheme(<Typography underline={true}>text</Typography>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'text-decoration': 'underline',
    });
  });

  it('should render with bold letters', () => {
    renderTheme(<Typography bold={true}>text</Typography>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'font-weight': 'bold',
    });
  });
});
