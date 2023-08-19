/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  return x.toString() === [...(x + "")].reverse().join("");
};
