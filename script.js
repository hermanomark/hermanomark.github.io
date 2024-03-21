const toggleThemeEl = document.querySelector("#toggle-theme");
const bodyEl = document.querySelector("body");

toggleThemeEl.addEventListener("click", () => {
  toggleThemeEl.classList.toggle("fa-moon-o");
  bodyEl.classList.toggle("dark-theme");
});
