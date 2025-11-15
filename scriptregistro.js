const registroForm = document.getElementById("registroForm");
const mensajeRegistro = document.getElementById("mensajeRegistro");

registroForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = registroForm.nombre.value.trim();
  const email = registroForm.email.value.trim();
  const password = registroForm.password.value.trim();
  const rol = registroForm.rol.value;

  if (!nombre || !email || !password || !rol) {
    mensajeRegistro.textContent = "Todos los campos son obligatorios";
    mensajeRegistro.style.color = "red";
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, password, rol })
    });

    const data = await response.json();

    if (response.ok) {
      mensajeRegistro.textContent = data.message;
      mensajeRegistro.style.color = "green";

      // Limpiar el formulario
      registroForm.reset();
    } else {
      mensajeRegistro.textContent = data.message;
      mensajeRegistro.style.color = "red";
    }

  } catch (error) {
    console.error(error);
    mensajeRegistro.textContent = "Error en la conexión al servidor";
    mensajeRegistro.style.color = "red";
  }
});

