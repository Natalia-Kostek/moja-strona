function toggleMenu(){
const nav=document.getElementById("nav");
nav.style.display=nav.style.display==="flex"?"none":"flex";
}

/* HERO SLIDER */
const slides=document.querySelectorAll(".slide");
let i=0;

function slider(){
slides.forEach(s=>s.classList.remove("active"));
slides[i].classList.add("active");
i=(i+1)%slides.length;
}
setInterval(slider,4000);

/* TYPING EFFECT */
const text="Profesjonalny Retrofit Samochodowy";
let index=0;

function type(){
document.addEventListener("DOMContentLoaded", () => {
  const text = "Profesjonalny Retrofit Samochodowy";
  let i = 0;

  function type() {
    document.getElementById("typing").innerHTML = text.slice(0, i++);
    if (i <= text.length) setTimeout(type, 70);
  }

  type();
});
/* PARTICLES */
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let dots=[];

for(let i=0;i<80;i++){
dots.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="#00a3ff";

dots.forEach(d=>{
ctx.beginPath();
ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
ctx.fill();
d.y+=0.3;
if(d.y>canvas.height)d.y=0;
});

requestAnimationFrame(draw);
}
draw();
