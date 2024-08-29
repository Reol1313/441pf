
// set cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; ";
  }
  
  // read cookie
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  // delete cookie
  function eraseCookie(name) {
    document.cookie = name + "=; max-age=0";
  }
  

function junpFun (){
    console.log(getCookie('username'))
    var username = getCookie('username');
    if (username) {
      // Assuming successful login, redirect to the test. html page
      window.location.href = 'courseware.html';
    } else {
      alert('Not logged in yet, please log in first');
      setTimeout(function(){
        window.location.href = 'login.html';
      },500)
    }
  }