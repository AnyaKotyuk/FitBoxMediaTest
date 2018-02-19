document.addEventListener("DOMContentLoaded", function(){
    var login = document.getElementById("login");

    login.addEventListener("input", function (event) {
        if (login.validity.patternMismatch) {
            login.setCustomValidity("Login field can't contain special characters!");
            console.log('login', login.validity.typeMismatch);
        } else {
            login.setCustomValidity("");
        }
    });
})