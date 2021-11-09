import { Meta, Story } from '@storybook/react/types-6-0';
import { Link, LinkProps } from '.';
import { theme } from '../../../styles/theme';

export default {
  title: 'Link',
  component: Link,
  args: {
    children: 'Link',
    link: 'https://www.google.com.br/',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

export const Template: Story<LinkProps> = (args) => {
  return (
    <div
      style={{
        maxWidth: '320px',
        background: theme.colors.primary,
        padding: theme.spacings.large,
      }}
    >
      <Link {...args} />
      <Link {...args} />
      <Link {...args} />
      <Link {...args} />
    </div>
  );
};
