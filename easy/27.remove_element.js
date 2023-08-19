/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// in-place algorithm : without creating new data structure, modifies the input in place

const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i -= 1;
    }
  }

  return nums.length;
};

removeElement([3, 2, 2, 3], 3);
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
