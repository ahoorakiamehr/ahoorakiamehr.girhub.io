document.addEventListener("DOMContentLoaded", function() {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
        document.body.classList.add("light-mode");
        document.getElementById("themeButton").textContent = "🌞";
    }
    document.body.classList.remove('preload');
    document.getElementById('loader').style.display = 'none';

    const dots = document.getElementById('dots');
    let dotCount = 0;
    setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        dots.textContent = '.'.repeat(dotCount);
    }, 500);
});

function toggleTheme() {
    document.body.classList.toggle("light-mode");
    const themeButton = document.getElementById("themeButton");
    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "🌞";
        localStorage.setItem("theme", "light");
    } else {
        themeButton.textContent = "🌜";
        localStorage.setItem("theme", "dark");
    }
}
