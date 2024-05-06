/**
 * @param {string} s
 * @return {number}
 */

//  GLOBAL SCOPE VARIABLE ACCESIBLE THROUGHOUT OUT ENTIRE DOCUMENT 
const romanKey = {

    I : 1,
    V : 5,
    X : 10,
    L : 50,
    C : 100,
    D : 100,
    M : 1000
 }
var romanToInt = function(s) {
    let romanInt = 0

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

        else if (s[I] === 'C' && s[I]=== 'M'){
            romanInt += 900
            I++}
    
        else {romanInt += romanKey[s[I]]
    
        }

    }
    return romanInt

    // GIVEN A ROMAN NUMERAL 
    // CONERT THAT NUMERAL INTO AN INTEGER 
    
};

console.log(romanToInt('III'))