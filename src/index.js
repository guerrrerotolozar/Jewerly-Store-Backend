const express = require("express");         // Importacion
const app = express();                      // Invocando core Express
const PORT = 3000;   


app.get('/health', (req, res) => {
    const health = [
        {name:"ronald", deport:"natacion"},
        {name:"felipe", deport:"ciclismo"}
    ]
    res.json(health)
});

// Middleware Express

app.use('/api/v1/user', require('./routes/user.route.js'/*,'./routes/products.route.js' => no se puede meter 2 en una sola*/))
// app.use('/api/v1', require('./routes/products.route.js'))  => preferible poner la direccion directamente y no en el archivo
app.use('/api/v1/product', require('./routes/products.route.js'))

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/health`)
});