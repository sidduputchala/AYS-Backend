const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerDocument = require('../swagger.json'); // Your Swagger specification file
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "AT YOUR SERVICE (AYS)",
            version: "1.0.0",
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
        servers: [
            {
                url: process.env.URL,
            },
        ],
    },
    api: [ "index.js", "api/*.js" ],
};
const swaggerSpec = swaggerJsDoc(options);

module.exports = (req, res) => {
  swaggerUi.setup(swaggerSpec)(req, res);
};