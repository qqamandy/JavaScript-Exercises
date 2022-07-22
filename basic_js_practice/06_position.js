// Write a function called "position" that prints out the first uppercase letter and its index location. If not found, prints -1.

// position("abcd"); // prints -1
// position("AbcD"); // prints A 0
// position("abCD"); // prints C 2

function position(str){
    for(let i = 0; i < str.length; i++){
        if(str[i]==str[i].toUpperCase()){
            return (str[i],i)
        }else{
            return -1
        }
    }
}

console.log(position("abcd"))
console.log(position("AbcD"))
console.log(position("abCD"))