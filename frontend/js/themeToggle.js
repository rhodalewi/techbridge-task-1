const themeToggle = document.getElementById("theme_toggle");
const savedTheme = localStorage.getItem("theme");
const themeIcon = document.querySelectorAll(".theme_icon");
const moonIcon = themeToggle?.querySelector(".moon_icon");
const sunIcon = themeToggle?.querySelector(".sun_icon");

if(savedTheme === "dark") {
    document.body.classList.add("dark-mode");
};

//Function to update the theme icon
function updateThemeIcon() {
    if(!moonIcon || !sunIcon) return;

    const isDarkMode = document.documentElement.classList.contains("dark-mode");

    if(isDarkMode) {
        moonIcon.style.display = "none";
        sunIcon.style.display = "block";
    } else {
        moonIcon.style.display = "block";
        sunIcon.style.display = "none";
    };
};

if(themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark-mode");

        const isDarkMode = document.documentElement.classList.contains("dark-mode");

        localStorage.setItem("theme", isDarkMode ? "dark" : "light");

        updateThemeIcon();
    });
};

updateThemeIcon();