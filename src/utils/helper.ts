export function isNumber(str: string) {
  return /^-?\d*\.?\d+$/.test(str);
}
