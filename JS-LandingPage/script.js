var database = [
    {
        username: "steve",
        password: "super1",
    },
    {
        username: "sally",
        password: "123",
    },
        {
        username: "ingrid",
        password: "777",
    },
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "so tired, need coffee",
    },
    {
        username: "Tim",
        timeline: "this is Tim's timeline",
    },
    {
        username: "Mitch",
        timeline: "Go Bucks",
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
        } 
    }
    return false;
}


function signIn(username, password) {
    if(isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("sorry, wrong username and password");
    }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");
signIn(userNamePrompt, passwordPrompt);
