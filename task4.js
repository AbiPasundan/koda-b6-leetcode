// https://leetcode.com/problems/is-object-empty/
// is-object-empty/


/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    for (const x in obj) {
        return false;
    }
    return true
};

