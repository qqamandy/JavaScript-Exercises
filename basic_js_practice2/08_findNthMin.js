// Write a function called "findNthMin", which takes an array of integers and another integer n, and returns the nth smallest number in the given array.

// findNthMin([1, 2, 3, 4, 5], 1); // returns 1
// findNthMin([1, 5, 15, 7, 9], 3); // returns 7

function findNthMin(arr,n){
    for(let i = 0; i < arr.length; i++){
        let count = 0
        for(let j = 0; j <arr.length; j++){
            if(arr[j]<arr[i]){
                count++
            }
        }
        if(count == n-1){
            return arr[i]
        }
    }

    
}

console.log(findNthMin([1, 2, 3, 4, 5], 1))
console.log(findNthMin([1, 5, 15, 7, 9], 3))