function validateSignup() {
    let name = document.getElementById("userName").value.trim();
    let email = document.getElementById("userEmail").value.trim();
    let pass = document.getElementById("userPassword").value.trim();
    let confirm = document.getElementById("confirmPassword").value.trim();

    let msg = document.getElementById("signupMessage");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || pass === "" || confirm === "") {
        msg.innerHTML = "All fields must be filled!";
        msg.style.color = "red";
        return false;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
        msg.innerHTML = "Name can contain only alphabets!";
        msg.style.color = "red";
        return false;
    }

    if (!emailPattern.test(email)) {
        msg.innerHTML = "Enter valid email!";
        msg.style.color = "red";
        return false;
    }

    if (pass.length < 6) {
        msg.innerHTML = "Password must be at least 6 characters!";
        msg.style.color = "red";
        return false;
    }

    if (pass !== confirm) {
        msg.innerHTML = "Passwords do not match!";
        msg.style.color = "red";
        return false;
    }

    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", pass);

    alert("Account Created Successfully! Login Now");

    setTimeout(() => {
        window.location.href = "index.html";
    }, 500);

    return false;
}




function validateLogin() {
    let enteredEmail = document.getElementById("loginEmail").value.trim();
    let enteredPass = document.getElementById("loginPassword").value.trim();

    let savedEmail = localStorage.getItem("registeredEmail");
    let savedPass = localStorage.getItem("registeredPassword");

    let msg = document.getElementById("loginMessage");

    if (enteredEmail === "" || enteredPass === "") {
        msg.innerHTML = "Email and password required!";
        msg.style.color = "red";
        return false;
    }

    if (enteredEmail !== savedEmail) {
        msg.innerHTML = "This email is not registered!";
        msg.style.color = "red";
        return false;
    }

    if (enteredPass !== savedPass) {
        msg.innerHTML = "Incorrect Password!";
        msg.style.color = "red";
        return false;
    }

    msg.style.color = "green";
    msg.innerHTML = "Login Successful!";

    localStorage.setItem("loggedInUser", enteredEmail);

    setTimeout(() => {
        window.location.href = "home.html"; 
    }, 500);

    return false;
}



function validateForm() {
    let name = document.getElementById("nameInput").value.trim();
    let email = document.getElementById("emailInput").value.trim();
    let message = document.getElementById("messageInput").value.trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        alert("Please enter your name!");
        return false;
    }

    if (email === "") {
        alert("Please enter your email!");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Enter valid email!");
        return false;
    }

    if (message === "") {
        alert("Please write a message!");
        return false;
    }

    alert("Your Review is Submitted!");
    return true;
}
