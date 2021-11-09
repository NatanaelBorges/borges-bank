import { Meta, Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'text',
    fontBig: false,
    big: false,
    primary: true,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<ButtonProps> = (args) => <Button {...args} />;
