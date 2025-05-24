document.getElementById("theme-toggler").addEventListener("click", () => {
    if(document.documentElement.style.colorScheme == "dark")
    {
        document.documentElement.style.colorScheme = "light";
    }
    else
    {
        document.documentElement.style.colorScheme = "dark";
    }
 })