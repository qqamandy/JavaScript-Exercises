// Write a function called "findMin" which takes an array as input, and returns the minimum element in the input array.

// findMin([1, 2, 5, 6, 99, 4, 5]); // returns 1
// findMin([]); // returns undefined
// findMin([1, 6, 0, 33, 44, 88, -10]); // returns -10

function findMin(arr){
    if(arr.length==0){
        return undefined
    }

    let result=99999999
    for(let i = 0; i < arr.length; i++){
        if(arr[i]<result){
            result = arr[i]
        }
    }
    return result
}

console.log(findMin([1, 2, 5, 6, 99, 4, 5]))
console.log(findMin([]))
console.log(findMin([1, 6, 0, 33, 44, 88, -10]))