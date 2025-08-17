const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { registrarProducto } = require('../controllers/registrarProductoController');
const {actualizarProducto} = require("../controllers/actualizarProducto")
const { eliminarProducto } = require("../controllers/eliminarProducto");
const { asignarCursoAdmin } = require('../controllers/asignarCursoAdminController');


router.post('/registrar-producto', upload.single('imagen'), registrarProducto);
router.put('/actualizar-producto/:id', upload.single('imagen'), actualizarProducto);
router.delete('/eliminar-producto/:id', eliminarProducto);
router.post('/asignarcurso/admin', upload.single('excel'), asignarCursoAdmin);


router.get('/health', (req, res) => res.json({ status: 'OK' }));

module.exports = router;