// https://leetcode.com/problems/permutations/
// permutations

const permute = function(nums) {
  let = permArr = [];
  if (!nums.length) return [[]];
  return nums.flatMap((x) => {
    let res = [];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== x) {
        res.push(nums[i]);
      }
    }

    let subPerms = permute(res);

    let result = [];

    for (let i = 0; i < subPerms.length; i++) {
      let onePerm = subPerms[i];
      let newArr = [];
      newArr.push(x);

      for (let j = 0; j < onePerm.length; j++) {
        newArr.push(onePerm[j]);
      }

      result.push(newArr);
    }
    return result;
  });
}

console.log(permute([1, 3, 9]));
