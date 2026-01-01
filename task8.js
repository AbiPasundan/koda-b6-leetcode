// https://leetcode.com/problems/length-of-last-word/
// length-of-last-word

var lengthOfLastWord = function(s) {
    let arrayKata = s.trim(); 

    arrayKata = arrayKata.split(" "); 

    word = arrayKata.pop()


    word = word.length
    return word
    
};

console.log(lengthOfLastWord("halow hahaha"))
