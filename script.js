/* PRELOADER */
function hidePreloader() {
    const preloader = document.getElementById("preloader");
    if (!preloader || preloader.style.display === "none") return;
    preloader.style.opacity = "0";
    setTimeout(() => {
        preloader.style.display = "none";
    }, 600);
}

// Try on DOMContentLoaded (doesn't wait for images/assets)
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(hidePreloader, 1200);
});

// Hard fallback: force-hide after 3s no matter what
setTimeout(hidePreloader, 3000);

/* THEME SWITCH */
const themeBtn = document.getElementById("themeToggle");
const cyberLayer = document.getElementById("cyberTransition");

themeBtn.addEventListener("click", () => {
    cyberLayer.style.opacity = 1;

    setTimeout(() => {
        document.body.classList.toggle("light-theme");
    }, 200);

    setTimeout(() => {
        cyberLayer.style.opacity = 0;
    }, 700);
});

/* SCROLL-BASED REVEAL ANIMATIONS */
const revealOnScroll = () => {
    document.querySelectorAll(".fade-up, .fade-slide").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.classList.add("revealed");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
// Run once on DOMContentLoaded so above-the-fold elements appear immediately
document.addEventListener("DOMContentLoaded", revealOnScroll);

/* PROJECT FILTERING */
const projectItems = document.querySelectorAll(".timeline-item");
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        projectItems.forEach(item => {
            const tags = item.dataset.category ? item.dataset.category.split(" ") : [];
            if (filter === "all" || tags.includes(filter)) {
                item.style.display = "block";
                // Re-trigger reveal animation
                item.classList.remove("revealed");
                setTimeout(() => item.classList.add("revealed"), 50);
            } else {
                item.style.display = "none";
            }
        });
    });
});