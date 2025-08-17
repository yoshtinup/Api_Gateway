require('dotenv').config();
const app = require('./src/config/server');

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API Gateway corriendo en el puerto ${PORT}`);
});
