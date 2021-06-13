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

  const form = document.getElementById('form');
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const password2 = document.getElementById('password2');
  
  form.addEventListener('submit', e => {
    e.preventDefault();
    
    checkInputs();
  });
  
  function checkInputs() {
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if(usernameValue === '') {
      setErrorFor(username, 'Username cannot be blank');
    } else {
      setSuccessFor(username);
    }
    
    if(emailValue === '') {
      setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Not a valid email');
    } else {
      setSuccessFor(email);
    }
    
    if(passwordValue === '') {
      setErrorFor(password, 'Password cannot be blank');
    } else {
      setSuccessFor(password);
    }
    
    if(password2Value === '') {
      setErrorFor(password2, 'Password cannot be blank');
    } else if(passwordValue !== password2Value) {
      setErrorFor(password2, 'Passwords does not match');
    } else{
      setSuccessFor(password2);
    }
  }
  
  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  