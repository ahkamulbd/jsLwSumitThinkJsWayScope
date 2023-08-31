/* ========= Child takes a reference from parent========= */

/* Example 1 */

// var num1 = 2;
// var num2 = 3;

// var sum = function () {
//     return num1 + num2;
// };
// console.dir(sum);

/* Example 2 */

// var num1 = 2;

// var sum = function () {
//     var num2 = 3;
//     return function () {
//         return num1 + num2;
//     }
// }
// var myFunc = sum();
// console.dir(myFunc);

/* Example 3 */

function bankAccount(initialBalance) {
    var balance = initialBalance;
    return function () {
        return balance;
    };
};
var account = bankAccount(100000);
console.log(account());