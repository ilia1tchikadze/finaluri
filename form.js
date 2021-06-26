function printError(elementId, hintMsg){
    document.getElementById(elementId).innerHTML = hintMsg;
}

function validateForm(event){
    event.preventDafualt();
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;    
    var gender = document.contactForm.gender.value;
    var password = document.contactForm.password.value;
    var Cpassword = document.contactForm.Cpassword.value;


    var nameErr = emailErr = mobileErr = genderErr = passwordErr = CpasswordErr = true;

    if(name == ""){
        printError("nameErr", "Please enter your name");

    }else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
            
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        
        if(mobile.length < 9) {
            printError("mobileErr", "Please enter a valid 9 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    if(password == ""){
        printError("passwordErr", "Please enter your password")
    }else if(password != Cpassword){
        printError("passwordErr", "Password didn't match, Try again")
    }else if(password.length < 5 && password.capitalize){
        printError("passwordErr", "Please Enter Valid Password")
    }
    
    else{
        printError("passwordErr", "");
        genderErr = false;
        
        
    }

    // if(Cpassword == ""){
    //     printError("CpasswordErr", "Please enter your password")
    // }else{
    //     printError("CpasswordErr", "");
    //     Cpassword= false
    // }

    if((nameErr || emailErr || mobileErr  || genderErr) == true) {
        return false;
     } 
}
