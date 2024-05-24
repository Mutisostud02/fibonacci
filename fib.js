// The Fibonacci Sequence, is a numerical sequence where each number 
// is the sum of the two numbers before it. 
// Eg. 0, 1, 1, 2, 3, 5, 8, 13 are the first 
// eight digits in the sequence.
function fibs(n) {
     const arr = [0, 1];
     for(let i = 2; arr.length <= n; i++){
     arr[i] = arr[i - 1] + arr[i - 2];
     }
     return arr[8];     
 }

 function fibsRec(n) {
    if (n < 2 ){
        return n;
    } else {
        return fibsRec(n - 1) + fibsRec(n - 2);
    }
 }
