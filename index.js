var info = prompt(`What Do You Want To do : 
       1.Login
       2.Signup
        3.Exit`)
        if (info === "1") {
            var User = ["abc@def.com", "abc@deg.com", "abc@deh.com"];
            var Password = ["1234", "5678", "4321"];
            
            var UsernameInput = prompt("Write Your User Name here");
            var UserPasswordInput = prompt("Write Your Password here");
            
            var index = User.indexOf(UsernameInput);
            
            if (index !== -1 && Password[index] === UserPasswordInput) {
                var choice = prompt("What do you want to do? withdraw, deposit, check balance ");
                
                var balance = 10000.43;

        if (choice == "withdraw") {
            var amount = +(prompt("Enter amount to withdraw:"));

            balance = balance - amount;

            console.log("Withdraw Successful");
            console.log("Remaining Balance: " + balance);

        } else if (choice == "deposit") {
            var amount = Number(prompt("Enter amount to deposit:"));

            balance = balance + amount;

            console.log("Deposit Successful");
            console.log("New Balance: " + balance);

        } else if (choice == "check balance") {
            console.log("Your Current Balance: " + balance);

        } else {
            console.log("Invalid Choice");
        }
    } else {
        console.log("Invalid Username or Password");
    }
}

