// https://leetcode.com/problems/power-of-two/
// power-of-two
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
        if (n <= 0) {
        return false
    }
    if(n - 1 == 0){
        return true
    } 
    for (let x = 0; x < 62; x++) {
        const element = Math.pow(2, x)
        if (element == n) {
            return true
        }
    }

    return false
};
