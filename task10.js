// https://leetcode.com/problems/clear-digits/
// clear-digits


/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let result = ''
    for (let i=0;i<s.length;i++){
        if(isNaN(s[i])){
            result += s[i]
        }else{
            result = result.replace(/.$/, '')
        }
    }
    return result
};

clearDigits("cb")