
// Author: MD Risfat
// Website: https://devtech365.com

document.addEventListener('keydown', function() {
    if (event.keyCode == 123) {
      alert("Sorry...For Security Reason, You Can not Do This!");
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      alert("Sorry...For Security Reason, Debug Mode is Disabled!");
       event.preventDefault();
      return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
      alert("Sorry...For Security Reason, Debug Mode is Disabled!");
      return false;
    }
  }, false);
  
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      alert("Sorry...For Security Reason, Right Click is Disabled!");
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("Sorry...You Can not Do This!");
      window.event.returnValue = false;
    });
  }
