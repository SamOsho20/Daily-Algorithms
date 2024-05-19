// SIMPLE ALGO CHALLENGES IN JS

// 1.

var x = [1,3,5,8]

var temp = x[x.length - 1]

x[x.length-1 ] = x[0]

x[0] = temp

console.log(x)

// output --> [8,3,5,1]


// 2.

var x = [1,3,5,8]

x.pop()
x.push(7)
console.log(x)

// output ---> [1,3,5,7]

// 3.

var x = [1,3,5]

x[0] = 15

x[3] = 77

console.log(x)

// output ---> [1,3,5,77]