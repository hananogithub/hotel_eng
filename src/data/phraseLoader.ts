import { Phrase } from '../utils/csvParser';
import { phraseData } from './phraseData';

let cachedPhrases: Phrase[] | null = null;

export const loadPhrases = async (): Promise<Phrase[]> => {
  if (cachedPhrases) {
    return cachedPhrases;
  }

  try {
    // Load phrase data directly from the imported data
    cachedPhrases = phraseData;
    console.log('Loaded phrases:', cachedPhrases.length);
    return cachedPhrases;
  } catch (error) {
    console.error('Error loading phrases:', error);
    // Fallback to empty array if loading fails
    cachedPhrases = [];
    return cachedPhrases;
  }
};

export const getPhrases = (): Phrase[] => {
  return cachedPhrases || [];
};