// Write a function called "isUpperCase" that checks if the first letter of the string is uppercase.

// isUpperCase("ABCD"); // returns true
// isUpperCase(""); // returns false
// isUpperCase("aBCD"); // returns false

function isUpperCase(str){
    if(str.length==0){
        return false
    }
    if(str[0]!=str[0].toUpperCase()){
        return false
    }else{
        return true
    }
}

console.log(isUpperCase("ABCD"))
console.log(isUpperCase(""))
console.log(isUpperCase("aBCD"))