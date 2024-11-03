export default function getShortString(string: string): string {
  if (string.length > 55) {
    const shortStr = string.slice(0, 55);
    return `${shortStr}...`;
  }
  return string;
}