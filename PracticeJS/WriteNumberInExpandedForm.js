/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
*/
function expandedForm(num) {
    let ans = []
    let anss = []
    let numm = 1
    let arr = num.toString().split('').reverse()
    for (let i = 0; i < arr.length; i++) {
        ans.push(parseInt(arr[i]) * numm)
        numm *= 10
        if (ans[i] != 0) {
            anss.push(ans[i])
        }
    }
    return anss.reverse().join(' + ')
}