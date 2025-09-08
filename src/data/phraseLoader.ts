import { parseCSV, Phrase } from '../utils/csvParser';

let cachedPhrases: Phrase[] | null = null;

export const loadPhrases = async (): Promise<Phrase[]> => {
  if (cachedPhrases) {
    return cachedPhrases;
  }

  try {
    // Load CSV data from assets
    const response = await fetch(require('../../assets/hotel_english_300.csv'));
    const csvText = await response.text();
    
    cachedPhrases = parseCSV(csvText);
    console.log('Loaded phrases from CSV:', cachedPhrases.length);
    return cachedPhrases;
  } catch (error) {
    console.error('Error loading phrases from CSV:', error);
    // Fallback to sample data if CSV loading fails
    const samplePhrases: Phrase[] = [
      {
        id: '1',
        english: 'Welcome to our hotel. Do you have a reservation?',
        japanese: 'ようこそ。当ホテルのご予約はございますか？',
        category: 'Check-in'
      },
      {
        id: '2',
        english: 'May I have your passport, please?',
        japanese: 'パスポートを拝見できますか？',
        category: 'Check-in'
      }
    ];
    cachedPhrases = samplePhrases;
    return cachedPhrases;
  }
};

export const getPhrases = (): Phrase[] => {
  return cachedPhrases || [];
};