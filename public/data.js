// Sambhota Tutor - Tibetan Alphabet and Numbers Data
// Named after Thonmi Sambhota, the 7th-century scholar who created the Tibetan script

const TIBETAN_ALPHABET = [
    // 30 Consonants (Base Letters)
    { letter: 'ཀ', romanization: 'ka', pronunciation: 'ka (like "car")', category: 'consonant', order: 1, example: 'ཀ་བ (ka-ba) = pillar' },
    { letter: 'ཁ', romanization: 'kha', pronunciation: 'kha (aspirated k)', category: 'consonant', order: 2, example: 'ཁང་པ (khang-pa) = house' },
    { letter: 'ག', romanization: 'ga', pronunciation: 'ga (like "go")', category: 'consonant', order: 3, example: 'གླང (lang) = ox' },
    { letter: 'ང', romanization: 'nga', pronunciation: 'nga (like "sing")', category: 'consonant', order: 4, example: 'ང (nga) = I/me' },
    { letter: 'ཅ', romanization: 'ca', pronunciation: 'ca (like "church")', category: 'consonant', order: 5, example: 'ཅ་ལག (ca-lag) = thing' },
    { letter: 'ཆ', romanization: 'cha', pronunciation: 'cha (aspirated ch)', category: 'consonant', order: 6, example: 'ཆུ (chu) = water' },
    { letter: 'ཇ', romanization: 'ja', pronunciation: 'ja (like "jam")', category: 'consonant', order: 7, example: 'ཇ (ja) = tea' },
    { letter: 'ཉ', romanization: 'nya', pronunciation: 'nya (like "canyon")', category: 'consonant', order: 8, example: 'ཉི་མ (nyi-ma) = sun' },
    { letter: 'ཏ', romanization: 'ta', pronunciation: 'ta (like "top")', category: 'consonant', order: 9, example: 'ཏོག (tog) = top/peak' },
    { letter: 'ཐ', romanization: 'tha', pronunciation: 'tha (aspirated t)', category: 'consonant', order: 10, example: 'ཐུགས (thugs) = mind (hon.)' },
    { letter: 'ད', romanization: 'da', pronunciation: 'da (like "do")', category: 'consonant', order: 11, example: 'དཀར་པོ (dkar-po) = white' },
    { letter: 'ན', romanization: 'na', pronunciation: 'na (like "no")', category: 'consonant', order: 12, example: 'ནམ་མཁའ (nam-mkha) = sky' },
    { letter: 'པ', romanization: 'pa', pronunciation: 'pa (like "pa")', category: 'consonant', order: 13, example: 'པོ་ཏ་ལ (po-ta-la) = Potala' },
    { letter: 'ཕ', romanization: 'pha', pronunciation: 'pha (aspirated p)', category: 'consonant', order: 14, example: 'ཕ་མ (pha-ma) = parents' },
    { letter: 'བ', romanization: 'ba', pronunciation: 'ba (like "ball")', category: 'consonant', order: 15, example: 'བོད (bod) = Tibet' },
    { letter: 'མ', romanization: 'ma', pronunciation: 'ma (like "ma")', category: 'consonant', order: 16, example: 'མི (mi) = person' },
    { letter: 'ཙ', romanization: 'tsa', pronunciation: 'tsa (like "bits")', category: 'consonant', order: 17, example: 'ཚ་བ (tsha-ba) = hot' },
    { letter: 'ཚ', romanization: 'tsha', pronunciation: 'tsha (aspirated ts)', category: 'consonant', order: 18, example: 'ཚིག (tshig) = word' },
    { letter: 'ཛ', romanization: 'dza', pronunciation: 'dza (like "adze")', category: 'consonant', order: 19, example: 'མཛེས་པ (mdzes-pa) = beautiful' },
    { letter: 'ཝ', romanization: 'wa', pronunciation: 'wa (like "water")', category: 'consonant', order: 20, example: 'ཝ་མོ (wa-mo) = fox' },
    { letter: 'ཞ', romanization: 'zha', pronunciation: 'zha (like "azure")', category: 'consonant', order: 21, example: 'ཞི་བདེ (zhi-bde) = peace' },
    { letter: 'ཟ', romanization: 'za', pronunciation: 'za (like "zoo")', category: 'consonant', order: 22, example: 'ཟ་མ (za-ma) = food' },
    { letter: 'འ', romanization: "'a", pronunciation: "'a (glottal stop)", category: 'consonant', order: 23, example: 'འོད (\'od) = light' },
    { letter: 'ཡ', romanization: 'ya', pronunciation: 'ya (like "yes")', category: 'consonant', order: 24, example: 'ཡག་པོ (yag-po) = good' },
    { letter: 'ར', romanization: 'ra', pronunciation: 'ra (like "run")', category: 'consonant', order: 25, example: 'རི (ri) = mountain' },
    { letter: 'ལ', romanization: 'la', pronunciation: 'la (like "la")', category: 'consonant', order: 26, example: 'ལམ (lam) = path' },
    { letter: 'ཤ', romanization: 'sha', pronunciation: 'sha (like "ship")', category: 'consonant', order: 27, example: 'ཤེས་རབ (shes-rab) = wisdom' },
    { letter: 'ས', romanization: 'sa', pronunciation: 'sa (like "sun")', category: 'consonant', order: 28, example: 'སེམས (sems) = mind' },
    { letter: 'ཧ', romanization: 'ha', pronunciation: 'ha (like "hat")', category: 'consonant', order: 29, example: 'ཧ་ལས (ha-las) = surprise!' },
    { letter: 'ཨ', romanization: 'a', pronunciation: 'a (like "ah")', category: 'consonant', order: 30, example: 'ཨ་མ (a-ma) = mother' }
];

const TIBETAN_VOWELS = [
    { letter: 'ི', romanization: 'i', pronunciation: 'i (like "ee")', baseExample: 'ཀི (ki)', description: 'Gigu - placed above the consonant' },
    { letter: 'ུ', romanization: 'u', pronunciation: 'u (like "oo")', baseExample: 'ཀུ (ku)', description: 'Zhapkyu - placed below the consonant' },
    { letter: 'ེ', romanization: 'e', pronunciation: 'e (like "ay")', baseExample: 'ཀེ (ke)', description: 'Drengbu - placed above the consonant' },
    { letter: 'ོ', romanization: 'o', pronunciation: 'o (like "oh")', baseExample: 'ཀོ (ko)', description: 'Naro - placed above the consonant' }
];

const TIBETAN_NUMBERS = [
    { number: '༠', value: 0, romanization: 'zero', tibetanWord: 'ཀླད་ཀོར', pronunciation: 'lé-kor' },
    { number: '༡', value: 1, romanization: 'one', tibetanWord: 'གཅིག', pronunciation: 'chik' },
    { number: '༢', value: 2, romanization: 'two', tibetanWord: 'གཉིས', pronunciation: 'nyi' },
    { number: '༣', value: 3, romanization: 'three', tibetanWord: 'གསུམ', pronunciation: 'sum' },
    { number: '༤', value: 4, romanization: 'four', tibetanWord: 'བཞི', pronunciation: 'shi' },
    { number: '༥', value: 5, romanization: 'five', tibetanWord: 'ལྔ', pronunciation: 'nga' },
    { number: '༦', value: 6, romanization: 'six', tibetanWord: 'དྲུག', pronunciation: 'dru' },
    { number: '༧', value: 7, romanization: 'seven', tibetanWord: 'བདུན', pronunciation: 'dün' },
    { number: '༨', value: 8, romanization: 'eight', tibetanWord: 'བརྒྱད', pronunciation: 'gyé' },
    { number: '༩', value: 9, romanization: 'nine', tibetanWord: 'དགུ', pronunciation: 'gu' },
    { number: '༡༠', value: 10, romanization: 'ten', tibetanWord: 'བཅུ', pronunciation: 'chu' }
];

// Helper function to get letter by order
function getLetterByOrder(order) {
    return TIBETAN_ALPHABET.find(item => item.order === order);
}

// Helper function to get next/previous letter
function getAdjacentLetter(currentOrder, direction) {
    const newOrder = direction === 'next' ? currentOrder + 1 : currentOrder - 1;
    if (newOrder < 1 || newOrder > 30) return null;
    return getLetterByOrder(newOrder);
}

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TIBETAN_ALPHABET, TIBETAN_VOWELS, TIBETAN_NUMBERS };
}
