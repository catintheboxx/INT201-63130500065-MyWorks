/*
Digital root is the recursive sum of all the digits in a number. Given n, 
take the sum of the digits of n. If that value has more than one digit, 
continue reducing in this way until a single-digit number is produced. 
The input will be a non-negative integer.
*/

function digital_root(n) {
    let digit = n;
    while (digit >= 10) {
        var num = digit.toString().split('');
        let digitRoot = 0;
        for (let i = 0; i < num.length; i++) {
            digitRoot += parseInt(num[i]);
        }
        digit = digitRoot;
    }
    return digit;
}