const menuIcon = document.getElementById("menu-toggle");
const menuOptions = document.getElementById("menu-options");

menuIcon.addEventListener("click", () => {
  menuOptions.classList.toggle("show-items");
});
