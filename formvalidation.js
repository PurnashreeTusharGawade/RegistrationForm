
function formValidator(){
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var pass=document.getElementById("pass");
    var addr=document.getElementById("addr");
    var mobileno=document.getElementById("mobileno");

    if(notEmpty(firstName,"can not be empty")){
        if(isAlphabet(firstName,"Please enter only letters for your first name")){
            if(lengthRestriction(firstName,6)){
                if(isAlphabet(lastName,"Please enter only letters for your last name")){
                    if(emailValidator(email,"Please enter valid email address")){
                        if(lengthRestriction(pass,6)){
                            if(isAlphaNumeric(pass,"Please enter numbers and letters only for password")){
                                if(notEmpty(addr,"Please enter address")){
                                    if(isNumeric(mobileno,"Please enter a valid mobile no")){
                                        if(lengthRestriction1(mobileno,10,10)){
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false;
}
function isAlphabet(elem,helperMsg){
    var alphaExp=/^[a-zA-Z]+$/
    if (elem.value.match(alphaExp)){
        return true;
    }
    else{
        alert(helperMsg);
        elem.focus();
        return false;
    }
}
function isNumeric(elem,helperMsg){
    var numExp=/^[0-9]+$/
    if (elem.value.match(numExp)){
        return true;
    }
    else{
        alert(helperMsg);
        elem.focus();
        return false;
    }
}
function isAlphaNumeric(elem,helperMsg){
    var alphanumExp=/^[a-zA-Z0-9]+$/
    if (elem.value.match(alphanumExp)){
        return true;
    }
    else{
        alert(helperMsg);
        elem.focus();
        return false;
    }
}
function notEmpty(elem,helperMsg){
    if(elem.value.length==0){
        alert(helperMsg);
        elem.focus();
        return false;
    }
    return true;
}
function lengthRestriction(elem,min){
    var uInput=elem.value;
    if(uInput.length>=min){
        return true;
    }
    else{
        alert("Please enter minimum "+min+" characters");
        elem.focus();
        return false;
    }
}
function lengthRestriction1(elem,min,max){
    var uInput=elem.value;
    if(uInput.length>=min && uInput.length<=max){
        return true;
    }
    else{
        alert("Please enter 10 numbers only");
        elem.focus();
        return false;
    }
}
function emailValidator(elem,helperMsg){
    var emailexp=/^[a-zA-Z0-9\.\+\-\_]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,4}$/;
    if(elem.value.match(emailexp)){
        return true;
    }
    else{
        alert(helperMsg);
        elem.focus();
        return false;
    }
}
