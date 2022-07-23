// Write a function called "isAllUpperCase" that checks if all letters in the given string is uppercase.

// isAllUpperCase("ABCD"); // returns true
// isAllUpperCase(""); // returns false
// isAllUpperCase("ABCDEFGHIJKLm"); // returns false

function isAllUpperCase(str){
    if(str.length==0){
        return false
    }
    //先設定為false就部會有中斷的問題
    let allUpperCase = true;
    for(let i = 0; i < str.length; i++){
        if(str[i] != str[i].toUpperCase()){
            allUpperCase=false
        }
    }
    return allUpperCase
}

console.log(isAllUpperCase('ABCD'))
console.log(isAllUpperCase(''))
console.log(isAllUpperCase('ABCDEFGHIJKLm'))