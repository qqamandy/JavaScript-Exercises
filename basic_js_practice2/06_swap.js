// Write a function called "swap" that takes a string as input, and returns a new string with lowercase changed to uppercase, uppercase changed to lowercase.

// swap("Aloha"); // returns "aLOHA"
// swap("Love you."); // returns "lOVE YOU."

function swap(str){
    let result = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] == str[i].toUpperCase()){
            result+= str[i].toLowerCase()
        }else{
            result+= str[i].toUpperCase()
        }
    }
    return result
}

console.log(swap("Aloha"))
console.log(swap("Love you."))