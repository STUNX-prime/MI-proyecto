# TEST MEAN QUIZZES - Proyecto Web de Quizzes de Matemáticas

## Descripción del Proyecto
TEST MEAN QUIZZES es una aplicación web educativa diseñada para estudiantes de grado 11, enfocada en quizzes de matemáticas. La plataforma permite a los estudiantes acceder a diversos quizzes temáticos, realizar evaluaciones y revisar sus resultados. Los profesores pueden gestionar contenido y revisar el desempeño de los estudiantes.

## Tecnologías Utilizadas
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Node.js con Express.js
- **Base de Datos:** MySQL
- **Autenticación:** bcryptjs para hashing de contraseñas
- **Estilos:** CSS personalizado con fuentes Comic Sans MS

## Estructura del Proyecto

### Archivos Principales
- `Principal.html` - Página principal de la aplicación
- `login.html` - Página de inicio de sesión
- `registro.html` - Página de registro de usuarios
- `catalogo.html` - Catálogo de quizzes disponibles
- `estudiantes.html` - Panel del estudiante
- `profesores.html` - Panel del profesor
- `examenes-est.html` - Lista de exámenes del estudiante
- `resultados2.html` - Vista detallada de resultados
- `resultado.html` - Página de resultados de quiz

### Quizzes Disponibles
- `quiz-matematicas.html` - Quiz básico de matemáticas
- `quiz-matematicas2.html` - Matemáticas básicas
- `quiz-matematicas3.html` - Matemáticas generales
- `quiz-matematicas4.html` - Límites
- `quiz-matematicas5.html` - Matemáticas avanzadas
- `quiz-matematicas6.html` - Trigonometría
- `quiz-matematicas7.html` - Probabilidad y estadística
- `quiz-matematicas8.html` - Integrales
- `quiz-matematicas9.html` - Derivadas
- `quiz-matematicas10.html` - Trigonometría 2

### Backend (Carpeta loginAppMySQL)
- `server.js` - Servidor principal de Express
- `db.js` - Configuración de conexión a MySQL
- `routes/auth.js` - Rutas de autenticación (login/registro)
- `routes/resultados.js` - Rutas para manejo de resultados
- `package.json` - Dependencias del proyecto Node.js

### Scripts JavaScript
- `script.js` - Script principal
- `scriptlogin.js` - Manejo de login
- `scriptregistro.js` - Manejo de registro (integrado en registro.html)
- `scripcata.js` - Funcionalidades del catálogo
- `scripexamen.js` - Manejo de exámenes
- `scriptresultado.js` - Cálculo de resultados
- `scriptresultado2.js` - Vista de resultados detallados
- Scripts específicos para cada quiz: `scriptmat.js`, `scriptmat2.js`, etc.

### Estilos CSS
- `styles.css` - Estilos principales
- `styles2.css` - Estilos alternativos
- `estilos.css` - Estilos para quizzes

### Recursos
- `logo.jpeg` - Logo de la aplicación
- `fondo.jpeg`, `fondo3.jpeg` - Imágenes de fondo

## Funcionalidades

### Para Estudiantes
- Registro e inicio de sesión
- Acceso al catálogo de quizzes
- Realización de evaluaciones
- Visualización de resultados y calificaciones
- Seguimiento de progreso académico

### Para Profesores
- Panel de administración
- Creación de nuevos exámenes (interfaz básica)
- Revisión de exámenes enviados
- Visualización de resultados de estudiantes
- Calificación manual de estudiantes

### Sistema de Autenticación
- Registro con roles (estudiante/maestro)
- Login seguro con bcrypt
- Almacenamiento de sesiones en localStorage
- Redirección automática según rol

### Base de Datos
Tablas principales:
- `cuenta` - Credenciales de usuarios
- `usuario` - Información personal
- `usuario_rol` - Asignación de roles
- `resultado` - Resultados de evaluaciones
- `progreso` - Seguimiento de progreso

## Instalación y Configuración

### Prerrequisitos
- Node.js instalado
- MySQL instalado y ejecutándose
- Navegador web moderno

### Configuración de la Base de Datos
1. Crear una base de datos llamada `prueba` en MySQL
2. Ejecutar los scripts SQL para crear las tablas necesarias
3. Configurar las credenciales en `loginAppMySQL/db.js`

### Instalación del Backend
1. Navegar a la carpeta `loginAppMySQL`
2. Ejecutar `npm install` para instalar dependencias
3. Ejecutar `npm start` o `npm run dev` para iniciar el servidor

### Ejecución del Frontend
1. Abrir los archivos HTML directamente en el navegador
2. O usar un servidor local (como Live Server en VS Code)

## Uso de la Aplicación

1. **Registro:** Los nuevos usuarios se registran en `registro.html`
2. **Login:** Inicio de sesión en `login.html`
3. **Navegación:**
   - Estudiantes: Acceden a `estudiantes.html`
   - Profesores: Acceden a `Principal.html`
4. **Quizzes:** Seleccionar desde el catálogo y realizar evaluaciones
5. **Resultados:** Ver calificaciones en las páginas de resultados

## API Endpoints

### Autenticación
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Inicio de sesión

### Resultados
- `POST /api/resultados/guardar` - Guardar resultado
- `GET /api/resultados/:id_usuario` - Listar resultados de usuario
- `GET /api/resultados/detalle/:id_resultado` - Detalle de resultado

## Desarrollo y Contribución
- El proyecto utiliza JavaScript vanilla para el frontend
- El backend está estructurado con Express.js y rutas modulares
- Los estilos están separados en archivos CSS individuales
- Cada quiz tiene su propio archivo HTML y script JS

## Notas Importantes
- La aplicación está diseñada para estudiantes de grado 11
- Los quizzes están enfocados en matemáticas
- El sistema de calificación es automático para preguntas de opción múltiple
- Los profesores tienen capacidades básicas de administración

## Futuras Mejoras
- Implementar más tipos de preguntas
- Sistema de calificación automática más avanzado
- Dashboard completo para profesores
- Integración con más bases de datos
- Mejoras en la interfaz de usuario

---
Proyecto desarrollado para fines educativos - TEST MEAN QUIZZES
