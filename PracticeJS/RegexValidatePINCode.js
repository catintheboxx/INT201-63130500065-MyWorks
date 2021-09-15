/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
Examples
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/
function validatePIN(pin) {
    let newPin = pin.replace(/([a-z\W\D])/ig, '0000')
    if (newPin.length == 4 || newPin.length == 6) return true
    return false
}