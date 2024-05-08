// swagger.js
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Bookstore API",
            version: "1.0.0",
            description: "API documentation for the Bookstore application",
            license: {
                name: "MIT",
                url: "https://opensource.org/licenses/MIT",
            },
            contact: {
                name: "Saruf",
                url: "https://github.com/saruf-ratul",
                email: "https://github.com/saruf-ratul",
            },
        },
    },
    apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };