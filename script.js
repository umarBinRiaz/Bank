console.log("Welcome To UBR Bank");

var User = [];
var Password = [];
var Balance = [];
var Statement = [];

var currentUserIndex = -1;
var app = true;
//  =========================================================================================== 

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

//  =========================================================================================== 

function login() {

    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    var index = User.indexOf(email);

    if (index !== -1 && Password[index] === pass) {

        currentUserIndex = index;

        alert("Login Successful");

        document.getElementById("auth").style.display = "none";
        document.getElementById("dashboard").style.display = "block";

    } else {

        alert("Invalid Email Or Password");

    }

}
//  =========================================================================================== 

function logout() {

    currentUserIndex = -1;

    document.getElementById("auth").style.display = "block";
    document.getElementById("dashboard").style.display = "none";

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("receiver").value = "";

    alert("Logged Out Successfully");

}
//  =========================================================================================== 

function exitApp() {

    app = false;

    alert("Thank You For Using UBR Bank");

    document.getElementById("auth").style.display = "none";

}
//  =========================================================================================== 

function deposit() {

    var amount = Number(document.getElementById("amount").value);

    if (amount <= 0) {

        alert("Enter Valid Amount");
        return;

    }

    Balance[currentUserIndex] += amount;

    Statement[currentUserIndex].push("Deposited : " + amount);

    alert("Deposit Successful");

    console.log("Current Balance : " + Balance[currentUserIndex]);

    document.getElementById("amount").value = "";

}
//  =========================================================================================== 

function withdraw() {

    var amount = Number(document.getElementById("amount").value);

    if (amount <= 0) {

        alert("Enter Valid Amount");
        return;

    }

    if (amount > Balance[currentUserIndex]) {

        alert("Insufficient Balance");
        return;

    }

    Balance[currentUserIndex] -= amount;

    Statement[currentUserIndex].push("Withdraw : " + amount);

    alert("Withdraw Successful");

    console.log("Remaining Balance : " + Balance[currentUserIndex]);

    document.getElementById("amount").value = "";

}
//  =========================================================================================== 

function checkBalance() {

    alert("Current Balance : " + Balance[currentUserIndex]);

    console.log("Current Balance : " + Balance[currentUserIndex]);

}
//  =========================================================================================== 


function transferMoney() {

    var receiver = document.getElementById("receiver").value;
    var amount = Number(document.getElementById("amount").value);

    var receiverIndex = User.indexOf(receiver);

    if (receiver === "") {

        alert("Enter Receiver Email");
        return;

    }

    if (receiverIndex === -1) {

        alert("Receiver Not Found");
        return;

    }

    if (receiverIndex === currentUserIndex) {

        alert("You Cannot Transfer Money To Yourself");
        return;

    }

    if (amount <= 0) {

        alert("Enter Valid Amount");
        return;

    }

    if (amount > Balance[currentUserIndex]) {

        alert("Insufficient Balance");
        return;

    }

    Balance[currentUserIndex] -= amount;
    Balance[receiverIndex] += amount;

    Statement[currentUserIndex].push(
        "Transferred " + amount + " To " + User[receiverIndex]
    );

    Statement[receiverIndex].push(
        "Received " + amount + " From " + User[currentUserIndex]
    );

    alert("Transfer Successful");

    console.log("Transferred To : " + User[receiverIndex]);
    console.log("Current Balance : " + Balance[currentUserIndex]);

    document.getElementById("receiver").value = "";
    document.getElementById("amount").value = "";

}

//  =========================================================================================== 

function bankStatement() {

    var box = document.getElementById("statementBox");
    var list = document.getElementById("statementList");

    list.innerHTML = "";

    box.style.display = "block";

    if (Statement[currentUserIndex].length === 0) {

        list.innerHTML =
            "<li class='list-group-item text-center'>No Transaction History</li>";

        return;
    }

    for (var i = 0; i < Statement[currentUserIndex].length; i++) {

        list.innerHTML +=
            "<li class='list-group-item'>" +
            (i + 1) +
            ". " +
            Statement[currentUserIndex][i] +
            "</li>";

    }

}
