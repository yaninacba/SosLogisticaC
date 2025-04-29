document.addEventListener('df-messenger-loaded', () => {
  const dfMessenger = document.querySelector('df-messenger');
  
  // Ejemplo: Guardar mensajes en Firebase
  dfMessenger.addEventListener('df-response-received', (event) => {
    const userMessage = event.detail.response.queryText;
    const botReply = event.detail.response.fulfillmentText;

    // Guardar en Firestore (colección 'chat-logs')
    db.collection('chat-logs').add({
      userMessage: userMessage,
      botReply: botReply,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(error => console.error("Error al guardar:", error));
  });
