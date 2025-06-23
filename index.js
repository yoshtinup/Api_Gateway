const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const axios = require('axios');
const multer = require('multer');
const FormData = require('form-data'); // Agrega esta línea
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const upload = multer(); // Para manejar multipart/form-data

// Middleware
app.use(cors());
app.use(express.json());

// Rutas de ejemplo para diferentes servicios
app.use('/imagenes', createProxyMiddleware({
    target: 'http://localhost:3001/imagen',
    changeOrigin: true,
}));

app.use('/productos', createProxyMiddleware({
    target: 'http://localhost:3002/api/v1/producto',
    changeOrigin: true,
}));

// Ruta de salud
app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

app.post('/registrar-producto', upload.single('imagen'), async (req, res) => {
    try {
        // 1. Enviar la imagen al microservicio de imágenes
        const formData = new FormData();
        formData.append('imagen', req.file.buffer, {
            filename: req.file.originalname,
            contentType: req.file.mimetype
        });

        const imagenResponse = await axios.post(
            'http://localhost:3001/imagen',
            formData,
            {
                headers: {
                    ...formData.getHeaders(),
                },
            }
        );
        const filename = imagenResponse.data.filename;

        // 2. Enviar los datos del producto al microservicio de productos
        const { nombre, cantidad, precio } = req.body;
        const productoResponse = await axios.post(
            'http://localhost:3002/api/v1/producto',
            {
                nombre,
                cantidad,
                precio,
                imagen: filename,
            }
        );

        // 3. Responder al cliente
        res.json(productoResponse.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar el producto', detalle: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`API Gateway corriendo en el puerto ${PORT}`);
});