import { screen } from '@testing-library/react';
import { renderTheme } from '../../../styles/render-theme';
import { Link } from '.';

describe('<MenuLink />', () => {
  const onPressEvent = jest.fn();
  onPressEvent.mockReturnValue('Link on press invoked');

  it('should render a link', () => {
    renderTheme(
      <Link link="http://localhost" onPress={onPressEvent}>
        Children
      </Link>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render a internal link', () => {
    renderTheme(
      <Link link="/localhost" onPress={onPressEvent}>
        Children
      </Link>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <Link link="http://localhost" newTab={true} onPress={onPressEvent}>
        Children
      </Link>,
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should render open in a new tab', () => {
    const { container } = renderTheme(
      <Link link="http://localhost" newTab={false} onPress={onPressEvent}>
        Children
      </Link>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
