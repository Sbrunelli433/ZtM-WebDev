var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy!"
];

////add exclaimation point to end of each item on todo list
// for (var i = 0; i < todos.length; i++) {
//     todos[i] = todos[i] + "!";
// }

//// remove items from list
// var todosLength = todos.length;
// for (var i = 0; i < todosLength; i++) {
//     todos.pop();
// }

// //counter practice
// //count up
// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++;
// }
// //count down
// var counterTwo = 10;
// while (counterTwo > 0) {
//     console.log("while", counterTwo);
//     counterTwo--;
// }

// //do while loop practice
// var counterThree = 10;
// do {
//     console.log("do while", counterThree);
//     counterThree--;
// } while (counterThree >0);

//for each loop practice
// var todosLength = todos.length;
// for (var i = 0; i < todosLength; i++) {
//     console.log(i);
// }

//forEach is looking for an "argument" (the function) that is 'tell me what to do with it'
//the action is represented as a function

// todos.forEach(function(todo, i) {
//     console.log(todo, i);
// })

function logTodos(todo, i) {
    console.log(todo, i);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);