const swaggerAutogen = require('swagger-autogen')(); 

const doc = {
    info: {
        title: "Users Api",
        description: "CSE341 Final Team Project for Team 09"
    },
    host: "localhost:8080",
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointFiles, doc);