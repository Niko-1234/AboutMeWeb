const burger = document.querySelector(".burger")
const menubar = document.querySelector(".menubar")

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menubar.classList.toggle("active");
})

document.querySelectorAll(".menubar a").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active");
    menubar.classList.remove("active")
}))