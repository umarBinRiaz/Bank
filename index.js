console.log("Welcome To UBR Bank");

var User = [];
var Password = [];
var Balance = [];
var Statement = [];

var currentUserIndex = -1;
var app = true;

function signup() {

    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    if (email === "") {

        alert("Email Cannot Be Empty");
        return;

    }

    if (!isNaN(email)) {

        alert("Email Cannot Be Only Numbers");
        return;

    }

    if (pass === "") {

        alert("Password Cannot Be Empty");
        return;

    }

    if (User.includes(email)) {

        alert("User Already Exists");
        return;

    }

    User.push(email);
    Password.push(pass);
    Balance.push(0);
    Statement.push([]);

    alert("Signup Successful");

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

}

