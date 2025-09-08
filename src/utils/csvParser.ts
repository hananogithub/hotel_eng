export interface Phrase {
  id: string;
  english: string;
  japanese: string;
  category: string;
}

export const parseCSV = (csvText: string): Phrase[] => {
  const lines = csvText.split('\n');
  const phrases: Phrase[] = [];
  
  // Skip header row
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line) {
      const [english, japanese, category] = line.split(',');
      if (english && japanese && category) {
        phrases.push({
          id: `phrase_${i}`,
          english: english.replace(/"/g, '').trim(),
          japanese: japanese.replace(/"/g, '').trim(),
          category: category.replace(/"/g, '').trim(),
        });
      }
    }
  }
  
  return phrases;
};

export const getCategories = (phrases: Phrase[]): string[] => {
  const categories = new Set(phrases.map(phrase => phrase.category));
  return Array.from(categories).sort();
};

export const getPhrasesByCategory = (phrases: Phrase[], category: string): Phrase[] => {
  return phrases.filter(phrase => phrase.category === category);
};