function navFunction() {
    let nav = document.getElementById("myNav");
    if (nav.className === "navbar") {
      nav.className += " responsive";
    } else {
      nav.className = "navbar";
    }
  }
let btnMyNav = document.getElementById("myNav");

let btns = btnMyNav.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}