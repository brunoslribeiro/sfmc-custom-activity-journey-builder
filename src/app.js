const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('body-parser').raw({
  type: 'application/jwt'
}));

app.use(express.static(path.join(__dirname, '..', 'public')));

const saveRoute = require('./routes/save');
const executeRoute = require('./routes/execute');
const validateRoute = require('./routes/validate');
const publishRoute = require('./routes/publish');
const stopRoute = require('./routes/stop');
const unPublishRoute = require('./routes/unpublish');

// URL base para a atividade customizada
const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
const applicationId = process.env.APPLICATIONID;

app.use('/save', saveRoute);
app.use('/execute', executeRoute);
app.use('/validate', validateRoute);
app.use('/publish', publishRoute);
app.use('/stop', stopRoute);
app.use('/unpublish', unPublishRoute);

// Rota para activity.html
app.get('/activity', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'activity.html'));
});

// Rota para config.json
app.get('/config.json', (req, res) => {
  const customActivityConfig = {
    "key": `${applicationId}`,
    "workflowApiVersion": "1.1",
    "metaData": {
      "icon": `${baseUrl}/icon.png`,
      "category": "message"
    },
    "type": "REST",
    "lang": {
      "en-US": {
        "name": "Atividade Customizada",
        "description": "Isto e uma atividade customizada!"
      }
    },
    "arguments": {
      "execute": {
        "inArguments": [],
        "outArguments": [],
        "url": `${baseUrl}/execute`,
        "verb": "POST",
        "body": "",
        "header": "",
        "format": "json",
        "useJwt": true,
        "timeout": 10000
      }
    },
    "configurationArguments": {
      "applicationExtensionKey": `${applicationId}`,
      "save": {
        "url": `${baseUrl}/save`,
        "verb": "POST",
        "body": "",
        "header": "",
        "format": "json",
        "useJwt": true
      },
      "publish": {
        "url": `${baseUrl}/publish`,
        "verb": "POST",
        "body": "",
        "header": "",
        "format": "json",
        "useJwt": true
      },
      "unpublish": {
        "url": `${baseUrl}/unpublish`,
        "verb": "POST",
        "body": "",
        "header": "",
        "format": "json",
        "useJwt": true
      },
      "validate": {
        "url": `${baseUrl}/validate`,        
        "verb": "POST",
        "body": "",
        "header": "",
        "format": "json",
        "useJwt": true
      },
      "stop": {
        "url": `${baseUrl}/stop`,        
        "verb": "POST",
        "body": "",
        "header": "",
        "format": "json",
        "useJwt": true
      }
    },
    "wizardSteps": [
      {
        "label": "Step 1",
        "key": "step1"
      }
    ],
    "userInterfaces": {
      "configModal": {
        "height": 400,
        "width": 500,
        "url": `${baseUrl}/activity.html`
      }
    }
  };

  res.json(customActivityConfig);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
