// Sambhota Tutor - Tracing Practice Module
// Touch and mouse-friendly character tracing with stroke guides

// ============================================
// STROKE PATH DATA FOR TIBETAN CHARACTERS
// ============================================
// Each stroke is defined as an array of points {x, y} normalized to 0-100 coordinate space
// Strokes include startPoint number for display

const STROKE_DATA = {
    // Consonants
    'ཀ': {
        strokes: [
            // Stroke 1: Top horizontal line left to right
            { points: [{x:15,y:20}, {x:50,y:20}, {x:85,y:20}], start: 1 },
            // Stroke 2: Left vertical with curve at top
            { points: [{x:20,y:20}, {x:18,y:25}, {x:15,y:35}, {x:15,y:50}, {x:15,y:70}, {x:15,y:85}], start: 2 },
            // Stroke 3: Middle part curving down
            { points: [{x:35,y:20}, {x:33,y:30}, {x:30,y:45}, {x:35,y:55}, {x:40,y:65}, {x:40,y:85}], start: 3 },
            // Stroke 4: Right vertical line
            { points: [{x:70,y:20}, {x:70,y:40}, {x:70,y:60}, {x:70,y:85}], start: 4 }
        ]
    },
    'ཁ': {
        strokes: [
            { points: [{x:15,y:20}, {x:50,y:20}, {x:85,y:20}], start: 1 },
            { points: [{x:20,y:20}, {x:18,y:35}, {x:15,y:50}, {x:15,y:70}, {x:15,y:85}], start: 2 },
            { points: [{x:35,y:20}, {x:33,y:35}, {x:35,y:50}, {x:40,y:65}, {x:40,y:85}], start: 3 },
            { points: [{x:70,y:20}, {x:70,y:50}, {x:70,y:85}], start: 4 },
            { points: [{x:50,y:35}, {x:55,y:40}, {x:60,y:35}], start: 5 }
        ]
    },
    'ག': {
        strokes: [
            { points: [{x:15,y:20}, {x:50,y:20}, {x:85,y:20}], start: 1 },
            { points: [{x:20,y:20}, {x:15,y:30}, {x:12,y:45}, {x:18,y:55}, {x:25,y:50}], start: 2 },
            { points: [{x:45,y:20}, {x:45,y:50}, {x:45,y:85}], start: 3 },
            { points: [{x:75,y:20}, {x:75,y:50}, {x:75,y:85}], start: 4 }
        ]
    },
    'ང': {
        strokes: [
            { points: [{x:20,y:25}, {x:30,y:20}, {x:50,y:20}, {x:70,y:20}, {x:80,y:25}], start: 1 },
            { points: [{x:25,y:25}, {x:20,y:40}, {x:25,y:55}, {x:35,y:50}], start: 2 },
            { points: [{x:50,y:20}, {x:50,y:40}, {x:50,y:60}, {x:50,y:85}], start: 3 }
        ]
    },
    'ཅ': {
        strokes: [
            { points: [{x:20,y:20}, {x:50,y:20}, {x:80,y:20}], start: 1 },
            { points: [{x:25,y:20}, {x:20,y:35}, {x:25,y:50}, {x:35,y:55}, {x:45,y:50}], start: 2 },
            { points: [{x:55,y:20}, {x:55,y:45}, {x:55,y:70}, {x:55,y:85}], start: 3 }
        ]
    },
    'ཆ': {
        strokes: [
            { points: [{x:20,y:20}, {x:50,y:20}, {x:80,y:20}], start: 1 },
            { points: [{x:25,y:20}, {x:20,y:35}, {x:25,y:50}, {x:35,y:55}, {x:45,y:50}], start: 2 },
            { points: [{x:55,y:20}, {x:55,y:45}, {x:55,y:85}], start: 3 },
            { points: [{x:65,y:30}, {x:70,y:35}, {x:75,y:30}], start: 4 }
        ]
    },
    'ཇ': {
        strokes: [
            { points: [{x:20,y:20}, {x:50,y:20}, {x:80,y:20}], start: 1 },
            { points: [{x:25,y:20}, {x:20,y:40}, {x:25,y:55}, {x:40,y:50}], start: 2 },
            { points: [{x:55,y:20}, {x:55,y:50}, {x:55,y:85}], start: 3 },
            { points: [{x:35,y:60}, {x:40,y:65}, {x:45,y:60}], start: 4 }
        ]
    },
    'ཉ': {
        strokes: [
            { points: [{x:15,y:25}, {x:25,y:20}, {x:50,y:20}, {x:75,y:20}, {x:85,y:25}], start: 1 },
            { points: [{x:20,y:25}, {x:15,y:40}, {x:20,y:55}, {x:35,y:50}], start: 2 },
            { points: [{x:50,y:20}, {x:50,y:50}], start: 3 },
            { points: [{x:45,y:50}, {x:50,y:60}, {x:55,y:50}], start: 4 }
        ]
    },
    'ཏ': {
        strokes: [
            { points: [{x:20,y:25}, {x:50,y:20}, {x:80,y:25}], start: 1 },
            { points: [{x:50,y:20}, {x:50,y:45}, {x:50,y:70}, {x:50,y:85}], start: 2 }
        ]
    },
    'ཐ': {
        strokes: [
            { points: [{x:20,y:25}, {x:50,y:20}, {x:80,y:25}], start: 1 },
            { points: [{x:50,y:20}, {x:50,y:45}, {x:50,y:85}], start: 2 },
            { points: [{x:60,y:30}, {x:65,y:35}, {x:70,y:30}], start: 3 }
        ]
    },
    'ད': {
        strokes: [
            { points: [{x:20,y:25}, {x:50,y:20}, {x:80,y:25}], start: 1 },
            { points: [{x:35,y:20}, {x:30,y:40}, {x:35,y:55}, {x:50,y:50}], start: 2 },
            { points: [{x:60,y:20}, {x:60,y:50}, {x:60,y:85}], start: 3 }
        ]
    },
    'ན': {
        strokes: [
            { points: [{x:20,y:25}, {x:50,y:20}, {x:80,y:25}], start: 1 },
            { points: [{x:30,y:20}, {x:25,y:40}, {x:30,y:55}, {x:45,y:50}], start: 2 },
            { points: [{x:55,y:20}, {x:55,y:50}, {x:55,y:85}], start: 3 }
        ]
    },
    'པ': {
        strokes: [
            { points: [{x:20,y:20}, {x:50,y:20}, {x:80,y:20}], start: 1 },
            { points: [{x:30,y:20}, {x:30,y:45}, {x:30,y:70}, {x:30,y:85}], start: 2 },
            { points: [{x:60,y:20}, {x:60,y:45}, {x:60,y:70}, {x:60,y:85}], start: 3 }
        ]
    },
    'ཕ': {
        strokes: [
            { points: [{x:20,y:20}, {x:50,y:20}, {x:80,y:20}], start: 1 },
            { points: [{x:30,y:20}, {x:30,y:50}, {x:30,y:85}], start: 2 },
            { points: [{x:60,y:20}, {x:60,y:50}, {x:60,y:85}], start: 3 },
            { points: [{x:40,y:30}, {x:45,y:35}, {x:50,y:30}], start: 4 }
        ]
    },
    'བ': {
        strokes: [
            { points: [{x:20,y:20}, {x:50,y:20}, {x:80,y:20}], start: 1 },
            { points: [{x:25,y:20}, {x:20,y:35}, {x:25,y:50}, {x:40,y:45}], start: 2 },
            { points: [{x:55,y:20}, {x:55,y:50}, {x:55,y:85}], start: 3 }
        ]
    },
    'མ': {
        strokes: [
            { points: [{x:15,y:20}, {x:50,y:20}, {x:85,y:20}], start: 1 },
            { points: [{x:25,y:20}, {x:20,y:40}, {x:25,y:55}, {x:45,y:50}], start: 2 },
            { points: [{x:65,y:20}, {x:70,y:40}, {x:65,y:55}, {x:45,y:50}], start: 3 }
        ]
    },
    'ཙ': {
        strokes: [
            { points: [{x:20,y:20}, {x:50,y:20}, {x:80,y:20}], start: 1 },
            { points: [{x:30,y:20}, {x:25,y:40}, {x:30,y:55}], start: 2 },
            { points: [{x:50,y:20}, {x:50,y:55}, {x:50,y:85}], start: 3 },
            { points: [{x:30,y:55}, {x:40,y:60}, {x:50,y:55}], start: 4 }
        ]
    },
    'ཚ': {
        strokes: [
            { points: [{x:20,y:20}, {x:50,y:20}, {x:80,y:20}], start: 1 },
            { points: [{x:30,y:20}, {x:25,y:40}, {x:30,y:55}], start: 2 },
            { points: [{x:50,y:20}, {x:50,y:55}, {x:50,y:85}], start: 3 },
            { points: [{x:30,y:55}, {x:40,y:60}, {x:50,y:55}], start: 4 },
            { points: [{x:60,y:30}, {x:65,y:35}, {x:70,y:30}], start: 5 }
        ]
    },
    'ཛ': {
        strokes: [
            { points: [{x:20,y:20}, {x:50,y:20}, {x:80,y:20}], start: 1 },
            { points: [{x:30,y:20}, {x:25,y:40}, {x:30,y:55}], start: 2 },
            { points: [{x:50,y:20}, {x:50,y:55}, {x:50,y:85}], start: 3 },
            { points: [{x:30,y:55}, {x:40,y:60}, {x:50,y:55}], start: 4 },
            { points: [{x:35,y:70}, {x:40,y:75}, {x:45,y:70}], start: 5 }
        ]
    },
    'ཝ': {
        strokes: [
            { points: [{x:25,y:30}, {x:30,y:25}, {x:50,y:25}, {x:70,y:25}, {x:75,y:30}], start: 1 },
            { points: [{x:30,y:30}, {x:25,y:50}, {x:35,y:65}, {x:50,y:55}], start: 2 },
            { points: [{x:70,y:30}, {x:75,y:50}, {x:65,y:65}, {x:50,y:55}], start: 3 },
            { points: [{x:50,y:55}, {x:50,y:70}, {x:50,y:85}], start: 4 }
        ]
    },
    'ཞ': {
        strokes: [
            { points: [{x:20,y:20}, {x:50,y:20}, {x:80,y:20}], start: 1 },
            { points: [{x:25,y:20}, {x:20,y:40}, {x:30,y:55}, {x:45,y:45}], start: 2 },
            { points: [{x:55,y:20}, {x:55,y:50}, {x:55,y:85}], start: 3 },
            { points: [{x:30,y:35}, {x:35,y:30}, {x:40,y:35}], start: 4 }
        ]
    },
    'ཟ': {
        strokes: [
            { points: [{x:20,y:20}, {x:50,y:20}, {x:80,y:20}], start: 1 },
            { points: [{x:25,y:20}, {x:20,y:40}, {x:30,y:55}, {x:45,y:50}], start: 2 },
            { points: [{x:55,y:20}, {x:55,y:50}, {x:55,y:85}], start: 3 }
        ]
    },
    'འ': {
        strokes: [
            { points: [{x:30,y:25}, {x:50,y:20}, {x:70,y:25}], start: 1 },
            { points: [{x:35,y:25}, {x:30,y:45}, {x:40,y:60}, {x:55,y:50}], start: 2 },
            { points: [{x:60,y:25}, {x:60,y:50}, {x:60,y:70}], start: 3 },
            { points: [{x:55,y:70}, {x:60,y:80}, {x:65,y:70}], start: 4 }
        ]
    },
    'ཡ': {
        strokes: [
            { points: [{x:20,y:20}, {x:50,y:20}, {x:80,y:20}], start: 1 },
            { points: [{x:25,y:20}, {x:25,y:50}, {x:25,y:85}], start: 2 },
            { points: [{x:25,y:50}, {x:40,y:45}, {x:55,y:50}], start: 3 },
            { points: [{x:55,y:20}, {x:55,y:50}, {x:55,y:85}], start: 4 }
        ]
    },
    'ར': {
        strokes: [
            { points: [{x:25,y:25}, {x:50,y:20}, {x:75,y:25}], start: 1 },
            { points: [{x:50,y:20}, {x:45,y:40}, {x:50,y:55}, {x:60,y:50}], start: 2 },
            { points: [{x:50,y:55}, {x:50,y:70}, {x:50,y:85}], start: 3 }
        ]
    },
    'ལ': {
        strokes: [
            { points: [{x:25,y:25}, {x:50,y:20}, {x:75,y:25}], start: 1 },
            { points: [{x:40,y:20}, {x:35,y:45}, {x:40,y:60}, {x:55,y:55}], start: 2 },
            { points: [{x:60,y:20}, {x:60,y:55}, {x:60,y:85}], start: 3 }
        ]
    },
    'ཤ': {
        strokes: [
            { points: [{x:20,y:20}, {x:50,y:20}, {x:80,y:20}], start: 1 },
            { points: [{x:30,y:20}, {x:25,y:40}, {x:35,y:55}, {x:50,y:45}], start: 2 },
            { points: [{x:60,y:20}, {x:60,y:50}, {x:60,y:85}], start: 3 },
            { points: [{x:30,y:30}, {x:35,y:25}, {x:40,y:30}], start: 4 }
        ]
    },
    'ས': {
        strokes: [
            { points: [{x:20,y:20}, {x:50,y:20}, {x:80,y:20}], start: 1 },
            { points: [{x:30,y:20}, {x:25,y:40}, {x:35,y:55}, {x:50,y:50}], start: 2 },
            { points: [{x:60,y:20}, {x:60,y:50}, {x:60,y:85}], start: 3 }
        ]
    },
    'ཧ': {
        strokes: [
            { points: [{x:20,y:20}, {x:50,y:20}, {x:80,y:20}], start: 1 },
            { points: [{x:30,y:20}, {x:30,y:50}, {x:30,y:85}], start: 2 },
            { points: [{x:30,y:50}, {x:45,y:45}, {x:60,y:50}], start: 3 },
            { points: [{x:60,y:20}, {x:60,y:50}, {x:60,y:85}], start: 4 }
        ]
    },
    'ཨ': {
        strokes: [
            { points: [{x:25,y:30}, {x:50,y:25}, {x:75,y:30}], start: 1 },
            { points: [{x:35,y:30}, {x:30,y:50}, {x:40,y:65}, {x:55,y:55}], start: 2 },
            { points: [{x:65,y:30}, {x:65,y:55}, {x:65,y:80}], start: 3 }
        ]
    },
    // Vowels (shown with base consonant ཀ)
    'ཀི': {
        strokes: [
            { points: [{x:15,y:25}, {x:50,y:25}, {x:85,y:25}], start: 1 },
            { points: [{x:20,y:25}, {x:15,y:50}, {x:15,y:85}], start: 2 },
            { points: [{x:40,y:25}, {x:40,y:50}, {x:40,y:85}], start: 3 },
            { points: [{x:70,y:25}, {x:70,y:50}, {x:70,y:85}], start: 4 },
            { points: [{x:50,y:10}, {x:55,y:15}, {x:50,y:20}], start: 5 }
        ]
    },
    'ཀུ': {
        strokes: [
            { points: [{x:15,y:20}, {x:50,y:20}, {x:85,y:20}], start: 1 },
            { points: [{x:20,y:20}, {x:15,y:50}, {x:15,y:75}], start: 2 },
            { points: [{x:40,y:20}, {x:40,y:50}, {x:40,y:75}], start: 3 },
            { points: [{x:70,y:20}, {x:70,y:50}, {x:70,y:75}], start: 4 },
            { points: [{x:35,y:80}, {x:40,y:90}, {x:45,y:80}], start: 5 }
        ]
    },
    'ཀེ': {
        strokes: [
            { points: [{x:15,y:25}, {x:50,y:25}, {x:85,y:25}], start: 1 },
            { points: [{x:20,y:25}, {x:15,y:50}, {x:15,y:85}], start: 2 },
            { points: [{x:40,y:25}, {x:40,y:50}, {x:40,y:85}], start: 3 },
            { points: [{x:70,y:25}, {x:70,y:50}, {x:70,y:85}], start: 4 },
            { points: [{x:45,y:10}, {x:50,y:5}, {x:55,y:10}], start: 5 }
        ]
    },
    'ཀོ': {
        strokes: [
            { points: [{x:15,y:25}, {x:50,y:25}, {x:85,y:25}], start: 1 },
            { points: [{x:20,y:25}, {x:15,y:50}, {x:15,y:85}], start: 2 },
            { points: [{x:40,y:25}, {x:40,y:50}, {x:40,y:85}], start: 3 },
            { points: [{x:70,y:25}, {x:70,y:50}, {x:70,y:85}], start: 4 },
            { points: [{x:45,y:8}, {x:50,y:5}, {x:55,y:8}, {x:55,y:15}, {x:50,y:18}, {x:45,y:15}, {x:45,y:8}], start: 5 }
        ]
    },
    // Numbers
    '༠': {
        strokes: [
            { points: [{x:30,y:20}, {x:50,y:15}, {x:70,y:20}, {x:75,y:40}, {x:70,y:60}, {x:50,y:70}, {x:30,y:60}, {x:25,y:40}, {x:30,y:20}], start: 1 }
        ]
    },
    '༡': {
        strokes: [
            { points: [{x:40,y:20}, {x:50,y:15}, {x:50,y:40}, {x:50,y:70}], start: 1 }
        ]
    },
    '༢': {
        strokes: [
            { points: [{x:30,y:25}, {x:50,y:15}, {x:70,y:25}, {x:50,y:45}, {x:30,y:65}, {x:70,y:70}], start: 1 }
        ]
    },
    '༣': {
        strokes: [
            { points: [{x:30,y:20}, {x:50,y:15}, {x:65,y:25}, {x:50,y:40}], start: 1 },
            { points: [{x:50,y:40}, {x:65,y:55}, {x:50,y:70}, {x:30,y:65}], start: 2 }
        ]
    },
    '༤': {
        strokes: [
            { points: [{x:60,y:15}, {x:30,y:45}, {x:70,y:45}], start: 1 },
            { points: [{x:55,y:15}, {x:55,y:45}, {x:55,y:70}], start: 2 }
        ]
    },
    '༥': {
        strokes: [
            { points: [{x:65,y:15}, {x:35,y:15}, {x:30,y:40}, {x:50,y:35}, {x:65,y:50}, {x:50,y:70}, {x:30,y:60}], start: 1 }
        ]
    },
    '༦': {
        strokes: [
            { points: [{x:60,y:20}, {x:45,y:15}, {x:30,y:30}, {x:30,y:50}, {x:45,y:70}, {x:60,y:55}, {x:50,y:40}, {x:35,y:45}], start: 1 }
        ]
    },
    '༧': {
        strokes: [
            { points: [{x:30,y:15}, {x:65,y:15}, {x:45,y:45}, {x:45,y:70}], start: 1 }
        ]
    },
    '༨': {
        strokes: [
            { points: [{x:50,y:20}, {x:35,y:30}, {x:50,y:40}, {x:65,y:30}, {x:50,y:20}], start: 1 },
            { points: [{x:50,y:40}, {x:30,y:55}, {x:50,y:70}, {x:70,y:55}, {x:50,y:40}], start: 2 }
        ]
    },
    '༩': {
        strokes: [
            { points: [{x:40,y:65}, {x:55,y:70}, {x:70,y:55}, {x:70,y:35}, {x:55,y:15}, {x:40,y:30}, {x:50,y:45}, {x:65,y:40}], start: 1 }
        ]
    }
};

// ============================================
// CANVAS AND STATE VARIABLES
// ============================================
let traceCanvas, guideCanvas, traceCtx, guideCtx;
let isDrawing = false;
let currentChar = 'ཀ';
let currentType = 'consonants';
let currentIndex = 0;
let showGuide = true;
let pathTolerance = 25; // Pixels tolerance for path detection

// Character lists
const consonants = ['ཀ','ཁ','ག','ང','ཅ','ཆ','ཇ','ཉ','ཏ','ཐ','ད','ན','པ','ཕ','བ','མ','ཙ','ཚ','ཛ','ཝ','ཞ','ཟ','འ','ཡ','ར','ལ','ཤ','ས','ཧ','ཨ'];
const vowels = ['ཀི', 'ཀུ', 'ཀེ', 'ཀོ'];
const numbers = ['༠','༡','༢','༣','༤','༥','༦','༧','༨','༩'];

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initCanvas();
    initCharacterGrids();
    initTabSwitching();
    selectCharacter(currentChar, currentType, 0);
});

function initCanvas() {
    traceCanvas = document.getElementById('traceCanvas');
    guideCanvas = document.getElementById('guideCanvas');

    if (!traceCanvas || !guideCanvas) return;

    traceCtx = traceCanvas.getContext('2d');
    guideCtx = guideCanvas.getContext('2d');

    resizeCanvases();
    window.addEventListener('resize', resizeCanvases);

    // Mouse events
    traceCanvas.addEventListener('mousedown', startDrawing);
    traceCanvas.addEventListener('mousemove', draw);
    traceCanvas.addEventListener('mouseup', stopDrawing);
    traceCanvas.addEventListener('mouseleave', stopDrawing);

    // Touch events
    traceCanvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    traceCanvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    traceCanvas.addEventListener('touchend', handleTouchEnd);
    traceCanvas.addEventListener('touchcancel', handleTouchEnd);
}

function resizeCanvases() {
    const wrapper = document.getElementById('canvasWrapper');
    if (!wrapper) return;

    const rect = wrapper.getBoundingClientRect();
    const size = Math.min(rect.width, rect.height);

    [traceCanvas, guideCanvas].forEach(canvas => {
        canvas.width = size * window.devicePixelRatio;
        canvas.height = size * window.devicePixelRatio;
        canvas.style.width = size + 'px';
        canvas.style.height = size + 'px';
    });

    traceCtx.scale(window.devicePixelRatio, window.devicePixelRatio);
    guideCtx.scale(window.devicePixelRatio, window.devicePixelRatio);

    drawGuide();
}

// ============================================
// CHARACTER GRID INITIALIZATION
// ============================================
function initCharacterGrids() {
    const consonantsGrid = document.getElementById('consonants-grid');
    const vowelsGrid = document.getElementById('vowels-grid');
    const numbersGrid = document.getElementById('numbers-grid');

    // Populate consonants
    consonants.forEach((char, index) => {
        const btn = document.createElement('button');
        btn.className = 'char-btn' + (index === 0 ? ' active' : '');
        btn.textContent = char;
        btn.onclick = () => selectCharacter(char, 'consonants', index);
        consonantsGrid.appendChild(btn);
    });

    // Populate vowels
    vowels.forEach((char, index) => {
        const btn = document.createElement('button');
        btn.className = 'char-btn';
        btn.textContent = char;
        btn.onclick = () => selectCharacter(char, 'vowels', index);
        vowelsGrid.appendChild(btn);
    });

    // Populate numbers
    numbers.forEach((char, index) => {
        const btn = document.createElement('button');
        btn.className = 'char-btn';
        btn.textContent = char;
        btn.onclick = () => selectCharacter(char, 'numbers', index);
        numbersGrid.appendChild(btn);
    });
}

function initTabSwitching() {
    const tabs = document.querySelectorAll('.selector-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const type = tab.dataset.type;
            document.getElementById('consonants-grid').style.display = type === 'consonants' ? 'grid' : 'none';
            document.getElementById('vowels-grid').style.display = type === 'vowels' ? 'grid' : 'none';
            document.getElementById('numbers-grid').style.display = type === 'numbers' ? 'grid' : 'none';

            // Select first character of new type
            const list = type === 'consonants' ? consonants : type === 'vowels' ? vowels : numbers;
            selectCharacter(list[0], type, 0);
        });
    });
}

// ============================================
// CHARACTER SELECTION
// ============================================
function selectCharacter(char, type, index) {
    currentChar = char;
    currentType = type;
    currentIndex = index;

    // Update UI
    document.getElementById('currentChar').textContent = char;

    const list = type === 'consonants' ? consonants : type === 'vowels' ? vowels : numbers;
    const typeLabel = type === 'consonants' ? 'Consonant' : type === 'vowels' ? 'Vowel' : 'Number';

    // Get romanization if available
    let info = '';
    if (type === 'consonants' && typeof TIBETAN_ALPHABET !== 'undefined') {
        const letterData = TIBETAN_ALPHABET.find(l => l.letter === char);
        if (letterData) {
            info = `${letterData.romanization} - ${typeLabel} ${index + 1} of ${list.length}`;
        }
    } else if (type === 'numbers' && typeof TIBETAN_NUMBERS !== 'undefined') {
        const numData = TIBETAN_NUMBERS.find(n => n.number === char);
        if (numData) {
            info = `${numData.value} (${numData.pronunciation}) - ${typeLabel} ${index + 1} of ${list.length}`;
        }
    } else {
        info = `${typeLabel} ${index + 1} of ${list.length}`;
    }
    document.getElementById('currentCharInfo').textContent = info;

    // Update active button
    document.querySelectorAll('.char-btn').forEach(btn => btn.classList.remove('active'));
    const grids = ['consonants-grid', 'vowels-grid', 'numbers-grid'];
    grids.forEach(gridId => {
        const grid = document.getElementById(gridId);
        const buttons = grid.querySelectorAll('.char-btn');
        buttons.forEach(btn => {
            if (btn.textContent === char) btn.classList.add('active');
        });
    });

    // Update navigation
    updateNavigation();

    // Clear and redraw
    clearCanvas();
}

function updateNavigation() {
    const list = currentType === 'consonants' ? consonants : currentType === 'vowels' ? vowels : numbers;
    const prevBtn = document.getElementById('prevChar');
    const nextBtn = document.getElementById('nextChar');
    const prevDisplay = document.getElementById('prevCharDisplay');
    const nextDisplay = document.getElementById('nextCharDisplay');

    if (currentIndex > 0) {
        prevBtn.disabled = false;
        prevDisplay.textContent = list[currentIndex - 1];
    } else {
        prevBtn.disabled = true;
        prevDisplay.textContent = '';
    }

    if (currentIndex < list.length - 1) {
        nextBtn.disabled = false;
        nextDisplay.textContent = list[currentIndex + 1];
    } else {
        nextBtn.disabled = true;
        nextDisplay.textContent = '';
    }
}

function navigateChar(direction) {
    const list = currentType === 'consonants' ? consonants : currentType === 'vowels' ? vowels : numbers;
    const newIndex = currentIndex + direction;

    if (newIndex >= 0 && newIndex < list.length) {
        selectCharacter(list[newIndex], currentType, newIndex);
    }
}

// ============================================
// GUIDE DRAWING
// ============================================
function drawGuide() {
    if (!guideCtx) return;

    const size = guideCanvas.width / window.devicePixelRatio;
    guideCtx.clearRect(0, 0, size, size);

    if (!showGuide) return;

    const strokeData = STROKE_DATA[currentChar];
    if (!strokeData) {
        // Fallback: draw the character as faint text
        drawCharacterFallback(size);
        return;
    }

    // Draw each stroke
    strokeData.strokes.forEach((stroke, strokeIndex) => {
        drawStrokePath(stroke, size);
        drawStrokeNumber(stroke, size, strokeIndex);
    });
}

function drawStrokePath(stroke, size) {
    const points = stroke.points;
    if (points.length < 2) return;

    guideCtx.save();

    // Draw dotted line path
    guideCtx.strokeStyle = '#4B5563';
    guideCtx.lineWidth = 3;
    guideCtx.setLineDash([8, 8]);
    guideCtx.lineCap = 'round';
    guideCtx.lineJoin = 'round';

    guideCtx.beginPath();
    guideCtx.moveTo(points[0].x * size / 100, points[0].y * size / 100);

    for (let i = 1; i < points.length; i++) {
        guideCtx.lineTo(points[i].x * size / 100, points[i].y * size / 100);
    }
    guideCtx.stroke();

    // Draw arrow at end
    if (points.length >= 2) {
        const lastPoint = points[points.length - 1];
        const prevPoint = points[points.length - 2];
        drawArrow(
            prevPoint.x * size / 100, prevPoint.y * size / 100,
            lastPoint.x * size / 100, lastPoint.y * size / 100
        );
    }

    guideCtx.restore();
}

function drawArrow(fromX, fromY, toX, toY) {
    const angle = Math.atan2(toY - fromY, toX - fromX);
    const arrowLength = 12;

    guideCtx.save();
    guideCtx.setLineDash([]);
    guideCtx.strokeStyle = '#4B5563';
    guideCtx.fillStyle = '#4B5563';
    guideCtx.lineWidth = 2;

    guideCtx.beginPath();
    guideCtx.moveTo(toX, toY);
    guideCtx.lineTo(
        toX - arrowLength * Math.cos(angle - Math.PI / 6),
        toY - arrowLength * Math.sin(angle - Math.PI / 6)
    );
    guideCtx.lineTo(
        toX - arrowLength * Math.cos(angle + Math.PI / 6),
        toY - arrowLength * Math.sin(angle + Math.PI / 6)
    );
    guideCtx.closePath();
    guideCtx.fill();

    guideCtx.restore();
}

function drawStrokeNumber(stroke, size, strokeIndex) {
    const startPoint = stroke.points[0];
    const x = startPoint.x * size / 100;
    const y = startPoint.y * size / 100;

    guideCtx.save();

    // Draw circle background
    guideCtx.beginPath();
    guideCtx.arc(x, y, 12, 0, Math.PI * 2);
    guideCtx.fillStyle = '#FFFFFF';
    guideCtx.fill();
    guideCtx.strokeStyle = '#4B5563';
    guideCtx.lineWidth = 2;
    guideCtx.setLineDash([]);
    guideCtx.stroke();

    // Draw number
    guideCtx.fillStyle = '#4B5563';
    guideCtx.font = 'bold 14px Inter, sans-serif';
    guideCtx.textAlign = 'center';
    guideCtx.textBaseline = 'middle';
    guideCtx.fillText(stroke.start.toString(), x, y);

    guideCtx.restore();
}

function drawCharacterFallback(size) {
    guideCtx.save();
    guideCtx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    guideCtx.font = `${size * 0.6}px 'Noto Sans Tibetan', serif`;
    guideCtx.textAlign = 'center';
    guideCtx.textBaseline = 'middle';
    guideCtx.fillText(currentChar, size / 2, size / 2);
    guideCtx.restore();
}

// ============================================
// DRAWING FUNCTIONALITY
// ============================================
function startDrawing(e) {
    isDrawing = true;
    const pos = getPosition(e);
    traceCtx.beginPath();
    traceCtx.moveTo(pos.x, pos.y);
    document.getElementById('canvasWrapper').classList.add('touch-active');
}

function draw(e) {
    if (!isDrawing) return;

    const pos = getPosition(e);
    const onPath = isPointOnPath(pos.x, pos.y);

    traceCtx.lineTo(pos.x, pos.y);
    traceCtx.strokeStyle = onPath ? '#22C55E' : '#EF4444';
    traceCtx.lineWidth = 6;
    traceCtx.lineCap = 'round';
    traceCtx.lineJoin = 'round';
    traceCtx.stroke();
    traceCtx.beginPath();
    traceCtx.moveTo(pos.x, pos.y);
}

function stopDrawing() {
    isDrawing = false;
    document.getElementById('canvasWrapper').classList.remove('touch-active');
}

function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    startDrawing(touch);
}

function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    draw(touch);
}

function handleTouchEnd(e) {
    e.preventDefault();
    stopDrawing();
}

function getPosition(e) {
    const rect = traceCanvas.getBoundingClientRect();
    const scaleX = (traceCanvas.width / window.devicePixelRatio) / rect.width;
    const scaleY = (traceCanvas.height / window.devicePixelRatio) / rect.height;

    let clientX, clientY;
    if (e.touches) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = e.clientX;
        clientY = e.clientY;
    }

    return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY
    };
}

// ============================================
// PATH DETECTION
// ============================================
function isPointOnPath(x, y) {
    const strokeData = STROKE_DATA[currentChar];
    if (!strokeData) return true; // No data = always green (fallback)

    const size = traceCanvas.width / window.devicePixelRatio;
    const tolerance = pathTolerance;

    // Check each stroke
    for (const stroke of strokeData.strokes) {
        const points = stroke.points;

        // Check against each line segment in the stroke
        for (let i = 0; i < points.length - 1; i++) {
            const p1 = {
                x: points[i].x * size / 100,
                y: points[i].y * size / 100
            };
            const p2 = {
                x: points[i + 1].x * size / 100,
                y: points[i + 1].y * size / 100
            };

            const dist = pointToLineDistance(x, y, p1.x, p1.y, p2.x, p2.y);
            if (dist <= tolerance) {
                return true;
            }
        }
    }

    return false;
}

function pointToLineDistance(px, py, x1, y1, x2, y2) {
    const A = px - x1;
    const B = py - y1;
    const C = x2 - x1;
    const D = y2 - y1;

    const dot = A * C + B * D;
    const lenSq = C * C + D * D;
    let param = -1;

    if (lenSq !== 0) {
        param = dot / lenSq;
    }

    let xx, yy;

    if (param < 0) {
        xx = x1;
        yy = y1;
    } else if (param > 1) {
        xx = x2;
        yy = y2;
    } else {
        xx = x1 + param * C;
        yy = y1 + param * D;
    }

    const dx = px - xx;
    const dy = py - yy;

    return Math.sqrt(dx * dx + dy * dy);
}

// ============================================
// CONTROL FUNCTIONS
// ============================================
function clearCanvas() {
    if (!traceCtx) return;
    const size = traceCanvas.width / window.devicePixelRatio;
    traceCtx.clearRect(0, 0, size, size);
    drawGuide();
}

function toggleGuide() {
    showGuide = !showGuide;
    const btn = document.getElementById('guideToggle');
    btn.innerHTML = showGuide
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
           </svg> Guide`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
            <line x1="1" y1="1" x2="23" y2="23"></line>
           </svg> Guide`;
    drawGuide();
}
