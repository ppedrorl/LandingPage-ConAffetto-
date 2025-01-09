// Menu Mobile

let btnabrir = document.getElementById("btn-abrir");
let btnfechar = document.getElementById("btnfechar");
let menu = document.getElementById("menu-mobile");
let overlay = document.getElementById("overlay-menu-mobile");

btnabrir.addEventListener("click", () => {
  menu.classList.add("abrir");
  overlay.classList.add("abrir");
});

menu.addEventListener("click", () => {
  menu.classList.remove("abrir");
  overlay.classList.remove("abrir");
});

overlay.addEventListener("click", () => {
  menu.classList.remove("abrir");
  overlay.classList.remove("abrir");
});

// Scroll Header
const header = document.getElementById("header");

function onScroll() {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", onScroll);


// Animção Texto CTA 
document.addEventListener("DOMContentLoaded", () => {
  const cta = document.querySelectorAll(".textocta");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animado");
      }
      else {
        entry.target.classList.remove("animado");
      }
    });
  });
  cta.forEach((el) => observer.observe(el));
});

// Animção Texto CTA 
document.addEventListener("DOMContentLoaded", () => {
  const listmenu = document.querySelectorAll(".listmenu");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("ativo");
      }
      else {
        entry.target.classList.remove("ativo");
      }
    });
  });
  listmenu.forEach((el) => observer.observe(el));
});

// Animação Options
function toggleDiv(selectedCard) {
  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");
  const planocta1 =document.getElementById("planocta1");
  const planocta2 =document.getElementById("planocta2");

  option1.classList.remove("ativo");
  option2.classList.remove("ativo");
  card1.classList.remove("ativo");
  card2.classList.remove("ativo");
  planocta1.classList.remove("ativo");
  planocta2.classList.remove("ativo");

  if (selectedCard === 1) {
    option1.classList.add("ativo");
    card1.classList.add("ativo");
    planocta1.classList.add("ativo");
    
  }
  else if (selectedCard === 2) {
    option2.classList.add("ativo");
    card2.classList.add("ativo");
    planocta2.classList.add("ativo");
  }
}

// Animação Brindes
let btnbrinde = document.getElementById("btnbrinde")
let detalhes = document.getElementById("brindedetalhes")

btnbrinde.addEventListener("click", ()=> {
    detalhes.classList.toggle("ativo");
    btnbrinde.classList.toggle("aberto");
})
detalhes.addEventListener("click", () => {
  detalhes.classList.remove("ativo");
  btnbrinde.classList.remove("aberto");
})
// Animação Brindes 2
let btnbrinde2 = document.getElementById("btnbrinde2")
let detalhes2 = document.getElementById("brindedetalhes2")

btnbrinde2.addEventListener("click", ()=> {
    detalhes2.classList.toggle("ativo");
    btnbrinde2.classList.toggle("aberto");
})
detalhes2.addEventListener("click", () => {
  detalhes2.classList.remove("ativo");
  btnbrinde2.classList.remove("aberto");
})
const slider = document.querySelector('.passosmobile');
const slides = document.querySelectorAll('.passomobile');
const dots = document.querySelectorAll('.dots div');
const prevButton = document.querySelector('.btnpassosanterior');
const nextButton = document.querySelector('.btnpassosproximo');

let currentIndex = 0;

// Atualiza os dots
const updateDots = () => {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
};

// Atualiza a posição do slider
const updateSliderPosition = () => {
  slider.style.transform = `translateX(${-currentIndex * 100}%)`;
  updateDots();
};

// Botões
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--;
  updateSliderPosition();
});

nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) currentIndex++;
  updateSliderPosition();
});

// Swipe
let startX = 0;
let isDragging = false;

slider.addEventListener('pointerdown', (e) => {
  isDragging = true;
  startX = e.clientX;
  slider.style.transition = 'none';
});

slider.addEventListener('pointermove', (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - startX;
  slider.style.transform = `translateX(${-currentIndex * 100 + deltaX / slider.offsetWidth * 100}%)`;
});

slider.addEventListener('pointerup', (e) => {
  isDragging = false;
  const deltaX = e.clientX - startX;
  if (deltaX < -50 && currentIndex < slides.length - 1) currentIndex++;
  if (deltaX > 50 && currentIndex > 0) currentIndex--;
  slider.style.transition = 'transform 0.3s ease-out';
  updateSliderPosition();
});

updateDots();

