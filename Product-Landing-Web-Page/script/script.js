function validateForm() {
    var name = document.form.name.value;
    var email = document.form.email.value;
    var mobile = document.form.mobile.value;

    var nampat = /[A-Za-z]/g;
    if(nampat.test(name)==false){
        alert("Name not acceptable");
    }
    
    var numpat = /[0-9]/g;
    if(numpat.test(mobile)==false){
        alert("Enter digits in mobile field")
    }
    else if(mobile.length!=10){
        alert("Mobile number should be of 10 digits")
    }

    var mailpat=/\S+@\S+\.\S+/;
    if(mailpat.test(email)==false){
        alert("Enter valid email address");
    }
};
