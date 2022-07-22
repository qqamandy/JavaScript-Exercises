// Write a function called "stars" which prints out layers of stars in the following pattern:

// stars(1);
// // *
// stars(4);
// // *
// // **
// // ***
// // ****

function stars(n){
    let result = ''
    for(let i = 0; i < n; i++){
        result += '*'
        console.log(result)
    }
}

stars(1)
stars(4)