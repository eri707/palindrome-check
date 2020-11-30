let string1 = 'racecar';
let string2 = 'household';
// palindrome check function
function checkIfPalindome(str) {
    return str == str.split('').reverse().join('');
};
// log results
checkIfPalindome(string1);
console.log(checkIfPalindome(string1));
checkIfPalindome(string2);
console.log(checkIfPalindome(string2));