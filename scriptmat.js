
    const respuestasCorrectas = {
      q1: "8",
      q2: "5",
      q3: "42",
      q4: "5",
      q5: "30",
      q6: "27",
      q7: "7",
      q8: "50",
      q9: "9",
      q10: "40"
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
