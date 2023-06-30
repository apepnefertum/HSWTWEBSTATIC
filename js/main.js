function readMore(id,myBtn) {
  var dots = document.getElementById(id);
  var btnText = document.getElementById(myBtn);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read less"; 
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read more"; 
    }
  }

// Inside main.js
function sayHello() {
    alert('Hello, World!');
}

