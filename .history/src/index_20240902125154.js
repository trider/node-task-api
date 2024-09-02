const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const api = require('./api/api');





// Simple logging middleware
app.use((req, res, next) => {
 console.log(`${req.method} ${req.url}`);
 next(); // Passes control to the next middleware or route handler
});

// Define a route
app.use('/api', api);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});