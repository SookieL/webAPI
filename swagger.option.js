import path from 'path';
import { fileURLToPath } from 'url';

//! Fix pour « import.meta.dirname » qui ne fonctionne pas en node v20 et moins !
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Documentation : https://brikev.github.io/express-jsdoc-swagger-docs/

const swaggerOption = {
    // Information global par rapport à votre API
    info: {
      version: '1.0.0',
      title: 'Team manager',
      description: 'Demo d\'un API avec l\'utilisation de Swagger',
      license: {
        name: 'ISC',
      },
    },
    // Répertoire root de l'api
    // ? Remplacer __dirname par import.meta.dirname a partir de node 21+
    baseDir: __dirname,
    // Répertoire à analyser pour générer le swagger
    filesPattern: [
        './controllers/*.controller.js',
        './dto/*.dto.js',
        './validators/*.validator.js'
    ],
    // Interface swagger
    exposeSwaggerUI: true,
    swaggerUIPath: '/api-docs',
    swaggerUiOptions: {},
    // JSON Api Docs
    exposeApiDocs: true,
    apiDocsPath: '/v3/api-docs/swagger.json',
  };

export default swaggerOption;