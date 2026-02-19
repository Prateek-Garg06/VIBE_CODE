/* ----------------------------------------------
   PRELOADER
----------------------------------------------*/
window.onload = () => {
    setTimeout(() => {
        document.getElementById("preloader").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("preloader").style.display = "none";
        }, 600);
    }, 1200);
};

/* ----------------------------------------------
   CYBER THEME SWITCH
----------------------------------------------*/
const toggleBtn = document.getElementById("themeToggle");
const cyberLayer = document.getElementById("cyberTransition");

toggleBtn.addEventListener("click", () => {
    cyberLayer.style.opacity = 1;

    setTimeout(() => {
        document.body.classList.toggle("light-theme");
    }, 200);

    setTimeout(() => {
        cyberLayer.style.opacity = 0;
    }, 700);
});

/* Apply theme variables dynamically */
const observeTheme = new MutationObserver(() => {
    if (document.body.classList.contains("light-theme")) {
        document.documentElement.style.setProperty("--bg-dark", "var(--bg-light)");
        document.documentElement.style.setProperty("--text-dark", "var(--text-light)");
        document.documentElement.style.setProperty("--card-dark", "var(--card-light)");
    } else {
        document.documentElement.style.setProperty("--bg-dark", "#0b1120");
        document.documentElement.style.setProperty("--text-dark", "#d7e3fc");
        document.documentElement.style.setProperty("--card-dark", "rgba(255,255,255,0.05)");
    }
});
observeTheme.observe(document.body, { attributes: true });
