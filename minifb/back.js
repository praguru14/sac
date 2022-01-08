var database=[
    {
        username:"Sachin",
        password:"itssecret"
    }
];
var newsfeed=[
    {
        username:"prafull",
        timeline:"hey what's up"
    },
    {
        username:"Andrei",
        timeline:"JS is awesome"
    }
];
var usernamepmt=prompt("What is your username?");
var passwordpmt=prompt("What is your password?");
function signin(user,pass)
{
    if(user===database[0].username && pass===database[0].password)
    {
        console.log(newsfeed);
    }
    else
    {
        alert("Sorry, incorrect username or password");
    }
}
signin(usernamepmt,passwordpmt);