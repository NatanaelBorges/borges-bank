import { Meta, Story } from '@storybook/react/types-6-0';
import { Typography, TypographyProps } from '.';

export default {
  title: 'Typography',
  component: Typography,
  args: {
    children: 'text',
    align: 'start',
    as: 'h1',
    color: 'primary',
    display: 'none',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<TypographyProps> = (args) => (
  <Typography {...args} />
);
