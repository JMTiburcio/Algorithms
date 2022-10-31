/*
Write a function that returns the factorial of 
the provided integer(n). E.g
    factorial(5) // should return 120
*/


function factorial(n) {
    if(n === 0) { return 1 }
    
    return n * factorial(n - 1)
}

console.log(factorial(5))