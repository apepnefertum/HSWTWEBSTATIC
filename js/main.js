function readMore() {
    var dots = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read less"; 
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read more"; 
    }
  }