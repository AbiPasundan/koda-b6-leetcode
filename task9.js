// https://leetcode.com/problems/remove-element/
// remove-element

var removeElement = function(nums, val) {
  let result = [];
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      result.push(nums[i]);
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

console.log(removeElement([3, 2, 2, 3], 3))