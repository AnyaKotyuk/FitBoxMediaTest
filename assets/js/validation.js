jQuery(document).ready(function(){

    loginValidate();
    passwordValidate();

    jQuery('#login-form').submit(function(){
        jQuery('.login-container .modal-body').fadeOut(500, function(){
            jQuery(this).remove();
            jQuery('.login-container > div').css('background-color', '#e8ffcd');
        });
        jQuery('.login-container .modal-heading').html('<h1>You’re welcome!</h1>');
    });
});



// change validation error message for login field
function loginValidate() {
    var login = document.getElementById('login');
    login.addEventListener("input", function (event) {
        if (login.validity.patternMismatch) {
            login.setCustomValidity("Login field can't contain special characters!");
        } else {
            login.setCustomValidity("");
        }
    });
}

// change validation error message for password field
function passwordValidate() {
    var password = document.getElementById('password');
    password.addEventListener("input", function (event) {
        if (password.validity.patternMismatch) {
            password.setCustomValidity("Password field must contain at least 1 upper case, 1 lower case, numeric, and special character!");
        } else {
            password.setCustomValidity("");
        }
    });
}
