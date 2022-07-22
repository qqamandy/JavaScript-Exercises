// Write a function called "isAllUpperCase" that checks if all letters in the given string is uppercase.

// isAllUpperCase("ABCD"); // returns true
// isAllUpperCase(""); // returns false
// isAllUpperCase("ABCDEFGHIJKLm"); // returns false

function isAllUpperCase(str){
    if(str.length==0){
        return false
    }

    for(let i = 0; i < str.length; i++){
        if(str[i] != str[i].toUpperCase()){
            return false
        }else{
            return true
        }
    }
}

console.log(isAllUpperCase('ABCD'))
console.log(isAllUpperCase(''))
console.log(isAllUpperCase('ABCDEFGHIJKLm'))