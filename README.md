# སམ་བྷོ་ཊ Sambhota Tutor

An **Open Education Resource** for learning the Tibetan script (alphabet and numbers). Built in service of **Open Science** to make Tibetan language education accessible to learners of all ages worldwide.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)

## Overview

Sambhota Tutor is a free, interactive tutoring system for learning the Tibetan writing system. Named after **Thonmi Sambhota** (ཐོན་མི་སམ་བྷོ་ཊ), the 7th-century scholar who created the Tibetan script, this project aims to preserve and teach this beautiful writing system.

### Features

- **30 Consonants** - Complete Tibetan alphabet with pronunciation guides
- **4 Vowel Signs** - Learn how vowel markers modify sounds
- **Numbers 0-10** - Tibetan numerals with spoken forms
- **AI Tutor** - Optional Gemini-powered assistant for questions
- **Mobile Responsive** - Learn on any device
- **No Account Required** - Start learning immediately

## Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sambhota-tutor.git
cd sambhota-tutor

# Install dependencies
npm install

# Start the server
npm start
```

Open your browser to `http://localhost:3000`

## Using the AI Tutor

The AI tutor feature uses Google's Gemini API, which offers a free tier.

### Getting a Free API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your new API key

### Configuring the API Key

1. Go to the Learn page
2. Click "API Settings"
3. Paste your API key
4. Your key is stored locally in your browser only

**Privacy Note**: Your API key is never sent to our servers. It's stored in your browser's localStorage and sent directly to Google's API.

## Deploying to Vercel

### Option 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/sambhota-tutor)

### Option 2: Manual Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Vercel Configuration

Create a `vercel.json` file (already included):

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

## Project Structure

```
sambhota-tutor/
├── server.js           # Express server
├── package.json        # Dependencies
├── vercel.json         # Vercel deployment config
├── public/
│   ├── index.html      # Home page
│   ├── learn.html      # Learning interface
│   ├── alphabet.html   # Letter detail page
│   ├── about.html      # About page
│   ├── style.css       # Styles with Tibetan fonts
│   ├── data.js         # Tibetan alphabet/numbers data
│   └── app.js          # Frontend JavaScript
└── README.md
```

## The Tibetan Alphabet

The Tibetan script consists of:

| Component | Count | Example |
|-----------|-------|---------|
| Consonants | 30 | ཀ ཁ ག ང |
| Vowel Signs | 4 | ི ུ ེ ོ |
| Numbers | 10 | ༡ ༢ ༣ ༤ |

Each consonant has an inherent 'a' vowel sound. Vowel signs modify this sound when placed above or below the consonant.

## Contributing

We welcome contributions! Here's how you can help:

- **Native Speakers**: Help verify pronunciation guides
- **Educators**: Suggest pedagogical improvements
- **Developers**: Submit bug fixes and features
- **Translators**: Help translate the interface

### Development

```bash
# Clone and install
git clone https://github.com/yourusername/sambhota-tutor.git
cd sambhota-tutor
npm install

# Run in development
npm run dev
```

## Technology Stack

- **Backend**: Node.js, Express
- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Font**: Noto Sans Tibetan (Google Fonts)
- **AI**: Google Gemini API (optional)
- **Hosting**: Vercel-ready

## License

MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgments

- **Thonmi Sambhota** - Creator of the Tibetan script (7th century)
- **Google** - Noto Sans Tibetan font
- **Open Education Community** - For promoting accessible learning

---

བཀྲ་ཤིས་བདེ་ལེགས། **Tashi Delek!** May your learning be auspicious.
