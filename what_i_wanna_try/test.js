//試試看concat能不能重複使用
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [7,8,9]

let arr4 = arr1.concat(arr2)
console.log(arr4)

let arr5 = arr1.concat(arr2).concat(arr3)
console.log(arr5)
//the answer is 可以!!

