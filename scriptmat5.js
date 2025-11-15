
    const respuestasCorrectas = {
      q1: "(3,2)",
      q2: "Igualar una variable en ambas ecuaciones",
      q3: "(6,4)",
      q4: "Compatible indeterminado",
      q5: "(5,0)",
      q6: "Compatible indeterminado",
      q7: "Sumar o restar ecuaciones para eliminar una variable",
      q8: "(3,1)",
      q9: "Incompatible",
      q10: "Incompatible"
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
  