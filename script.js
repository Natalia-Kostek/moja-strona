// MENU MOBILE
function toggleMenu(){
  document.getElementById("nav").classList.toggle("active");
}

// ANIMACJE SCROLL
const elements = document.querySelectorAll(".card, .photo");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity=1;
      e.target.style.transform="translateY(0)";
    }
  });
});

elements.forEach(el=>{
  el.style.opacity=0;
  el.style.transform="translateY(30px)";
  el.style.transition="0.6s";
  observer.observe(el);
});
