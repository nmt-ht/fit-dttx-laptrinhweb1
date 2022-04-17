function SubmitValidation(){
    var password1 = document.getElementById("psw");
    var password2 = document.getElementById("psw-repeat");
    
    password1.onchange = checkPasswordValidity(password1, password2);
    password2.onchange = checkPasswordValidity(password1, password2);
}

function checkPasswordValidity(password1, password2){
    if(password1.value != password2.value){
        password2.setCustomValidity('Password must match.');
    }
    else{
        password2.setCustomValidity('');
    }
}