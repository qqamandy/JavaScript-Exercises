// Write a function called "stars" that takes an integer as input, and returns the concatenation of n continuous "*".

// stars(3); // ***
// stars(10); // **********

function stars(n){
    let result = ''
    for(let i = 0; i < n; i++){
        result+='*'
    }
    console.log(result)
}

stars(3)
stars(10)