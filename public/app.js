// Sambhota Tutor - Main Application JavaScript

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initAlphabetGrid();
    initVowelsGrid();
    initNumbersGrid();
    loadApiKey();
});

// Tab Navigation
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;

            // Update buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
}

// Populate Alphabet Grid
function initAlphabetGrid() {
    const grid = document.getElementById('alphabet-grid');
    if (!grid || typeof TIBETAN_ALPHABET === 'undefined') return;

    TIBETAN_ALPHABET.forEach(item => {
        const card = document.createElement('a');
        card.href = `alphabet.html?letter=${item.order}`;
        card.className = 'letter-card';
        card.innerHTML = `
            <span class="tibetan">${item.letter}</span>
            <span class="romanization">${item.romanization}</span>
        `;
        grid.appendChild(card);
    });
}

// Populate Vowels Grid
function initVowelsGrid() {
    const grid = document.getElementById('vowels-grid');
    if (!grid || typeof TIBETAN_VOWELS === 'undefined') return;

    TIBETAN_VOWELS.forEach(vowel => {
        const card = document.createElement('div');
        card.className = 'vowel-card';
        card.innerHTML = `
            <span class="tibetan-vowel">ཀ${vowel.letter}</span>
            <div class="romanization">${vowel.romanization}</div>
            <div class="description">${vowel.description}</div>
            <div style="margin-top: 0.5rem; color: var(--text-light); font-size: 0.9rem;">
                Pronunciation: ${vowel.pronunciation}
            </div>
        `;
        grid.appendChild(card);
    });
}

// Populate Numbers Grid
function initNumbersGrid() {
    const grid = document.getElementById('numbers-grid');
    if (!grid || typeof TIBETAN_NUMBERS === 'undefined') return;

    TIBETAN_NUMBERS.forEach(num => {
        const card = document.createElement('div');
        card.className = 'number-card';
        card.innerHTML = `
            <span class="tibetan-number">${num.number}</span>
            <div class="value">${num.value}</div>
            <div class="tibetan-word">${num.tibetanWord}</div>
            <div class="pronunciation">${num.pronunciation}</div>
        `;
        grid.appendChild(card);
    });
}

// API Key Management
function loadApiKey() {
    const apiKeyInput = document.getElementById('api-key');
    if (apiKeyInput) {
        const savedKey = localStorage.getItem('gemini_api_key');
        if (savedKey) {
            apiKeyInput.value = savedKey;
        }
        apiKeyInput.addEventListener('change', () => {
            localStorage.setItem('gemini_api_key', apiKeyInput.value);
        });
    }
}

function toggleSettings() {
    const settings = document.getElementById('api-settings');
    if (settings) {
        settings.classList.toggle('show');
    }
}

// Chat Functionality
async function sendMessage() {
    const input = document.getElementById('chat-input');
    const messages = document.getElementById('chat-messages');
    const apiKey = document.getElementById('api-key')?.value || localStorage.getItem('gemini_api_key');

    if (!input || !messages) return;

    const userMessage = input.value.trim();
    if (!userMessage) return;

    // Add user message
    const userDiv = document.createElement('div');
    userDiv.className = 'message user';
    userDiv.textContent = userMessage;
    messages.appendChild(userDiv);

    // Clear input
    input.value = '';

    // Scroll to bottom
    messages.scrollTop = messages.scrollHeight;

    if (!apiKey) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'message assistant';
        errorDiv.innerHTML = 'Please enter your Gemini API key in the settings above to use the AI tutor. You can get a free key from <a href="https://makersuite.google.com/app/apikey" target="_blank">Google AI Studio</a>.';
        messages.appendChild(errorDiv);
        messages.scrollTop = messages.scrollHeight;
        return;
    }

    // Show loading
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message assistant loading';
    loadingDiv.textContent = 'Thinking';
    messages.appendChild(loadingDiv);
    messages.scrollTop = messages.scrollHeight;

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: userMessage,
                apiKey: apiKey
            })
        });

        const data = await response.json();

        // Remove loading
        loadingDiv.remove();

        // Add response
        const assistantDiv = document.createElement('div');
        assistantDiv.className = 'message assistant';
        assistantDiv.textContent = data.error || data.reply;
        messages.appendChild(assistantDiv);
    } catch (error) {
        loadingDiv.remove();
        const errorDiv = document.createElement('div');
        errorDiv.className = 'message assistant';
        errorDiv.textContent = 'Sorry, there was an error connecting to the AI service. Please check your API key and try again.';
        messages.appendChild(errorDiv);
    }

    messages.scrollTop = messages.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Utility Functions
function getLetterByOrder(order) {
    if (typeof TIBETAN_ALPHABET === 'undefined') return null;
    return TIBETAN_ALPHABET.find(item => item.order === order);
}
