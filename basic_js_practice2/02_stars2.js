// Write a function called "stars2" which prints out layers of stars in the following pattern:

// stars2(1);
// // *
// stars2(2);
// // *
// // **
// // *
// stars2(3);
// // *
// // **
// // ***
// // **
// // *
// stars2(4);
// // *
// // **
// // ***
// // ****
// // ***
// // **
// // *

function stars2(n){
    //上半部
    let top = ''
    for(let i = 0; i < n; i++){
        top += '*'
        console.log(top)
    }

    //下半部
    let bottom = ''
    for(let i = n-1; i > 0; i--){
        bottom += '*'
        console.log(bottom)
    }
}

// stars2(1)
stars2(3)
// stars2(6)