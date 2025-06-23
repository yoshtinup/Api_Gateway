const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { registrarProducto } = require('../controllers/registrarProductoController');

router.post('/registrar-producto', upload.single('imagen'), registrarProducto);

router.get('/health', (req, res) => res.json({ status: 'OK' }));

module.exports = router;
