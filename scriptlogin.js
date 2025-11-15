const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("errorMsg");
const loader = document.getElementById("loader");
const loaderProgress = document.getElementById("loaderProgress");
const emoji = document.getElementById("emoji");

const emojiList = ["➕", "➖", "✖️", "➗", "🧮", "📏", "📐", "🔢"];
let emojiIndex = 0;

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorMsg.textContent = "";

  const correo = document.getElementById("email").value.trim();
  const contrasena = document.getElementById("password").value.trim();
  const rol = document.getElementById("role").value;

  if (!correo || !contrasena || !rol) {
    errorMsg.textContent = "Todos los campos son obligatorios";
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, contrasena, rol })
    });

    const data = await response.json();

    if (response.ok) {

      // GUARDAR DATOS DEL USUARIO
      localStorage.setItem("username", data.user.nombre);
      localStorage.setItem("rol", data.user.rol);
      localStorage.setItem("usuarioId", data.user.id);


      // Animación de carga
      loader.style.display = "flex";
      let progress = 0;

      const interval = setInterval(() => {
        progress += 10;
        loaderProgress.style.width = progress + "%";
        emoji.textContent = emojiList[emojiIndex];
        emojiIndex = (emojiIndex + 1) % emojiList.length;

        if (progress >= 100) {
          clearInterval(interval);
          loader.style.display = "none";

          // ⭐⭐⭐ REDIRECCIÓN SEGÚN EL ROL ⭐⭐⭐
          if (data.user.rol === "estudiante") {
            window.location.href = "estudiantes.html";
          } else if (data.user.rol === "maestro") {
            window.location.href = "Principal.html";
          } else {
            errorMsg.textContent = "Rol desconocido";
          }
        }
      }, 150);

    } else {
      errorMsg.textContent = data.message;
    }

  } catch (error) {
    console.error(error);
    errorMsg.textContent = "Error en la conexión al servidor";
  }
});
