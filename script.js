window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
});

/* SLIDER */
const slides = document.querySelectorAll(".slide");

let i = 0;

if (slides.length > 0) {
  slides[0].style.opacity = "1";

  setInterval(() => {
    slides.forEach(s => s.style.opacity = "0");

    slides[i].style.opacity = "1";

    i = (i + 1) % slides.length;
  }, 4000);
}
