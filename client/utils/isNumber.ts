export function isNumber(num: string) {
  // if it is a positive integer
  if (num.match(/^\d+$/)) {
    return true;
  }
  // if it is a float
  if (num.match(/^\d+\.\d+$/)) {
    return true;
  }
  // not a positive number
  return false;
}
