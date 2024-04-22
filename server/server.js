const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();
const {notFoundMiddleware}=require("../server/middleware/notfoundmiddleware")
const connectDB = require("./Utils/db");

const corsOptions = {
  origin: ["http://localhost:3000", "*"],
  credentials: true,
};

const server = express();

server.use(express.json({ limit: "50mb" }));
server.use(express.urlencoded({ limit: "500kb", extended: true }));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors(corsOptions));

connectDB();

// Showing Api is Running or not //

server.get("/", (req, res) => {
  res.send("API is Running");

});
  // Express routes here
  server.use('/api/auth', require("./Route/AuthRouter"));
  server.use('/api/chef', require("./Route/ChefRouter"));
  server.use('/api/menu', require("./Route/MenuRouter"));
  server.use('/api/cuisines', require("./Route/CategoryRouter"));
  server.use('/api/dietary', require("./Route/dietaryRouter"));
  server.use('/api/DishType', require("./Route/DishTypeRouter"));
  server.use('/api/SpiceLevel', require("./Route/SpiceRouter"));
  server.use('/api/Orders', require("./Route/cartRoutes"));
  server.use('/api/order',require("./Route/OrderRouter"))

    // Not found Middleware

    server.use(notFoundMiddleware)

const PORT = process.env.PORT || 4000;
server.listen(PORT, '0.0.0.0', (err) => {
  if (err) throw err;
  console.log(`Server is running on http://localhost:${PORT}`);
});