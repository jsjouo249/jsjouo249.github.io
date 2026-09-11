const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

function updateThemeButton(theme) {
  const nextTheme = theme === "dark" ? "밝은" : "어두운";
  themeToggle.setAttribute("aria-label", `${nextTheme} 테마로 전환`);
}

updateThemeButton(root.dataset.theme);

themeToggle.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
  updateThemeButton(nextTheme);
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
