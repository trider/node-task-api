const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const api = require('./api/api');
const swaggerUi = require('swagger-ui-express');
const swagger = require('./swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger));




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