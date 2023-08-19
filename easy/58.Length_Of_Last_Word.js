/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  const arr = s.split(" ").filter((item) => item !== "");

  return arr.at(-1).length;
};
