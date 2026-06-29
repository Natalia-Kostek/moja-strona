window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (loader) {
    loader.style.opacity = "0";
    loader.style.transition = "0.5s ease";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});

/* =========================
   HERO SLIDER (SAFE VERSION)
========================= */

const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
  let current = 0;

  // ustaw pierwszy slajd
  slides[current].classList.add("active");

  setInterval(() => {
    slides.forEach(s => s.classList.remove("active"));

    current = (current + 1) % slides.length;

    slides[current].classList.add("active");
  }, 4000);
}

/* =========================
   SMOOTH SCROLL (NAV)
========================= */

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
