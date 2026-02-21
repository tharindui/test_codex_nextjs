export function PriceTag({ amount }: { amount: number }) {
  return <p className="text-lg font-semibold text-primary-600">${amount.toLocaleString()}</p>;
}
