/**
 * @param {string} s
 * @return {boolean}
 */

if (!Array.prototype.peek) {
  Array.prototype.peek = function () {
    return this.at(-1);
  };
}

const isValid = (s) => {
  const stack = [];

  const parentheses = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    const str = s[i];

    if (str === "(" || str === "[" || str === "{") {
      stack.push(str);
    } else if (stack.peek() === parentheses[str]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length !== 0 ? false : true;
};
