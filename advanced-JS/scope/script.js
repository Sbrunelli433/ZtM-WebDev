//scope

// Root Scope (window)
var fun = 5;

function funFunction() {
    //child scope
    var fun = "hellooo";
    console.log(1, fun);
}

function funerFunction() {
    //child scope
    var fun = "byeeee";
    console.log(2, fun);
}

function funestFunction() {
    //child scope
    fun = "AHHH";
    console.log(3, fun);
}