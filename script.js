const API_KEY = "sk-a17ab76b6bc2438f83a3ad0dfac26528"; //mi key deep
const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

async function sendMessage() {
    const message = userInput.value;
    if (!message) return;

    chatbox.innerHTML += `<p><strong>Tú:</strong> ${message}</p>`;
    userInput.value = "";

    try {
        const response = await fetch("https://api.deepseek.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                messages: [{ role: "user", content: message }]
            })
        });

        const data = await response.json();
        console.log(data); // ¡Verifica la estructura real aquí!

        // Versión segura (evita errores si la estructura cambia):
        const reply = data?.choices?.[0]?.message?.content || "No pude obtener una respuesta. Revisa la consola.";
        chatbox.innerHTML += `<p><strong>Bot:</strong> ${reply}</p>`;
    } catch (error) {
        chatbox.innerHTML += `<p style="color: red;">Error: ${error.message}</p>`;
        console.error("Detalles del error:", error);
    }
}

// envia con enter
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});
