// If n is divisible by 3 and 5, return fizzbuzz
// If n is divisible by 3 and not by 5, return fizz
// If n is divisible by 5 and not 3, return buzz
// If n is not divisible by 3 or 5, return n

export function fizzbuzz(n) {
  if (isNaN(n)) {
    throw new TypeError(`${n} isn't a number.`);
  }
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  } else if (n % 3 === 0) {
    return "fizz";
  } else if (n % 5 === 0) {
    return "buzz";
  }
  return n;
}
