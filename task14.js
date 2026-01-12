// Source - https://stackoverflow.com/a
// Posted by Andreas Wong, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-12, License - CC BY-SA 3.0

var permArr = [],
  usedChars = [];

// function permute(input) {
//   let usedChars = [];
//   let i;
//   let ch;
//   let = permArr = [];
//   for (i = 0; i < input.length; i++) {
//     ch = input.splice(i, 1)[0];
//     usedChars.push(ch);
//     if (input.length == 0) {
//       permArr.push(usedChars.slice());
//     }
//     permute(input);
//     input.splice(i, 0, ch);
//     usedChars.pop();
//   }
//   return permArr;
// }

const permute = function(nums) {
  let = permArr = [];
  if (!nums.length) return [[]];
  return nums.flatMap((x) => {
    // let result
    // result = nums.filter(fil => fil !== x)
    // result = result.map(el => x, ...el)
    // result = result.map(el => [x, ...el])
    // return perms(nums.filter(v => v!==x)).map(vs => [x, ...vs]);
    // return perms
    // 1. Buang angka x dari array nums
    let res = [];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== x) {
        res.push(nums[i]);
        // console.log(res);
      }
    }

    let subPerms = permute(res);

    let result = [];

    for (let i = 0; i < subPerms.length; i++) {
      let onePerm = subPerms[i];
      //   console.log(onePerm);

      let newArr = [];
      newArr.push(x);

      //   console.log(newArr);

      for (let j = 0; j < onePerm.length; j++) {
        newArr.push(onePerm[j]);
      }

      result.push(newArr);
    }
    return result;
  });
}

console.log(permute([1, 3, 9]));
