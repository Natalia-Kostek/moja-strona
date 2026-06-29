/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    loader.style.transition = "0.5s ease";
    setTimeout(() => loader.style.display = "none", 500);
  }
});

/* =========================
   HERO SLIDER
========================= */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    slide.style.opacity = "0";
  });

  if (slides[index]) {
    slides[index].classList.add("active");
    slides[index].style.opacity = "0.35";
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000);

/* =========================
   SCROLL ANIMATION
========================= */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll("section, .service-card, .feature, .review-card").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "0.6s ease";
  observer.observe(el);
});

/* =========================
   SMOOTH NAV SCROLL FIX
========================= */

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
