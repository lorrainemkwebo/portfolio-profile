// Find the button on the page
const toggleButton = document.getElementById("theme-toggle");

// If the visitor picked a theme on a previous visit, use it
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
}

// When the button is clicked, switch the theme and remember the choice
toggleButton.addEventListener("click", function () {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
});