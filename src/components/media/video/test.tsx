import { screen } from '@testing-library/react';
import { renderTheme } from '../../../styles/render-theme';
import { Video } from '.';

describe('<Video />', () => {
  it('should render with default values', () => {
    renderTheme(<Video src="video.mp4" />);
    const video = screen.getByTestId('MyVideo');

    expect(video).toHaveStyle({
      width: '100%',
      height: '100%',
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Video src="video.mp4" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
