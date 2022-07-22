// Write a function called "findSmallerTotal" that takes one array of integers and one integer as input, and returns the sum of all elements in the array that are smaller than the input integer.

// findSmallerTotal([1, 2, 3], 3) // returns 3
// findSmallerTotal([1, 2, 3], 1) // returns 0
// findSmallerTotal([3, 2, 5, 8, 7], 999) // returns 25
// findSmallerTotal([3, 2, 5, 8, 7], 0) // returns 0

function findSmallerTotal(arr, n){
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i]<n){
            result.push(arr[i])
        }
    }
    let final = 0
    for(let i = 0; i < result.length; i++){
        final += arr[i]
    }
    return final
}

console.log(findSmallerTotal([1, 2, 3], 3))
console.log(findSmallerTotal([1, 2, 3], 1))
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999))
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0))