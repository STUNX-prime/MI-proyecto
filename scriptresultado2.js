document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    const idExamen = params.get("id_examen");
    const idUsuario = params.get("id_usuario");

    if (!idExamen || !idUsuario) {
        mostrarError("Error: datos incompletos");
        return;
    }

    fetch(`http://localhost:3000/api/resultado/${idUsuario}/${idExamen}`)
        .then(res => res.json())
        .then(data => mostrarResultado(data))
        .catch(err => {
            console.error(err);
            mostrarError("Error al cargar los datos");
        });
});

function mostrarError(msg) {
    document.querySelector("#contenido").innerHTML = `
        <p>${msg}</p>
        <a href="examenes-est.html" class="btn">⬅ Volver a Mis Exámenes</a>
    `;
}

function mostrarResultado(data) {

    document.querySelector("#estudiante").textContent =
        `${data.nombre} ${data.apellidos}`;

    document.querySelector("#nombreExamen").textContent = data.nombre_examen;

    document.querySelector("#fecha").textContent =
        new Date(data.fecha_evaluacion).toLocaleDateString();

    document.querySelector("#correctas").textContent = data.respuestas_correctas;
    document.querySelector("#incorrectas").textContent = data.respuestas_incorrectas;

    const total = data.respuestas_correctas + data.respuestas_incorrectas;
    const nota = total === 0 ? "0.0" : ((data.respuestas_correctas / total) * 5).toFixed(1);

    document.querySelector("#nota").textContent = nota;
}
