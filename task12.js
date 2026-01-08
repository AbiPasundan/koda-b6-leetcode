// https://leetcode.com/problems/reverse-integer/
// reverse-integer

// /**
//  * @param {number} x
//  * @return {number}
//  */
// var reverse = function (x) {
//   // if (typeof x !== "number")  {
//   //     console.log("must be number");
//   // }

//   x = x.toString();
//   //   console.log(x);
//   //   console.log(typeof x);

//   const arr = [...x];
//   const result = arr.indexOf("0");
//   let finalResult;
//   //   console.log(arr);
//   if (result > -1) {
//     arr.splice(result);
//     let res = arr.reverse();
//     // console.log(res);

//     // finalResult = res.toString()
//     finalResult = res.join("");

//     // console.log(finalResult);
//   } else {
//     // arr.splice(result);
//     let res = arr.reverse();
//     finalResult = res.join("");
//   }
//   const hasil = Number(finalResult);
//   // console.log(typeof hasil);

//   return hasil;
// };

// reverse(128320);

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // console.log(typeof x);
  // x = x.toString();
  // console.log(typeof x);
  // const arr = [...x];
  // console.log(arr);
  // const result = arr.indexOf("0");
  const intMax = 2147483647
  const intMin = -2147483647
  // console.log(result);
  // let finalResult;
  // if (result > -1) {
  //   arr.splice(result);
  //   let res = arr.reverse();
  //   finalResult = res.join("");
  //   console.log(finalResult);
  // } else {
  //   let res = arr.reverse();
  //   finalResult = res.join("");
  // }

  // if (arr.indexOf("0")) {
  //   arr.splice(result);
  //   let res = arr.reverse();
  //   finalResult = res.join("");
  //   console.log(finalResult);
  // }
  // const hasil = Number(finalResult);
  // console.log(hasil);

  // return hasil;
    let xString = x.toString()
    let xArray = [...xString]
    let xReverse= xArray.reverse(" ");
    let xRes = xReverse.join("");
    
    const int32Max = 2147483647
    const int32Min = -2147483647
    
    if (x < 0) {
        xRes = "-" + xRes.slice(0, xRes.length - 1);
    }
    let result = Number(xRes);
    if (result > int32Max || result < int32Min) {
        return 0;
    }
    return result;
};

console.log(reverse(1297));


var reverse = function(x) {
    let xString = x.toString()
    let xArray = [...xString]
    let xReverse= xArray.reverse(" ");
    let xRes = xReverse.join("");
    
    const int32Max = 2147483647
    const int32Min = -2147483647
    
    if (x < 0) {
        xRes = "-" + xRes.slice(0, xRes.length - 1);
    }
    let result = Number(xRes);
    if (result > int32Max || result < int32Min) {
        return 0;
    }
    return result;
};

console.log(reverse(-1232))
