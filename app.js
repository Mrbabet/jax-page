const themeSwitcher = document.querySelector(".theme-changer");
const icon = document.querySelector(".theme-icon");
const faSun = document.querySelector(".fa-sun");
const faMoon = document.querySelector(".fa-moon");
let buttonActive = false;

themeSwitcher.addEventListener("click", () => {
  if (!buttonActive) {
    themeSwitcher.classList.add("active");
    // faSun.classList.add("active");
    // faMoon.classList.add("active");
    // icon.classList.add("active");
    buttonActive = true;
  } else {
    themeSwitcher.classList.remove("active");
    // faSun.classList.remove("active");
    // faMoon.classList.remove("active");
    // icon.classList.remove("active");
    buttonActive = false;
  }
});
