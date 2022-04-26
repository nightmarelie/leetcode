/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const temp = x;
  let reversed = 0;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = parseInt(x / 10);
  }

  return temp === reversed;
};
