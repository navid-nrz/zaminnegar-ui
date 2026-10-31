export function toPersianNumber(n: number): string {
  return new Intl.NumberFormat("fa-IR").format(n);
}