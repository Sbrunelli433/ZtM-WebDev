var database = [
    {
        username: "steve",
        password: "super1",
    }
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

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");
function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and or password");
    }
}
signIn(userNamePrompt, passwordPrompt);
