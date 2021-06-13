// Image Slider
$(document).ready(function(){
    $('.next').on('click', function(){
      var currentImg = $('.active');
      var nextImg = currentImg.next();
  
      if(nextImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);
      }
    });
  
    $('.prev').on('click', function(){
      var currentImg = $('.active');
      var prevImg = currentImg.prev();
  
      if(prevImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);
      }
    });
  });

// FORM
const form = document.getElementById('form');
const userError = document.getElementById('error-username');
const emailError = document.getElementById('error-email');
const passwordError = document.getElementById('error-password');
const password2Error = document.getElementById('error-password2');
const regionError = document.getElementById('error-region');
const dateError = document.getElementById('error-date');

function validateForm(e) {
	var isValid = true
	// Username
    if(form['username'].value === ""){
        userError.innerText = "Username cannot be blank";
        isValid = false
		setErrorFor(form['username']);
        e.preventDefault();
    }
	else{
		setSuccessFor(form['username']);
        userError.innerText = "";
        e.preventDefault();
	}

	// Email
    if(isEmail(form['email'].value) === false ){
        emailError.innerText = "Email cannot be blank";
        isValid = false;
		setErrorFor(form['email']);
        e.preventDefault();
    }
	else{
		emailError.innerText = "";
		setSuccessFor(form['email']);
	}

	// Password
    if(form['password'].value === ""){
        passwordError.innerText = "Password cannot be blank";
        isValid = false;
		setErrorFor(form['password']);
        e.preventDefault();
    }
	else if(form['password'].value.length < 8){
        passwordError.innerText = "Password must be at least 8 characters";
        isValid = false;
		setErrorFor(form['password']);
        e.preventDefault();
	}
	else{
		passwordError.innerText = "";
		setSuccessFor(form['password']);
	}

	// Password2
	if(form['password2'].value === ""){
        password2Error.innerText = "Password cannot be blank";
        isValid = false;
		setErrorFor(form['password2']);
        e.preventDefault();
    }
	else if(!(form['password2'].value === form['password'].value)){
        password2Error.innerText = "Password does not match";
        isValid = false;
		setErrorFor(form['password2']);
        e.preventDefault();
	}
	else{
		password2Error.innerText = "";
		setSuccessFor(form['password2']);
	}

	// Region
    if(form['region'].value === "opt0"){
        regionError.innerText = "Region not selected";
        isValid = false;
		setErrorFor(form['region']);
        e.preventDefault();
    }
	else{
		regionError.innerText = "";
		setSuccessFor(form['region']);
	}

	// Birthdate
	var dateSample = form['date'].value;

	if(dateSample === ""){
        dateError.innerText = "Date of birth cannot be blank";
        isValid = false;
		setErrorFor(form['date']);
        e.preventDefault();
    }
	if(dateSample.length < 10){
		dateError.innerText = "Date of birth is not within format";
        isValid = false;
		setErrorFor(form['date']);
        e.preventDefault();
    }
	else if(dateSample.length > 10){
		dateError.innerText = "Date of birth is not within format";
        isValid = false;
		setErrorFor(form['date']);
        e.preventDefault();
    }
	else if(!(dateSample === "")){
		var flag = true;
		var i;
		for (i = 0; i < dateSample.length; i++) {
			if(isNaN(parseInt(dateSample[i])) && (i === 0 || i === 1 || i === 3 || i === 4 || i === 6 || i === 7 || i === 8 || i === 9)){
				flag = false;
			}
			if(dateSample[i] === "/" && (i === 2 || i == 5)) {
				flag = false;
			}		
		}
		if(flag){
			dateError.innerText = "Date of birth is not within format";
			isValid = false;
			setErrorFor(form['date']);
			e.preventDefault();
		}
		const valDate = validateDate(dateSample);
		if(valDate){
			dateError.innerText = "";
			setSuccessFor(form['date']);
			e.preventDefault();
		}
		else{
			dateError.innerText = "You must be 18 to proceed";
			isValid = false;
			setErrorFor(form['date']);
			e.preventDefault();
		}
	}


}

// if(isValid == true){
	//     var confirmed = confirm("Ok?")
    //     // if(confirmed == "")
    // }	


function validateDate(datestring){
	var today = new Date();
	var birthDate = new Date(datestring);
	var age = today.getFullYear() - birthDate.getFullYear();
	var m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	if(age <18) return false;
	else return true;
}

function setErrorFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	// small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	if (email.length <= 2) {
		return false;
	}
	//If whether email has @ character.
	if (email.indexOf("@") == -1) {
		return false;
	}

	var parts = email.split("@");
	var dot = parts[1].indexOf(".");
	var len = parts[1].length;
	var dotSplits = parts[1].split(".");
	var dotCount = dotSplits.length - 1;


	//Check whether Dot is present, and that too minimum 1 character after @.
	if (dot == -1 || dot < 2 || dotCount > 2) {
		return false;
	}

	//Check whether Dot is not the last character and dots are not repeated.
	for (var i = 0; i < dotSplits.length; i++) {
		if (dotSplits[i].length == 0) {
			return false;
		}
	}
	return true;
}













