// Write a function called "findAllSmall" that takes one array of integers and another integer as input, and returns an array of integers that contains all elements that are smaller than the input integer.

// findAllSmall([1, 2, 3], 10); // returns [1, 2, 3]
// findAllSmall([1, 2, 3], 2); // returns [1]
// findAllSmall([1, 3, 5, 4, 2], 4); // returns [1, 3, 2]

function findAllSmall(arr, n){
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i]<n){
            result.push(arr[i])
        }
    }
    return result
}

console.log(findAllSmall([1, 2, 3], 10))
console.log(findAllSmall([1, 2, 3], 2))
console.log(findAllSmall([1, 3, 5, 4, 2], 4))