
    const respuestasCorrectas = {
      q1: "x² + C",
      q2: "sin(x) + C",
      q3: "ln|x| + C",
      q4: "e^x + C",
      q5: "x³ + C",
      q6: "tan(x) + C",
      q7: "C",
      q8: "-cos(x) + C",
      q9: "4x + C",
      q10: "arctan(x) + C"
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
 