document.addEventListener('DOMContentLoaded', async () => {
    const phqQuestionsContainer = document.getElementById('phq-questions');
    const gadQuestionsContainer = document.getElementById('gad-questions');
    const submitBtn = document.getElementById('submit-btn');
    const resultBox = document.getElementById('result-box');
    const totalScoreSpan = document.getElementById('total-score');
    const resultMessageP = document.getElementById('result-message');
    const escalateBtn = document.getElementById('escalate-to-counselor');

    const phqQuestions = [
        "Little interest or pleasure in doing things?",
        "Feeling down, depressed, or hopeless?",
        "Trouble falling or staying asleep, or sleeping too much?",
        "Feeling tired or having little energy?",
        "Poor appetite or overeating?",
        "Feeling bad about yourself—or that you are a failure or have let yourself or your family down?",
        "Trouble concentrating on things, such as reading the newspaper or watching television?",
        "Moving or speaking so slowly that other people could have noticed? Or the opposite—being so fidgety or restless that you have been moving around a lot more than usual?",
        "Thoughts that you would be better off dead or of hurting yourself in some way?"
    ];

    const gadQuestions = [
        "Feeling nervous, anxious, or on edge?",
        "Not being able to stop or control worrying?",
        "Worrying too much about different things?",
        "Trouble relaxing?",
        "Being so restless that it's hard to sit still?",
        "Becoming easily annoyed or irritable?",
        "Feeling afraid as if something awful might happen?"
    ];

    const choices = [
        "Not at all (0)",
        "Several days (1)",
        "More than half the days (2)",
        "Nearly every day (3)"
    ];

    // Function to render questions
    const renderQuestions = (questions, container, prefix) => {
        questions.forEach((q, index) => {
            const questionItem = document.createElement('div');
            questionItem.classList.add('question-item');
            questionItem.innerHTML = `<p>${index + 1}. ${q}</p>
                <div class="radio-group">
                    ${choices.map((choice, cIndex) => `
                        <label>
                            <input type="radio" name="${prefix}-${index}" value="${cIndex}" required>
                            ${choice}
                        </label>
                    `).join('')}
                </div>`;
            container.appendChild(questionItem);
        });
    };

    renderQuestions(phqQuestions, phqQuestionsContainer, 'phq');
    renderQuestions(gadQuestions, gadQuestionsContainer, 'gad');

    // Score calculation logic
    const calculateScore = () => {
        let totalScore = 0;
        const allRadios = document.querySelectorAll('input[type="radio"]:checked');
        allRadios.forEach(radio => {
            totalScore += parseInt(radio.value, 10);
        });
        return totalScore;
    };

    const updateProgressBar = () => {
        const answeredQuestions = document.querySelectorAll('input[type="radio"]:checked').length;
        const totalQuestions = phqQuestions.length + gadQuestions.length;
        const progress = (answeredQuestions / totalQuestions) * 100;
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    };

    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', updateProgressBar);
    });

    document.getElementById('phq-gad-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const score = calculateScore();
        totalScoreSpan.textContent = score;
        let message = '';
        let escalationWarning = '';

        if (score >= 20) {
            message = "Your total score suggests severe symptoms. It is strongly recommended that you seek immediate professional help.";
            escalationWarning = "⚠️ Urgent: Please consider talking to a counselor.";
            escalateBtn.classList.remove('hidden');
        } else if (score >= 15) {
            message = "Your score indicates moderately severe symptoms. Talking to a counselor could be very beneficial.";
            escalationWarning = "You can book an appointment with a counselor to discuss your results.";
            escalateBtn.classList.remove('hidden');
        } else if (score >= 10) {
            message = "Your score suggests moderate symptoms. You may find talking to a counselor or using self-help resources helpful.";
            escalateBtn.classList.add('hidden'); // or change visibility logic
        } else {
            message = "Your score suggests minimal to mild symptoms. Keep an eye on your feelings and use our resources for support.";
            escalateBtn.classList.add('hidden');
        }

        resultMessageP.textContent = message;
        document.getElementById('escalation-warning').textContent = escalationWarning;
        resultBox.classList.remove('hidden');
        
        // Scroll to the result
        resultBox.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('retake-btn').addEventListener('click', () => {
        document.getElementById('phq-gad-form').reset();
        resultBox.classList.add('hidden');
        updateProgressBar();
    });

    escalateBtn.addEventListener('click', () => {
        window.location.href = 'booking.html';
    });
});