// ANIMACIÓN DE LAS TARJETAS
const cards = document.querySelectorAll('.card');

function mostrarTarjetas() {
  const triggerBottom = window.innerHeight * 0.9;
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < triggerBottom) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', mostrarTarjetas);
mostrarTarjetas();

// CAMBIO DE TEXTO DEL HEADER
const header = document.querySelector('header');
const originalText = header.textContent;

header.addEventListener('mouseenter', () => {
  header.textContent = '¡Explora y diviértete aprendiendo! 🎯';
});

header.addEventListener('mouseleave', () => {
  header.textContent = originalText;
});

// CONFIRMACIÓN PARA INICIAR EL QUIZ
const botones = document.querySelectorAll('.card a button');

botones.forEach(boton => {
  boton.addEventListener('click', (e) => {
    e.preventDefault();
    const titulo = boton.closest('.card').querySelector('h3').textContent;
    const enlace = boton.closest('a').href;

    if (confirm(`✨ ¿Quieres comenzar el "${titulo}"?`)) {
      window.location.href = enlace;
    }
  });
});

// 🔥 NUEVA PARTE: REDIRECCIÓN SEGÚN ROL
const btnVolver = document.getElementById("btnVolver");

btnVolver.addEventListener("click", () => {
  const rol = localStorage.getItem("rol");

  if (rol === "estudiante") {
    window.location.href = "estudiantes.html";
  } else if (rol === "maestro") {
    window.location.href = "principal.html";  // O el nombre exacto
  } else {
    window.location.href = "index.html"; // No tiene rol → login
  }
});
