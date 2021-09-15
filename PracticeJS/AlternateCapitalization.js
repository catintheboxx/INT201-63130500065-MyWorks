/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.
*/
function capitalize(s) {
    let arr = s.split('')
    let arr2 = s.split('')
    let arrNew = []
    let word = arr
    let word2 = arr2
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            word[i] = arr[i].toString().toUpperCase()
        }
        if (i % 2 === 1) {
            word2[i] = arr[i].toString().toUpperCase()
        }
    }
    arrNew[0] = word.join('')
    arrNew[1] = word2.join('')
    return arrNew;
};