// Write a function called "findSmallCount" that takes one array of integers and one integer as input, and returns an integer indicating how many elements in the array is smaller than the input integer.

// findSmallCount([1, 2, 3], 2); // returns 1
// findSmallCount([1, 2, 3, 4, 5], 0); // returns 0

function findSmallCount(arr, n){
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i]<n){
            result.push(arr[i])
        }
    }
    return result.length
}

console.log(findSmallCount([1, 2, 3], 2))
console.log(findSmallCount([1, 2, 3, 4, 5], 0))