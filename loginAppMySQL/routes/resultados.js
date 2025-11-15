const express = require("express");
const router = express.Router();
const db = require("../config/db");

/* =====================================================
   1. GUARDAR RESULTADO
===================================================== */
router.post("/guardar", (req, res) => {
  const { id_usuario, id_progreso, correctas, incorrectas } = req.body;

  db.query(
    `INSERT INTO resultado (id_usuario, id_progreso, respuestas_correctas, respuestas_incorrectas)
     VALUES (?, ?, ?, ?)`,
    [id_usuario, id_progreso, correctas, incorrectas],
    (err, result) => {
      if (err) return res.status(500).json({ error: "Error al guardar resultado" });

      res.json({
        message: "Resultado guardado correctamente",
        id_resultado: result.insertId
      });
    }
  );
});

/* =====================================================
   2. LISTAR RESULTADOS DE UN USUARIO
===================================================== */
router.get("/:id_usuario", (req, res) => {
  const { id_usuario } = req.params;

  db.query(
    `SELECT r.*, p.nombre AS nombre_examen
     FROM resultado r
     JOIN progreso p ON r.id_progreso = p.id_progreso
     WHERE r.id_usuario = ?
     ORDER BY r.fecha_evaluacion DESC`,
    [id_usuario],
    (err, results) => {
      if (err) return res.status(500).json({ error: "Error en DB" });
      res.json(results);
    }
  );
});

/* =====================================================
   3. TRAER DETALLE DE UN RESULTADO
===================================================== */
router.get("/detalle/:id_resultado", (req, res) => {
  const { id_resultado } = req.params;

  db.query(
    `SELECT r.*, u.nombre, u.apellidos, p.nombre AS nombre_examen
     FROM resultado r
     JOIN usuario u ON r.id_usuario = u.id_usuario
     JOIN progreso p ON r.id_progreso = p.id_progreso
     WHERE r.id_resultado = ?`,
    [id_resultado],
    (err, results) => {
      if (err) return res.status(500).json({ error: "Error en DB" });
      if (results.length === 0) return res.status(404).json({ message: "No encontrado" });

      res.json(results[0]);
    }
  );
});

module.exports = router;
