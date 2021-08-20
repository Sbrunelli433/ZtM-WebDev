// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function(){
//     console.log("CLICK!!");
// });
// button.addEventListener("mouseenter", function(){
//     console.log("MOUSE ENTER!!");
// });
// button.addEventListener("mouseleave", function(){
//     console.log("MOUSE LEAVE!!");
// });

var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
};

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
}

function addListAfterClick() {
    // console.log("button test working");
    if(inputLength() > 0 ) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    } 
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

