import type { Meta, StoryObj } from '@storybook/react';

import { PriceTag } from './PriceTag';

const meta = {
  title: 'Molecules/PriceTag',
  component: PriceTag,
  tags: ['autodocs'],
  args: {
    amount: 1299
  }
} satisfies Meta<typeof PriceTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
