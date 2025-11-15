const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcryptjs"); // ⚡ bcryptjs para Windows

// ==================== REGISTRO ====================
router.post("/register", async (req, res) => {
  const { nombre, email, password, rol } = req.body;

  if (!nombre || !email || !password || !rol) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  db.query("SELECT * FROM cuenta WHERE correo = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ message: "Error en la base de datos" });
    if (results.length > 0) return res.status(400).json({ message: "Correo ya registrado" });

    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
      "INSERT INTO cuenta (correo, contrasena) VALUES (?, ?)",
      [email, hashedPassword],
      (err, result) => {
        if (err) return res.status(500).json({ message: "Error al crear cuenta" });

        const idCuenta = result.insertId;
        const idRol = rol === "estudiante" ? 1 : 2; // Ajusta según tus IDs en usuario_rol

        db.query(
          "INSERT INTO usuario (nombre, apellidos, correo, id_cuenta) VALUES (?, ?, ?, ?)",
          [nombre, "", email, idCuenta],
          (err2, result2) => {
            if (err2) return res.status(500).json({ message: "Error al crear usuario" });

            const idUsuario = result2.insertId;

            db.query(
              "INSERT INTO usuario_rol (id_usuario, id_rol) VALUES (?, ?)",
              [idUsuario, idRol],
              (err3) => {
                if (err3) return res.status(500).json({ message: "Error al asignar rol" });
                return res.json({ message: "Usuario registrado correctamente" });
              }
            );
          }
        );
      }
    );
  });
});

// ==================== LOGIN ====================
router.post("/login", (req, res) => {
  const { correo, contrasena, rol } = req.body;

  if (!correo || !contrasena || !rol) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  const idRolEsperado = rol === "estudiante" ? 1 : 2;

  db.query(
    `SELECT u.id_usuario, u.nombre, c.contrasena
     FROM cuenta c
     JOIN usuario u ON c.id_cuenta = u.id_cuenta
     JOIN usuario_rol ur ON u.id_usuario = ur.id_usuario
     WHERE c.correo = ? AND ur.id_rol = ?`,
    [correo, idRolEsperado],
    async (err, results) => {
      if (err) return res.status(500).json({ message: "Error en la base de datos" });
      if (results.length === 0) return res.status(400).json({ message: "Usuario no encontrado o rol incorrecto" });

      const user = results[0];
      const match = await bcrypt.compare(contrasena, user.contrasena);

      if (!match) return res.status(400).json({ message: "Contraseña incorrecta" });

      // Login exitoso
      return res.json({
        message: "Login exitoso",
        user: { id: user.id_usuario, nombre: user.nombre, rol: rol },
      });
    }
  );
});
module.exports = router;
