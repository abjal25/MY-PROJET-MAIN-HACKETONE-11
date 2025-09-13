document.addEventListener('DOMContentLoaded', () => {
    const chatHistory = document.getElementById('chat-history');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const escalateBtn = document.getElementById('escalate-btn');
    const sentimentBar = document.getElementById('sentiment-bar');
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    let isHindi = false;

    // AI Chatbot response logic
    const getBotResponse = (message) => {
        const lowerCaseMessage = message.toLowerCase();
        let response = "";
        let sentiment = "neutral";

        if (lowerCaseMessage.includes("stress") || lowerCaseMessage.includes("anxiety")) {
            response = "I hear you. Dealing with stress can be tough. It's important to take things one step at a time. Would you like to try a guided breathing exercise?";
            sentiment = "negative";
        } else if (lowerCaseMessage.includes("happy") || lowerCaseMessage.includes("good")) {
            response = "That's wonderful to hear! It's great that you're feeling good. Let's keep that positive energy going!";
            sentiment = "positive";
        } else if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
            response = "Hello there! How can I assist you today?";
        } else {
            response = "I'm not sure how to respond to that, but I'm here to listen. You can tell me more about what's on your mind.";
        }

        return { text: response, sentiment: sentiment };
    };

    const displayMessage = (message, sender) => {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message', `${sender}-message`);

        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.textContent = message;

        if (sender === 'bot') {
            const avatar = document.createElement('span');
            avatar.classList.add('avatar');
            avatar.textContent = '🤖';
            messageContainer.appendChild(avatar);
        }

        messageContainer.appendChild(messageContent);
        chatHistory.appendChild(messageContainer);
        chatHistory.scrollTop = chatHistory.scrollHeight; // Auto-scroll
    };

    const updateSentimentBar = (sentiment) => {
        switch (sentiment) {
            case 'positive':
                sentimentBar.style.width = '100%';
                sentimentBar.style.backgroundColor = '#4CAF50';
                break;
            case 'negative':
                sentimentBar.style.width = '10%';
                sentimentBar.style.backgroundColor = '#F44336';
                break;
            case 'neutral':
            default:
                sentimentBar.style.width = '50%';
                sentimentBar.style.backgroundColor = '#f4d03f';
                break;
        }
    };

    sendBtn.addEventListener('click', () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            displayMessage(userMessage, 'user');
            userInput.value = '';

            // Simulate typing animation
            const typingIndicator = document.createElement('div');
            typingIndicator.classList.add('message', 'bot-message');
            typingIndicator.innerHTML = '<div class="message-content"><span class="avatar">🤖</span>Typing...</div>';
            chatHistory.appendChild(typingIndicator);
            chatHistory.scrollTop = chatHistory.scrollHeight;

            setTimeout(() => {
                const response = getBotResponse(userMessage);
                typingIndicator.remove();
                displayMessage(response.text, 'bot');
                updateSentimentBar(response.sentiment);
            }, 1000);
        }
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });

    escalateBtn.addEventListener('click', () => {
        alert("Redirecting you to the booking page to talk to a counselor.");
        window.location.href = 'booking.html';
    });

    // Multilingual toggle (mock)
    langToggleBtn.addEventListener('click', () => {
        isHindi = !isHindi;
        if (isHindi) {
            langToggleBtn.textContent = 'English';
            displayMessage('नमस्ते! आज मैं आपकी कैसे मदद कर सकता हूँ?', 'bot');
        } else {
            langToggleBtn.textContent = 'हिन्दी';
            displayMessage('Hello there! How can I assist you today?', 'bot');
        }
    });
});