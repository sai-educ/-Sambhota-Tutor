require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint for Gemini AI (optional - users provide their own key)
app.post('/api/chat', async (req, res) => {
    const { message, apiKey } = req.body;

    if (!apiKey) {
        return res.status(400).json({
            error: 'Please provide your Gemini API key in settings'
        });
    }

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `You are a friendly and knowledgeable Tibetan language tutor. Help the learner understand Tibetan script, pronunciation, and basic vocabulary. Be encouraging and provide clear explanations.

User question: ${message}`
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 1024,
                    }
                })
            }
        );

        const data = await response.json();

        if (data.error) {
            return res.status(400).json({ error: data.error.message });
        }

        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text ||
                      'I could not generate a response. Please try again.';

        res.json({ reply });
    } catch (error) {
        console.error('Gemini API error:', error);
        res.status(500).json({
            error: 'Failed to connect to AI service. Please check your API key.'
        });
    }
});

// Serve index.html for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`
    ════════════════════════════════════════════

       སམ་བྷོ་ཊ་  Sambhota Tutor

       Server running at http://localhost:${PORT}

       Open your browser to start learning!

    ════════════════════════════════════════════
    `);
});
