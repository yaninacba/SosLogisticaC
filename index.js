const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });

  function saludo(agent) {
    agent.add("¡Hola desde Firebase!");
  }

  let intentMap = new Map();
  intentMap.set('Saludo', saludo);
  agent.handleRequest(intentMap);
});
