import { screen } from '@testing-library/react';
import { renderTheme } from '../../../styles/render-theme';
import { theme } from '../../../styles/theme';

import { Button } from '.';

describe('<Button />', () => {
  it('should render with default values', () => {
    renderTheme(<Button>text</Button>);
    const button = screen.getByRole('button', { name: 'text' });

    expect(button).toHaveStyle({
      'border-radius': '50px',
      background: theme.colors.primary,
      'white-space': 'nowrap',
      padding: '12px 30px',
      color: theme.colors.white,
      'font-size': '16px',
      outline: 'none',
      border: 'none',
      cursor: 'pointer',
    });
  });

  it('should render with sizes big', () => {
    renderTheme(<Button big={true}>text</Button>);
    const button = screen.getByRole('button', { name: 'text' });

    expect(button).toHaveStyle({
      padding: '14px 48px',
    });
  });

  it('should render with font big', () => {
    renderTheme(<Button fontBig={true}>text</Button>);
    const button = screen.getByRole('button', { name: 'text' });

    expect(button).toHaveStyle({
      'font-size': '20px',
    });
  });

  it('should render correct colors', () => {
    renderTheme(<Button primary={false}>text</Button>);
    const button = screen.getByRole('button', { name: 'text' });

    expect(button).toHaveStyle({
      background: theme.colors.dark,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Button>text</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
