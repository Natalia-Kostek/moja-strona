window.addEventListener("load", () => {

  const slides = document.querySelectorAll(".slide");

  if (!slides.length) return;

  let index = 0;

  function show(i){
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
  }

  show(0);

  setInterval(() => {
    index = (index + 1) % slides.length;
    show(index);
  }, 4000);

});
