const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");
const submitError = document.getElementById("submitError");

function validateName(){
    const name = document.getElementById("name").value;

    if(name.length == 0){
        nameError.innerHTML = "Full name is required!";
        return false;
    }
    if(!name.match(/^[A-Za-z]+(?:\s{1}[A-Za-z]+){1,2}$/)){
        nameError.innerHTML = "Your full name is required!";
        return false;
    }

    nameError.innerHTML = "<img src='images/valid.png'>" + " <p>Perfect!</p>";
    return true;
}

function validateEmail(){
    const email = document.getElementById("email").value;

    if(email.length == 0){
        emailError.innerHTML = "Email address is required!";
        return false;
    }
    if(!email.match(/^[A-Za-z0-9]+(?:\.[A-Za-z0-9]+)*@[A-Za-z]+[.][A-Za-z]{2,5}(?:\.[A-Za-z]{2})?$/)){
        emailError.innerHTML = "Enter your valid email address!";
        return false;
    }

    emailError.innerHTML = "<img src='images/valid.png'>" + " <p>Perfect!</p>";
    return true;
}

function validatePhone(){
    const phone = document.getElementById("phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone number is required!";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Phone number should be 10 digits only!";
        return false;
    }

    phoneError.innerHTML = "<img src='images/valid.png'>" + " <p>Perfect!</p>";
    return true;
}

function validateMessage(){
    const message = document.getElementById("message").value;
    const minChars = 30;
    const charLeft = minChars - message.length;

    if(charLeft > 0){
        messageError.innerHTML = "Min. " + charLeft + " characters are needed!"
        return false;
    }
    if(message.length > 300){
        messageError.innerHTML = "Max. 300 characters!";
        return false;
    }

    messageError.innerHTML = "<img src='images/valid.png'>" + " <p>Perfect!</p>";
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePhone() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix all errors first!";

        setTimeout( () => {
            submitError.style.display = "none";
        }, 5000)
        return false;
    }
}




