import express from 'express';  //importacion
import dbConnection from './config/mongo.config.js';
import userRoute from './routes/user.route.js';
import productsRoute from './routes/products.route.js';

const app = express(); //invocando core
const PORT = 3000;

dbConnection();

app.get("/health", (req, res) => {
  res.json({
    weight: "180 lb",
    height: "6.0 ft",
  });
});
// Middlewares Express
app.use (express.json() );

app.use("/api/v1/users", userRoute);
app.use("/api/v1/products", productsRoute);

//Lanzando el servidor a la web
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
