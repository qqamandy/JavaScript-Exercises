// Write a function called "table" which takes an input n, and prints out n x 1 to n x 9

// table(3);
// 3 x 1 = 3
// 3 x 2 = 6
// ...
// 3 x 9 = 27

function table(n){
    for(let i = 1; i <=9; i++){
        console.log(n + 'x' + i + '=' + n*i)
    }
}

table(3)