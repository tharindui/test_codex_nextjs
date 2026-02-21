import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Add to cart'
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled'
  }
};
