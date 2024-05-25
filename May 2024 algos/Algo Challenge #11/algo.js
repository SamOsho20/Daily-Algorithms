// May 24

// Simple algo challenges  with JS --- Functions


// 1.

function a (b,c){
    return b * c
}

console.log(a(3,5))
// output -----> 15


// 2.

function a(b,c){
    return b + c
}
console.log(a(1,a(2,3)))

// OUTPUT ---> 6

// 3.
for (var i = 1; 1<=20; i++){

    if (i > 5){
        break
    }

    else{
        console.log('hello')
    }
}
// OUTPUT ----> hello,hello,hello,hello,hello