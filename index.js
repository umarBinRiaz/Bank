console.log("Welcome To UBR Bank");

var User = ["abc", "def", "ghi"];
var Password = ["1234", "5678", "4321"];
var Balance = [10000.43, 5000.21, 8000.04];

var app = true;

while (app) {

    var currentUserIndex = -1;

    var info = prompt(`
1. Login
2. Signup
3. Exit
`);

    if (info === "1") {

        var email = prompt("Enter Email:");
        var pass = prompt("Enter Password:");

        var index = User.indexOf(email);

        if (index !== -1 && Password[index] === pass) {

            currentUserIndex = index;
            console.log("Login Successful");

        } else {

            console.log("Invalid Email or Password");
            continue;

        }

    } else if (info === "2") {

        var newUser = prompt("Enter New Email:");

        if (User.includes(newUser)) {

            console.log("User Already Exists");
            continue;

        }

        var newPass = prompt("Enter New Password:");

        User.push(newUser);
        Password.push(newPass);
        Balance.push(0);

        currentUserIndex = User.length - 1;

        console.log("Signup Successful");
        console.log("Logged In Successfully");

    } else if (info === "3") {

        console.log("Thank You For Using UBR Bank");
        app = false;

    } else {

        console.log("Invalid Option");
        continue;

    }

    while (currentUserIndex !== -1) {

        var choice = prompt(`
1. Withdraw
2. Deposit
3. Check Balance
4. Transfer Money
5. Logout
`);

        if (choice === "1") {

            var amount = Number(prompt("Enter Amount:"));

            if (amount > 0 && amount <= Balance[currentUserIndex]) {

                Balance[currentUserIndex] -= amount;

                console.log("Withdraw Successful");
                console.log("Remaining Balance: " + Balance[currentUserIndex]);

            } else {

                console.log("Insufficient Balance");

            }

        } else if (choice === "2") {

            var amount = Number(prompt("Enter Amount:"));

            if (amount > 0) {

                Balance[currentUserIndex] += amount;

                console.log("Deposit Successful");
                console.log("Current Balance: " + Balance[currentUserIndex]);

            } else {

                console.log("Invalid Amount");

            }

        } else if (choice === "3") {

            console.log("Current Balance: " + Balance[currentUserIndex]);

        } else if (choice === "5") {

            console.log("Logged Out Successfully");
            currentUserIndex = -1;

        } else if (choice === "4") {

            var receiver = prompt("Enter Receiver Email:");

            var receiverIndex = User.indexOf(receiver);

            if (receiverIndex === -1) {

                console.log("Receiver Not Found");

            } else if (receiverIndex === currentUserIndex) {

                console.log("You Cannot Transfer Money To Yourself");

            } else {

                var amount = Number(prompt("Enter Amount To Transfer:"));

                if (amount > 0 && amount <= Balance[currentUserIndex]) {

                    Balance[currentUserIndex] -= amount;
                    Balance[receiverIndex] += amount;

                    console.log("Transfer Successful");
                    console.log("Your Current Balance: " + Balance[currentUserIndex]);

                } else {

                    console.log("Insufficient Balance");

                }

            }

        } else {

            console.log("Invalid Choice");

        }
    }
}
