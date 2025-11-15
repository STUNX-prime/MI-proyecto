
    const datos = JSON.parse(localStorage.getItem("resultadosQuiz"));
    const resumen = document.getElementById("resumen");

    if (datos) {
      resumen.innerHTML = `
        <p>✅ Respuestas correctas: <strong>${datos.correctas}</strong></p>
        <p>❌ Respuestas incorrectas: <strong>${datos.incorrectas}</strong></p>
        <p>📊 Porcentaje: <strong>${datos.porcentaje}%</strong></p>
        <hr>
        <h3>Respuestas incorrectas:</h3>
      `;

      if (datos.detalles.length === 0) {
        resumen.innerHTML += `<p style="color: green;"><strong>¡Felicidades! Todas las respuestas son correctas.</strong></p>`;
      } else {
        datos.detalles.forEach(item => {
          resumen.innerHTML += `
            <div class="incorrecta">
              <p><strong>Pregunta ${item.pregunta}</strong></p>
              <p>Tu respuesta: <span style="color: red;">${item.tuRespuesta}</span></p>
              <p>Respuesta correcta: <span style="color: green;">${item.correcta}</span></p>
            </div>
          `;
        });
      }
    } else {
      resumen.innerHTML = "<p>No hay resultados disponibles. Asegúrate de completar el quiz primero.</p>";
    }

