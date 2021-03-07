const nav = document.querySelector(".mobile-nav");
const navList = document.querySelector(".nav-list")
const openBtn = document.querySelector(".mobile-menu");
const closeBtn = document.getElementById("close");

openBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    navList.classList.toggle("active")
    openBtn.style.display = "none";
});

closeBtn.addEventListener('click', () => {
    nav.classList.toggle("active");
    navList.classList.toggle("active")
    openBtn.style.display = "block";
})