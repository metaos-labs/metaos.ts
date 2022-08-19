export function encrypt(value: string, prefix = 6, suffix = 4) {
  if (value) {
    return value.substr(0, prefix) + "..." + value.substr(-suffix);
  } else {
    return value;
  }
}
