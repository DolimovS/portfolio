let navButton = document.querySelector(".nav_button");
let menuIcon = document.querySelector("#menu-icon");
let navLinks=document.querySelector(".nav_links")

navButton.addEventListener("click", function(e) {
    console.log("ishladi");
    e.stopPropagation()
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-x");
    navLinks.style.display=navLinks.style.display==="flex"?"none":"flex";
});

document.body.addEventListener("click", () => {
    navLinks.style.display = "none";
    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-x");
});

navLinks.addEventListener("click", (e) => {
    e.stopPropagation(); 
});