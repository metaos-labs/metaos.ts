export function to32(value: string) {
  const arr = value.split(",");
  const len = 32 - arr.length;
  const result: Array<number> = [];
  arr.forEach((item) => {
    result.push(+item);
  });
  for (let i = 0; i < len; i++) {
    result.unshift(0);
  }
  return result;
}
