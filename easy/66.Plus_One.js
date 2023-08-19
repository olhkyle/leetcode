/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  let _digits = [...digits];
  for (let i = _digits.length - 1; i >= 0; i--) {
    if (_digits[i] !== 9) {
      // 0 ~ 8
      _digits[i] += 1;
      return _digits;
    }

    _digits[i] = 0;
    if (i === 0) {
      // 9
      _digits = [1, ..._digits];
      return _digits;
    }
  }
};
