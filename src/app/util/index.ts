export function toPersianNumber(n: number | Intl.StringNumericLiteral): string {
  return new Intl.NumberFormat("fa-IR").format(n);
}
