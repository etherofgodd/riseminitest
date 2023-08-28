export function inputFormatter(val: string): number {
  const temp = val.replace(/[^0-9.]/g, "");
  return +temp;
}

export function formatText(val: string): string {
  return Math.abs(+val)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function formatOnFocus(val?: string): string {
  let temp = val ? val : "";
  return temp.replace(/[^0-9.]/g, "");
}

export function formatPrice(val: number | string): string {
  return val
    .toString()
    .replace(/[^0-9-+]/g, "")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function formatPrice_toDP(val?: number): string {
  let value = val ? val : 0;
  return value
    .toFixed(2)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export function formatDate(date?: Date): string {
  return date
    ? `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    : "";
}
