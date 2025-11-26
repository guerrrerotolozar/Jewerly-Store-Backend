const express = require("express");         // Importacion
const app = express();                      // Invocando core Express
const PORT = 3000;                          

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});