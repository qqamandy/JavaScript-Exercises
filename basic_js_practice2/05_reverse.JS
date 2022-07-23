// Write a function called "reverse" that takes a string as input, and returns the reverse string.

// reverse("abcd"); // returns "dcba"
// reverse("I am a good guy."); // returns ".yug doog a am I"

function reverse(str){
    let result = ''
    for(let i = str.length-1; i >=0; i--){
        result += str[i]
    }
    return result;
}

console.log(reverse("abcd"))
console.log(reverse("I am a good guy."))