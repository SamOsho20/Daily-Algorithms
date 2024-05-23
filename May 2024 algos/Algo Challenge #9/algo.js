// SIMPLE ALGO CHALLENGES WITH JS

// 1.
var X= 1


for (i = 0; i < -1; i = i+2){

    X= X+ 1;
}

console.log(X)


// 2.

var x = [-1,3,2,7]

for (var i = 0; i < x.length; i++){
    if (x[i] < i){
        x[i] = -10
    }
}

console.log(x)

