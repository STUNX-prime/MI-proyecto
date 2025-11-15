
    const respuestasCorrectas = {
      q1: "1/2",
      q2: "1/2",
      q3: "1",
      q4: "1",
      q5: "1",
      q6: "0",
      q7: "0",
      q8: "0",
      q9: "indefinido",
      q10: "-1"
    };

    document.getElementById("submitBtn").addEventListener("click", () => {
      const total = 10;
      let correctas = 0;
      let incorrectas = [];
      for (let i = 1; i <= total; i++) {
        const respuestaSeleccionada = document.querySelector(`input[name="q${i}"]:checked`);
        const correcta = respuestasCorrectas[`q${i}`];
        const elegida = respuestaSeleccionada ? respuestaSeleccionada.value : "";

        if (elegida === correcta) {
          correctas++;
        } else {
          incorrectas.push({
            pregunta: i,
            correcta: correcta,
            tuRespuesta: elegida || "Sin responder"
          });
        }
      }

      const resultados = {
        correctas: correctas,
        incorrectas: total - correctas,
        porcentaje: ((correctas / total) * 100).toFixed(2),
        detalles: incorrectas
      };

      localStorage.setItem("resultadosQuiz", JSON.stringify(resultados));
      window.location.href = "resultado.html";
    });
  