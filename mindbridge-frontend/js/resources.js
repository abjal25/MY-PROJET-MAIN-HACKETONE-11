document.addEventListener('DOMContentLoaded', async () => {
    const resourceGrid = document.getElementById('resource-grid');
    const typeFilter = document.getElementById('type-filter');
    const langFilter = document.getElementById('lang-filter');
    const ttsToggle = document.getElementById('tts-toggle');
    const fontSizeToggle = document.getElementById('font-size-toggle');

    // Mock data for resources
    const mockResources = [
        { id: 1, title: "Mindfulness for Beginners", type: "audio", lang: "en", url: "#", thumb: "assets/images/mindfulness.jpg" },
        { id: 2, title: "Coping with Exam Stress", type: "video", lang: "en", url: "#", thumb: "assets/images/exam-stress.jpg" },
        { id: 3, title: "Depression: A Guide", type: "pdf", lang: "en", url: "#", thumb: "assets/images/depression-guide.jpg" },
        { id: 4, title: "तनाव प्रबंधन", type: "video", lang: "hi", url: "#", thumb: "assets/images/stress-hindi.jpg" },
        { id: 5, title: "5 मिनट ध्यान", type: "audio", lang: "hi", url: "#", thumb: "assets/images/meditation-hindi.jpg" },
    ];

    const renderResources = (resources) => {
        resourceGrid.innerHTML = '';
        resources.forEach(resource => {
            const card = document.createElement('div');
            card.classList.add('resource-card');
            card.innerHTML = `
                <img src="${resource.thumb}" alt="${resource.title}" class="resource-card-image">
                <div class="resource-card-content">
                    <h4>${resource.title}</h4>
                    <p>Type: ${resource.type.toUpperCase()} | Language: ${resource.lang.toUpperCase()}</p>
                    <div class="resource-actions">
                        <a href="${resource.url}" class="btn btn-primary" download>Download</a>
                        <button class="btn btn-secondary bookmark-btn">Bookmark</button>
                    </div>
                </div>
            `;
            resourceGrid.appendChild(card);
        });
    };

    const filterResources = () => {
        const type = typeFilter.value;
        const lang = langFilter.value;
        const filtered = mockResources.filter(resource => {
            const typeMatch = (type === 'all' || resource.type === type);
            const langMatch = (lang === 'all' || resource.lang === lang);
            return typeMatch && langMatch;
        });
        renderResources(filtered);
    };

    typeFilter.addEventListener('change', filterResources);
    langFilter.addEventListener('change', filterResources);

    // Initial render
    renderResources(mockResources);

    // Accessibility toggles
    let fontSizeIncreased = false;
    fontSizeToggle.addEventListener('click', () => {
        if (!fontSizeIncreased) {
            document.body.style.fontSize = '1.15rem';
            fontSizeToggle.textContent = 'Decrease Font';
        } else {
            document.body.style.fontSize = '1rem';
            fontSizeToggle.textContent = 'Increase Font';
        }
        fontSizeIncreased = !fontSizeIncreased;
    });

    ttsToggle.addEventListener('click', () => {
        const synth = window.speechSynthesis;
        const textToSpeak = "Text to speech enabled. This feature would read out resource descriptions.";
        if (synth.speaking) {
            synth.cancel();
            ttsToggle.textContent = 'Text-to-Speech';
        } else {
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            synth.speak(utterance);
            ttsToggle.textContent = 'Stop Speaking';
        }
    });
});