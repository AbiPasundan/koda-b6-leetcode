// https://leetcode.com/problems/contains-duplicate/
// contains-duplicate


// gunakan forea t //not yet
// gunakan if dalam if // on going

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] == 1) {
    //         // console.log(nums[i]);
    //     } else {
    //         console.log("heh si bagong");
    //     }
    // }

    // let k = 0
    // nums.forEach(element => {
    //     // console.log(element);
    //     // console.log("----");
    //     // console.log(nums[k]);
    //     // k++
    //     nums.sort()
    //     if (element !== nums[k+1]) {
    //         console.log(false);
    //     } else {
    //         console.log("heh si bagong");
    //     }
    //     k++
    // });

    // let k = 0
    // // nums.sort((a,b) => b-a);
    // // console.log(nums);
    
    // nums.forEach(element => {
    //     nums.sort((a,b) => b-a);
    //     // console.log(nums[k]);
    //     if (nums[k] == element) {
    //         console.log(false);
    //     }
    //     // console.log(element);
    //     k++
    // });
    // return true

    // let k = 0
    // nums.forEach(element => {
    //     switch (nums[k]) {
    //         case element:
    //             if (nums[k] === element) {
    //                 console.log("yeay");
    //             }
    //             break;
    //         default:
    //             console.log("heh si bagong");
    //             break;
    //     }
    // });





    for (let i = 0; i < nums.length; i++) {
    for(let j=0; j<nums.length-1 ; j++){
        if (nums[i] === nums[j]) {
            return true
        }
    }
    }
    return false;

};

containsDuplicate([2,8,3,4,2])