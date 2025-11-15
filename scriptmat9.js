
    const respuestasCorrectas = {
      q1: "2x",
      q2: "5",
      q3: "3x²",
      q4: "0",
      q5: "4x³",
      q6: "cos(x)",
      q7: "-sen(x)",
      q8: "e^x",
      q9: "1/x",
      q10: "5x⁴"
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
 