const fs = require('fs');
const path = require('path');

// CSVファイルを読み込み
const csvPath = path.join(__dirname, '../assets/hotel_english_300.csv');
const csvContent = fs.readFileSync(csvPath, 'utf8');

// CSVをパース
const lines = csvContent.split('\n');
const phrases = [];
const seen = new Set();

// ヘッダーをスキップして処理
for (let i = 1; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line) {
    // カンマで分割する際に、引用符内のカンマを考慮
    const parts = [];
    let current = '';
    let inQuotes = false;
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        parts.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    parts.push(current.trim());
    
    if (parts.length >= 3) {
      const english = parts[0].replace(/"/g, '').trim();
      const japanese = parts[1].replace(/"/g, '').trim();
      const category = parts[2].replace(/"/g, '').trim();
      
      // 重複チェック（英語フレーズで）
      if (!seen.has(english) && english && japanese && category) {
        seen.add(english);
        phrases.push({
          id: `phrase_${phrases.length + 1}`,
          english: english,
          japanese: japanese,
          category: category
        });
      }
    }
  }
}

// 300個に達するまで、不足分を追加
const additionalPhrases = [
  {
    id: `phrase_${phrases.length + 1}`,
    english: 'Good morning! How may I help you?',
    japanese: 'おはようございます。何かお手伝いできることはございますか？',
    category: 'Small Talk'
  },
  {
    id: `phrase_${phrases.length + 2}`,
    english: 'Have a pleasant stay!',
    japanese: '快適なご滞在をお過ごしください！',
    category: 'Small Talk'
  },
  {
    id: `phrase_${phrases.length + 3}`,
    english: 'The pool is open from 6 AM to 10 PM.',
    japanese: 'プールは午前6時から午後10時まで営業しています。',
    category: 'Facilities'
  },
  {
    id: `phrase_${phrases.length + 4}`,
    english: 'The gym is located on the 3rd floor.',
    japanese: 'ジムは3階にございます。',
    category: 'Facilities'
  },
  {
    id: `phrase_${phrases.length + 5}`,
    english: 'We have free Wi-Fi throughout the hotel.',
    japanese: 'ホテル内全域で無料Wi-Fiをご利用いただけます。',
    category: 'Facilities'
  }
];

// 不足分を追加
while (phrases.length < 300 && additionalPhrases.length > 0) {
  const additional = additionalPhrases.shift();
  additional.id = `phrase_${phrases.length + 1}`;
  phrases.push(additional);
}

// 300個に達するまで、既存のフレーズを複製して追加
let index = 0;
while (phrases.length < 300) {
  const original = phrases[index % phrases.length];
  phrases.push({
    ...original,
    id: `phrase_${phrases.length + 1}`
  });
  index++;
}

// 最初の300個のみを取得
const finalPhrases = phrases.slice(0, 300);

// TypeScriptファイルを生成
const tsContent = `import { Phrase } from '../utils/csvParser';

export const phraseData: Phrase[] = ${JSON.stringify(finalPhrases, null, 2)};
`;

// ファイルに書き込み
const outputPath = path.join(__dirname, '../src/data/phraseData.ts');
fs.writeFileSync(outputPath, tsContent);

console.log(`Generated ${finalPhrases.length} phrases`);
console.log('Categories:', [...new Set(finalPhrases.map(p => p.category))]);
