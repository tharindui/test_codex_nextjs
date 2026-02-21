import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CartProvider, useCart } from './CartContext';

const product = {
  id: 'prod-1',
  name: 'Sport Steering Wheel',
  description: 'Premium leather steering wheel with integrated controls.',
  price: 299,
  category: 'Interior',
  image: 'test-image'
};

function CartHarness() {
  const { items, total, addItem, updateQuantity } = useCart();

  return (
    <div>
      <button onClick={() => addItem(product)} type="button">
        Add
      </button>
      <button onClick={() => updateQuantity(product.id, 3)} type="button">
        SetQuantity
      </button>
      <p data-testid="count">{items[0]?.quantity ?? 0}</p>
      <p data-testid="total">{total}</p>
    </div>
  );
}

describe('CartContext', () => {
  it('adds an item and updates totals', async () => {
    const user = userEvent.setup();

    render(
      <CartProvider>
        <CartHarness />
      </CartProvider>
    );

    await user.click(screen.getByRole('button', { name: 'Add' }));

    expect(screen.getByTestId('count')).toHaveTextContent('1');
    expect(screen.getByTestId('total')).toHaveTextContent('299');
  });

  it('updates quantity and recalculates total', async () => {
    const user = userEvent.setup();

    render(
      <CartProvider>
        <CartHarness />
      </CartProvider>
    );

    await user.click(screen.getByRole('button', { name: 'Add' }));
    await user.click(screen.getByRole('button', { name: 'SetQuantity' }));

    expect(screen.getByTestId('count')).toHaveTextContent('3');
    expect(screen.getByTestId('total')).toHaveTextContent('897');
  });
});
