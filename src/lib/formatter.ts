const comapctNumberFormatter = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

export function formateCompactNumber(number: number) {
  return comapctNumberFormatter.format(number);
}
