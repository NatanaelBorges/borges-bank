import { Meta, Story } from '@storybook/react/types-6-0';
import { Video, VideoProps } from '.';

export default {
  title: 'Video',
  component: Video,
  args: {
    src: '/assets/video/video.mp4',
    poster: '',
  },
  argTypes: {},
} as Meta;

export const Template: Story<VideoProps> = (args) => <Video {...args} />;
