<script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
<df-messenger
  intent="WELCOME"
  chat-title="NewAgent"
  agent-id="20546df3-aa99-4a64-98f6-613fa28fc197"
  language-code="en"
></df-messenger>

// Función para enviar mensajes del chatbot
function sendChatMessage() {
    const userInput = document.getElementById('user-input').value;
    const chatContainer = document.getElementById('chat-messages');

    // Guardar mensaje en Firestore (en una colección específica para el chat)
    db.collection("chatbot-messages").add({  // <- Usa tu colección
        text: userInput,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: "Usuario1"  // Opcional: añade más campos
    })
    .then(() => {
        chatContainer.innerHTML += `<p>Tú: ${userInput}</p>`;
    })
    .catch((error) => {
        console.error("Error al guardar:", error);
    });
}

// Escuchar mensajes existentes (opcional)
db.collection("chatbot-messages")
    .orderBy("timestamp", "asc")
    .onSnapshot((snapshot) => {
        const chatContainer = document.getElementById('chat-messages');
        snapshot.forEach((doc) => {
            const message = doc.data();
            chatContainer.innerHTML += `<p>${message.user}: ${message.text}</p>`;
        });
    });
