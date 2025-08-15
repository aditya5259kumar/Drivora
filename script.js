//<!------------------------ header section ------------------------>

const navMenu = document.querySelector(".nav-menu");
const navMenuOpen = document.querySelector(".nav-menu-open");
const navMenuClose = document.querySelector(".nav-menu-close");

navMenuOpen.addEventListener("click", () => {
  navMenu.style.display = "flex";
  navMenuOpen.style.display = "none";
  navMenuClose.style.display = "inline-block";
});

navMenuClose.addEventListener("click", () => {
  navMenu.style.display = "none";
  navMenuOpen.style.display = "inline-block";
  navMenuClose.style.display = "none";
});

//<!------------------------ theme toggle ------------------------>

const themeButton = document.querySelector(".theme-btn");

themeButton.addEventListener("click", () => {
  if (document.body.className === "dark") {
    document.body.className = "";
    themeButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    localStorage.setItem("driving-school-theme", "light");
  } else {
    document.body.className = "dark";
    themeButton.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    localStorage.setItem("driving-school-theme", "dark");
  }
});

window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("driving-school-theme");

  if (savedTheme === "dark") {
    document.body.className = "dark";
    themeButton.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    document.body.className = "";
    themeButton.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});
