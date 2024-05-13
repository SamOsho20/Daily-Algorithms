/**
 * @param {string} s
 * @return {number}
 */

//  GLOBAL SCOPE VARIABLE ACCESIBLE THROUGHOUT OUT ENTIRE DOCUMENT 
 const romanKey = {

// HERE WE KEEP TRACK OF WHAT EACH LETETR IN A ROMAN NUMERAL MEANS SO OUR LOOP CAN REFRENCE 
    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 500,
    M : 1000

 }
var romanToInt = function(s) {

    // THIS VARIABLE KEEPS TRACK OF THE VALUE OF THE ROMAN NUMERAL PASSED 
    let romanInt = 0

    // LOOP TAHT STARTS AT 0 AND ENDS AT s length 
    for(let I = 0; I <s.length; I++){
        if (s[I] === 'I' && s[I + 1] === "V"){
            romanInt += 4
            I++}
        else if (s[I] === 'I' && s[I + 1] === 'X')
            {romanInt +=9
            I++}

        else if (s[I] === 'X' && s[I + 1] === 'L'){
            romanInt+=40
            I++}

        else if (s[I] === 'X' && s[I + 1] === 'C'){ 
            romanInt +=90
            I++}
        else if (s[I] === 'C' && s[I + 1] === 'D'){
            romanInt += 400
            I++}

        else if (s[I] === 'C' && s[I + 1]=== 'M'){
            romanInt += 900
            I++}
    
        // IF EVERTHING ABOVE IS FALSE DO THIS
        else {romanInt += romanKey[s[I]]
    
        }

}
        // RETURN THIS SO WE CAN KEEP TRACK OF IT 
        return romanInt

 
    
};

console.log(romanToInt('DCXXI'))