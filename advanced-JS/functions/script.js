// //vanilla JS
// function first() {
//     var greet = 'Hi';
//     function second() {
//         alert(greet);
//     }
//     return second;
// }
// var newFunc = first() ;
// newFunc();

//modern JS with closures
const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}
const newFunction = first() ;
newFunction();

//closures - a function ran. the function executed. it's never going to execute again.
// but it's going to remember there are references to those variables
//so the child scope always has access to the parent scope.

//currying
// the process of converting a function that takes multiple arguments 
// into a function that takes them one at a time
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);
curriedMultiply(3)(4);

//compose
//the act of putting two functions together to form a third function where the output of one function is the input of the other

const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num +1;
compose(sum, sum)(5);

// const compose = (f, g) => (a) => f(g(a));
// const compose = (sum, sum) => (5) => sum(sum(5));
// const compose = (f, g) => (a) => f(g(5));
// const compose = (f, g) => (a) => f(6);
// const compose = (f, g) => (a) => f(7);


// Avoiding Side Effects, functional purity: 
// Deterministic: no matter what, if my inputs in the parameters will always return the same value



