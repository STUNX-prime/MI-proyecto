const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',       // tu usuario de MySQL
  password: '12345',       // tu contraseña
  database: 'prueba'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar con MySQL:', err);
  } else {
    console.log('Conectado a MySQL');
  }
});

module.exports = connection;
