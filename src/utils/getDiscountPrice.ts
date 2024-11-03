export default function getDiscountPrice(amount: number, discount: number): string {
  const result = (amount - ((amount / 100) * discount));
  if (result < 0) {
    return String(0);
  }
  return String(result);
}