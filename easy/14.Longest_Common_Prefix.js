/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  let firstStr = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const compareStr = strs[i];

    for (let j = 0; j < firstStr.length; j++) {
      if (firstStr[j] !== compareStr[j]) {
        firstStr = compareStr.slice(0, j);
      }
    }
  }

  return firstStr;
};
