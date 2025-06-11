document.getElementById("theme-toggler").addEventListener("click", () => {
    var theme = "light";
    if(document.documentElement.style.colorScheme == "dark")
    {
        document.documentElement.style.colorScheme = "light";
        localStorage.setItem("theme", "light")
    }
    else
    {
        document.documentElement.style.colorScheme = "dark";
        localStorage.setItem("theme", "dark")
    }
 })
 window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.documentElement.style.colorScheme = savedTheme;
    }
});