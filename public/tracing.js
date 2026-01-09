// Sambhota Tutor - Tracing Practice Module
// Stroke paths based on Chris Fynn's "How to write the Tibetan script"
// Touch and mouse-friendly character tracing with stroke guides

// ============================================
// STROKE PATH DATA FOR TIBETAN CHARACTERS
// ============================================
// Based on traditional dbu-can calligraphy proportions
// Head stroke at ~15-20% from top, body extends to ~75-80%
// Coordinates normalized to 0-100 space

const STROKE_DATA = {
    // ===== CONSONANTS =====

    // KA ཀ - Head, left shoulder+curve, middle leg, right leg
    'ཀ': {
        strokes: [
            // Stroke 1: Head (mgo) - horizontal line
            { points: [{x:20,y:18}, {x:40,y:18}, {x:60,y:18}, {x:80,y:18}], start: 1 },
            // Stroke 2: Left shoulder curving down then small curve
            { points: [{x:25,y:18}, {x:22,y:28}, {x:20,y:40}, {x:22,y:48}, {x:28,y:52}], start: 2 },
            // Stroke 3: Middle vertical with slight curve at top
            { points: [{x:45,y:18}, {x:44,y:30}, {x:44,y:50}, {x:44,y:70}], start: 3 },
            // Stroke 4: Right vertical going down
            { points: [{x:72,y:18}, {x:72,y:40}, {x:72,y:60}, {x:72,y:78}], start: 4 }
        ]
    },

    // KHA ཁ - Like KA but simpler left part, with aspiration mark
    'ཁ': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            { points: [{x:28,y:18}, {x:26,y:35}, {x:28,y:50}], start: 2 },
            { points: [{x:50,y:18}, {x:50,y:45}, {x:50,y:72}], start: 3 },
            { points: [{x:72,y:18}, {x:72,y:45}, {x:72,y:78}], start: 4 }
        ]
    },

    // GA ག - Head, left hook/loop, two verticals
    'ག': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            // Left curved hook
            { points: [{x:28,y:18}, {x:22,y:30}, {x:20,y:42}, {x:25,y:50}, {x:35,y:48}], start: 2 },
            { points: [{x:52,y:18}, {x:52,y:45}, {x:52,y:75}], start: 3 },
            { points: [{x:75,y:18}, {x:75,y:45}, {x:75,y:78}], start: 4 }
        ]
    },

    // NGA ང - Head, left curve, vertical, bottom curve to right
    'ང': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            // Left shoulder curve
            { points: [{x:28,y:18}, {x:22,y:32}, {x:25,y:45}, {x:35,y:42}], start: 2 },
            // Middle vertical
            { points: [{x:50,y:18}, {x:50,y:40}, {x:50,y:60}], start: 3 },
            // Bottom curve sweeping right
            { points: [{x:50,y:60}, {x:55,y:68}, {x:65,y:72}, {x:78,y:68}], start: 4 }
        ]
    },

    // CA ཅ - Head, curved left element, vertical
    'ཅ': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            // Left curved element (like reversed C)
            { points: [{x:30,y:18}, {x:25,y:30}, {x:22,y:45}, {x:28,y:58}, {x:40,y:55}], start: 2 },
            { points: [{x:65,y:18}, {x:65,y:45}, {x:65,y:75}], start: 3 }
        ]
    },

    // CHA ཆ - Like CA with loop
    'ཆ': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            // Shoulder down and loop
            { points: [{x:30,y:18}, {x:25,y:32}, {x:28,y:48}, {x:38,y:55}, {x:48,y:48}, {x:45,y:35}, {x:35,y:32}], start: 2 },
            { points: [{x:68,y:18}, {x:68,y:50}, {x:68,y:78}], start: 3 }
        ]
    },

    // JA ཇ - Head, stem with two circles
    'ཇ': {
        strokes: [
            { points: [{x:25,y:18}, {x:50,y:18}, {x:75,y:18}], start: 1 },
            // Stem going down
            { points: [{x:50,y:18}, {x:50,y:35}], start: 2 },
            // Upper circle
            { points: [{x:50,y:35}, {x:40,y:40}, {x:38,y:52}, {x:50,y:58}, {x:62,y:52}, {x:60,y:40}, {x:50,y:35}], start: 3 },
            // Lower circle
            { points: [{x:50,y:58}, {x:40,y:65}, {x:42,y:78}, {x:55,y:80}, {x:65,y:72}, {x:60,y:62}], start: 4 }
        ]
    },

    // NYA ཉ - Head, left curve, middle with hook
    'ཉ': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            // Left shoulder curve
            { points: [{x:28,y:18}, {x:22,y:35}, {x:28,y:50}, {x:40,y:45}], start: 2 },
            // Right element - vertical with bottom curve
            { points: [{x:62,y:18}, {x:62,y:40}, {x:58,y:55}, {x:50,y:62}, {x:55,y:70}], start: 3 }
        ]
    },

    // TA ཏ - Head, single elegant vertical with slight curve
    'ཏ': {
        strokes: [
            { points: [{x:25,y:18}, {x:50,y:18}, {x:75,y:18}], start: 1 },
            // Shoulder curving into vertical
            { points: [{x:35,y:18}, {x:32,y:28}, {x:35,y:40}, {x:42,y:50}, {x:50,y:60}, {x:50,y:78}], start: 2 }
        ]
    },

    // THA ཐ - Like TA but extends further with curve
    'ཐ': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            // Long curved stroke going down then curving back up
            { points: [{x:35,y:18}, {x:30,y:35}, {x:35,y:55}, {x:50,y:70}, {x:70,y:75}, {x:80,y:65}], start: 2 }
        ]
    },

    // DA ད - Head, left curved element, right vertical with bottom curve
    'ད': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            // Left curve
            { points: [{x:28,y:18}, {x:22,y:35}, {x:28,y:50}, {x:42,y:48}], start: 2 },
            // Right element with curve at bottom
            { points: [{x:60,y:18}, {x:58,y:40}, {x:55,y:55}, {x:48,y:65}, {x:55,y:75}], start: 3 }
        ]
    },

    // NA ན - Head, shoulder, vertical with curve
    'ན': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            // Shoulder curve
            { points: [{x:30,y:18}, {x:25,y:35}, {x:30,y:48}], start: 2 },
            // Main vertical with bottom hook
            { points: [{x:60,y:18}, {x:58,y:40}, {x:55,y:58}, {x:50,y:70}, {x:55,y:80}], start: 3 }
        ]
    },

    // PA པ - Head, two simple verticals
    'པ': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            // Left vertical with slight curve
            { points: [{x:35,y:18}, {x:34,y:40}, {x:35,y:65}], start: 2 },
            // Right vertical
            { points: [{x:65,y:18}, {x:65,y:40}, {x:65,y:75}], start: 3 }
        ]
    },

    // PHA ཕ - Like PA with additional curve between
    'ཕ': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            { points: [{x:32,y:18}, {x:30,y:40}, {x:32,y:60}], start: 2 },
            // Middle curved element
            { points: [{x:45,y:35}, {x:50,y:45}, {x:55,y:35}], start: 3 },
            { points: [{x:68,y:18}, {x:68,y:45}, {x:68,y:75}], start: 4 }
        ]
    },

    // BA བ - Head, curved left descending to point
    'བ': {
        strokes: [
            { points: [{x:25,y:18}, {x:50,y:18}, {x:75,y:18}], start: 1 },
            // Large curved stroke from top curving left then down to point
            { points: [{x:60,y:18}, {x:45,y:25}, {x:30,y:40}, {x:25,y:60}, {x:35,y:75}, {x:50,y:70}], start: 2 }
        ]
    },

    // MA མ - Head with two curved elements meeting
    'མ': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            // Left curve going right
            { points: [{x:28,y:18}, {x:25,y:35}, {x:32,y:50}, {x:45,y:55}], start: 2 },
            // Right curve going left meeting in middle
            { points: [{x:72,y:18}, {x:75,y:35}, {x:68,y:50}, {x:55,y:55}], start: 3 }
        ]
    },

    // TSA ཙ - Head, shoulder, stem with loop
    'ཙ': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            { points: [{x:30,y:18}, {x:28,y:35}, {x:32,y:48}], start: 2 },
            // Stem with bottom loop
            { points: [{x:55,y:18}, {x:55,y:40}, {x:52,y:55}, {x:42,y:65}, {x:38,y:75}, {x:48,y:78}, {x:58,y:72}], start: 3 }
        ]
    },

    // TSHA ཚ - Like TSA with aspiration mark
    'ཚ': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            { points: [{x:30,y:18}, {x:28,y:35}, {x:32,y:48}], start: 2 },
            { points: [{x:55,y:18}, {x:55,y:40}, {x:52,y:55}, {x:42,y:65}, {x:38,y:75}, {x:48,y:78}, {x:58,y:72}], start: 3 },
            // Small aspiration curve at top right
            { points: [{x:70,y:12}, {x:75,y:8}, {x:80,y:12}], start: 4 }
        ]
    },

    // DZA ཛ - Head, stem with two circles (like JA but voiced)
    'ཛ': {
        strokes: [
            { points: [{x:25,y:18}, {x:50,y:18}, {x:75,y:18}], start: 1 },
            { points: [{x:50,y:18}, {x:50,y:35}], start: 2 },
            { points: [{x:50,y:35}, {x:40,y:42}, {x:40,y:55}, {x:50,y:60}, {x:60,y:55}, {x:60,y:42}, {x:50,y:35}], start: 3 },
            { points: [{x:50,y:60}, {x:42,y:68}, {x:45,y:78}, {x:58,y:78}, {x:62,y:68}], start: 4 },
            // Voice mark
            { points: [{x:70,y:12}, {x:78,y:8}], start: 5 }
        ]
    },

    // WA ཝ - Head, curved body like a bowl
    'ཝ': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            // Left curve down
            { points: [{x:28,y:18}, {x:22,y:35}, {x:25,y:55}, {x:40,y:65}], start: 2 },
            // Right curve meeting
            { points: [{x:72,y:18}, {x:78,y:35}, {x:75,y:55}, {x:60,y:65}], start: 3 },
            // Bottom point
            { points: [{x:50,y:65}, {x:50,y:78}], start: 4 }
        ]
    },

    // ZHA ཞ - Head, curved elements
    'ཞ': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            // Left curved part
            { points: [{x:28,y:18}, {x:22,y:32}, {x:25,y:45}, {x:38,y:42}], start: 2 },
            // Right curve down
            { points: [{x:55,y:18}, {x:52,y:35}, {x:48,y:50}, {x:55,y:62}], start: 3 },
            // Bottom horizontal curve
            { points: [{x:35,y:55}, {x:50,y:62}, {x:70,y:58}], start: 4 }
        ]
    },

    // ZA ཟ - Head, curve, bottom loops
    'ཟ': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            // Left element
            { points: [{x:28,y:18}, {x:22,y:35}, {x:28,y:48}], start: 2 },
            // Main body curve
            { points: [{x:55,y:18}, {x:50,y:35}, {x:45,y:52}], start: 3 },
            // Bottom loop part
            { points: [{x:45,y:52}, {x:35,y:62}, {x:40,y:75}, {x:55,y:72}, {x:65,y:60}], start: 4 }
        ]
    },

    // 'A འ - Head, vertical, horizontal bar, curved end
    'འ': {
        strokes: [
            { points: [{x:25,y:18}, {x:50,y:18}, {x:75,y:18}], start: 1 },
            // Vertical
            { points: [{x:50,y:18}, {x:50,y:45}], start: 2 },
            // Horizontal bar
            { points: [{x:30,y:55}, {x:50,y:55}, {x:70,y:55}], start: 3 },
            // Curved ending
            { points: [{x:70,y:55}, {x:75,y:65}, {x:70,y:78}], start: 4 }
        ]
    },

    // YA ཡ - Head, left vertical, cross stroke, right vertical
    'ཡ': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            // Left vertical
            { points: [{x:30,y:18}, {x:30,y:45}, {x:30,y:72}], start: 2 },
            // Cross stroke (abdominal stroke)
            { points: [{x:30,y:50}, {x:45,y:48}, {x:60,y:50}], start: 3 },
            // Right vertical
            { points: [{x:60,y:18}, {x:60,y:45}, {x:60,y:75}], start: 4 }
        ]
    },

    // RA ར - Single curved stroke from top
    'ར': {
        strokes: [
            // Starts at top, curves down and around
            { points: [{x:50,y:12}, {x:45,y:18}, {x:38,y:30}, {x:35,y:45}, {x:40,y:60}, {x:55,y:70}, {x:70,y:65}], start: 1 }
        ]
    },

    // LA ལ - Head, shoulder, vertical with bottom curve
    'ལ': {
        strokes: [
            { points: [{x:25,y:18}, {x:50,y:18}, {x:75,y:18}], start: 1 },
            // Shoulder
            { points: [{x:35,y:18}, {x:32,y:32}, {x:35,y:45}], start: 2 },
            // Main curve down to right
            { points: [{x:55,y:18}, {x:52,y:40}, {x:48,y:58}, {x:55,y:72}, {x:70,y:70}], start: 3 }
        ]
    },

    // SHA ཤ - Head, left curve, right curve with loop
    'ཤ': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            // Left shoulder curve
            { points: [{x:28,y:18}, {x:22,y:35}, {x:28,y:50}, {x:42,y:48}], start: 2 },
            // Right curve with loop
            { points: [{x:60,y:18}, {x:55,y:35}, {x:50,y:52}, {x:58,y:65}, {x:72,y:62}], start: 3 }
        ]
    },

    // SA ས - Head, left element, right with circle
    'ས': {
        strokes: [
            // Small left hook first
            { points: [{x:20,y:25}, {x:18,y:35}, {x:22,y:42}], start: 1 },
            // Head
            { points: [{x:30,y:18}, {x:55,y:18}, {x:80,y:18}], start: 2 },
            // Main curved body
            { points: [{x:45,y:18}, {x:42,y:35}, {x:40,y:52}], start: 3 },
            // Circle/loop
            { points: [{x:40,y:52}, {x:50,y:58}, {x:62,y:55}, {x:68,y:45}, {x:62,y:35}, {x:50,y:38}], start: 4 }
        ]
    },

    // HA ཧ - Head, two verticals with cross bar
    'ཧ': {
        strokes: [
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            // Left vertical
            { points: [{x:32,y:18}, {x:32,y:45}, {x:32,y:72}], start: 2 },
            // Cross bar
            { points: [{x:32,y:48}, {x:50,y:45}, {x:68,y:48}], start: 3 },
            // Right vertical
            { points: [{x:68,y:18}, {x:68,y:45}, {x:68,y:75}], start: 4 }
        ]
    },

    // A ཨ - Complex curved form
    'ཨ': {
        strokes: [
            { points: [{x:25,y:18}, {x:50,y:18}, {x:75,y:18}], start: 1 },
            // Main body curve
            { points: [{x:40,y:18}, {x:35,y:30}, {x:30,y:45}, {x:35,y:60}, {x:50,y:70}, {x:65,y:60}], start: 2 },
            // Right vertical
            { points: [{x:68,y:18}, {x:68,y:45}, {x:68,y:70}], start: 3 }
        ]
    },

    // ===== VOWEL COMBINATIONS (with base ཀ) =====

    'ཀི': {
        strokes: [
            // GI-GU vowel on top first
            { points: [{x:48,y:5}, {x:52,y:10}, {x:48,y:15}], start: 1 },
            // Then KA strokes
            { points: [{x:20,y:22}, {x:50,y:22}, {x:80,y:22}], start: 2 },
            { points: [{x:25,y:22}, {x:22,y:35}, {x:25,y:48}, {x:35,y:52}], start: 3 },
            { points: [{x:45,y:22}, {x:44,y:45}, {x:44,y:70}], start: 4 },
            { points: [{x:72,y:22}, {x:72,y:50}, {x:72,y:78}], start: 5 }
        ]
    },

    'ཀུ': {
        strokes: [
            // KA strokes
            { points: [{x:20,y:18}, {x:50,y:18}, {x:80,y:18}], start: 1 },
            { points: [{x:25,y:18}, {x:22,y:32}, {x:25,y:45}, {x:35,y:48}], start: 2 },
            { points: [{x:45,y:18}, {x:44,y:42}, {x:44,y:65}], start: 3 },
            { points: [{x:72,y:18}, {x:72,y:45}, {x:72,y:72}], start: 4 },
            // ZHABS-KYU vowel below
            { points: [{x:40,y:78}, {x:50,y:85}, {x:60,y:78}], start: 5 }
        ]
    },

    'ཀེ': {
        strokes: [
            // 'GRENG-BU vowel on top
            { points: [{x:45,y:5}, {x:50,y:2}, {x:55,y:5}], start: 1 },
            // KA strokes
            { points: [{x:20,y:22}, {x:50,y:22}, {x:80,y:22}], start: 2 },
            { points: [{x:25,y:22}, {x:22,y:35}, {x:25,y:48}, {x:35,y:52}], start: 3 },
            { points: [{x:45,y:22}, {x:44,y:45}, {x:44,y:70}], start: 4 },
            { points: [{x:72,y:22}, {x:72,y:50}, {x:72,y:78}], start: 5 }
        ]
    },

    'ཀོ': {
        strokes: [
            // NA-RO vowel on top (curved)
            { points: [{x:42,y:8}, {x:50,y:3}, {x:58,y:8}, {x:55,y:14}, {x:45,y:14}, {x:42,y:8}], start: 1 },
            // KA strokes
            { points: [{x:20,y:22}, {x:50,y:22}, {x:80,y:22}], start: 2 },
            { points: [{x:25,y:22}, {x:22,y:35}, {x:25,y:48}, {x:35,y:52}], start: 3 },
            { points: [{x:45,y:22}, {x:44,y:45}, {x:44,y:70}], start: 4 },
            { points: [{x:72,y:22}, {x:72,y:50}, {x:72,y:78}], start: 5 }
        ]
    },

    // ===== NUMBERS =====

    '༠': {
        strokes: [
            { points: [{x:35,y:20}, {x:50,y:15}, {x:65,y:20}, {x:70,y:40}, {x:65,y:60}, {x:50,y:70}, {x:35,y:60}, {x:30,y:40}, {x:35,y:20}], start: 1 }
        ]
    },

    '༡': {
        strokes: [
            { points: [{x:45,y:15}, {x:50,y:12}, {x:50,y:35}, {x:50,y:55}, {x:50,y:75}], start: 1 }
        ]
    },

    '༢': {
        strokes: [
            { points: [{x:30,y:25}, {x:45,y:15}, {x:60,y:20}, {x:65,y:35}, {x:50,y:50}, {x:35,y:65}, {x:35,y:75}, {x:65,y:75}], start: 1 }
        ]
    },

    '༣': {
        strokes: [
            { points: [{x:32,y:20}, {x:50,y:12}, {x:65,y:22}, {x:55,y:38}, {x:45,y:42}], start: 1 },
            { points: [{x:45,y:42}, {x:60,y:48}, {x:65,y:62}, {x:50,y:75}, {x:32,y:68}], start: 2 }
        ]
    },

    '༤': {
        strokes: [
            { points: [{x:58,y:12}, {x:30,y:48}, {x:70,y:48}], start: 1 },
            { points: [{x:55,y:15}, {x:55,y:48}, {x:55,y:75}], start: 2 }
        ]
    },

    '༥': {
        strokes: [
            { points: [{x:65,y:15}, {x:35,y:15}, {x:32,y:40}, {x:50,y:38}, {x:65,y:48}, {x:60,y:65}, {x:45,y:75}, {x:30,y:68}], start: 1 }
        ]
    },

    '༦': {
        strokes: [
            { points: [{x:62,y:18}, {x:45,y:12}, {x:30,y:25}, {x:28,y:45}, {x:35,y:65}, {x:55,y:72}, {x:68,y:58}, {x:58,y:42}, {x:42,y:45}], start: 1 }
        ]
    },

    '༧': {
        strokes: [
            { points: [{x:30,y:15}, {x:68,y:15}, {x:52,y:42}, {x:48,y:75}], start: 1 }
        ]
    },

    '༨': {
        strokes: [
            { points: [{x:50,y:18}, {x:38,y:28}, {x:50,y:40}, {x:62,y:28}, {x:50,y:18}], start: 1 },
            { points: [{x:50,y:40}, {x:32,y:55}, {x:50,y:72}, {x:68,y:55}, {x:50,y:40}], start: 2 }
        ]
    },

    '༩': {
        strokes: [
            { points: [{x:42,y:68}, {x:55,y:75}, {x:68,y:62}, {x:70,y:40}, {x:58,y:22}, {x:42,y:25}, {x:35,y:38}, {x:45,y:48}, {x:62,y:42}], start: 1 }
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
let pathTolerance = 25;

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

    consonants.forEach((char, index) => {
        const btn = document.createElement('button');
        btn.className = 'char-btn' + (index === 0 ? ' active' : '');
        btn.textContent = char;
        btn.onclick = () => selectCharacter(char, 'consonants', index);
        consonantsGrid.appendChild(btn);
    });

    vowels.forEach((char, index) => {
        const btn = document.createElement('button');
        btn.className = 'char-btn';
        btn.textContent = char;
        btn.onclick = () => selectCharacter(char, 'vowels', index);
        vowelsGrid.appendChild(btn);
    });

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

    document.getElementById('currentChar').textContent = char;

    const list = type === 'consonants' ? consonants : type === 'vowels' ? vowels : numbers;
    const typeLabel = type === 'consonants' ? 'Consonant' : type === 'vowels' ? 'Vowel' : 'Number';

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

    document.querySelectorAll('.char-btn').forEach(btn => btn.classList.remove('active'));
    const grids = ['consonants-grid', 'vowels-grid', 'numbers-grid'];
    grids.forEach(gridId => {
        const grid = document.getElementById(gridId);
        const buttons = grid.querySelectorAll('.char-btn');
        buttons.forEach(btn => {
            if (btn.textContent === char) btn.classList.add('active');
        });
    });

    updateNavigation();
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

    // Draw baseline guides (like in the PDF)
    drawBaselineGuides(size);

    const strokeData = STROKE_DATA[currentChar];
    if (!strokeData) {
        drawCharacterFallback(size);
        return;
    }

    strokeData.strokes.forEach((stroke, strokeIndex) => {
        drawStrokePath(stroke, size);
        drawStrokeNumber(stroke, size, strokeIndex);
    });
}

function drawBaselineGuides(size) {
    guideCtx.save();
    guideCtx.strokeStyle = '#E8DDD4';
    guideCtx.lineWidth = 1;
    guideCtx.setLineDash([]);

    // Head line (top of letters) ~18%
    guideCtx.beginPath();
    guideCtx.moveTo(10, size * 0.18);
    guideCtx.lineTo(size - 10, size * 0.18);
    guideCtx.stroke();

    // Base line ~75%
    guideCtx.beginPath();
    guideCtx.moveTo(10, size * 0.75);
    guideCtx.lineTo(size - 10, size * 0.75);
    guideCtx.stroke();

    guideCtx.restore();
}

function drawStrokePath(stroke, size) {
    const points = stroke.points;
    if (points.length < 2) return;

    guideCtx.save();

    guideCtx.strokeStyle = '#6B5344';
    guideCtx.lineWidth = 3;
    guideCtx.setLineDash([8, 6]);
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
    const arrowLength = 10;

    guideCtx.save();
    guideCtx.setLineDash([]);
    guideCtx.strokeStyle = '#6B5344';
    guideCtx.fillStyle = '#6B5344';
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

    guideCtx.beginPath();
    guideCtx.arc(x, y, 11, 0, Math.PI * 2);
    guideCtx.fillStyle = '#FFFFFF';
    guideCtx.fill();
    guideCtx.strokeStyle = '#8B4513';
    guideCtx.lineWidth = 2;
    guideCtx.setLineDash([]);
    guideCtx.stroke();

    guideCtx.fillStyle = '#8B4513';
    guideCtx.font = 'bold 13px Inter, sans-serif';
    guideCtx.textAlign = 'center';
    guideCtx.textBaseline = 'middle';
    guideCtx.fillText(stroke.start.toString(), x, y);

    guideCtx.restore();
}

function drawCharacterFallback(size) {
    guideCtx.save();
    guideCtx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    guideCtx.font = `${size * 0.55}px 'Noto Sans Tibetan', serif`;
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
    if (!strokeData) return true;

    const size = traceCanvas.width / window.devicePixelRatio;
    const tolerance = pathTolerance;

    for (const stroke of strokeData.strokes) {
        const points = stroke.points;

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
