//console.log('Addressing JS Scope');

/* ==== Lexical Scope ====== */

function parentFunction() {
    let a = 10;
    function childFunction() {
        let b = 20;
        let sum = a + b;
        //console.log(`Sum = ${sum}`);
    }
    childFunction();
}
parentFunction();

/* ==== var, let & const ====== */

if (true) {
    var varVariable = 'This is var';
}
console.log(varVariable);

if (true) {
    let letVariable = 'This is let';
}
console.log(letVariable);

// N.B. let is block scope, but var is functional scope