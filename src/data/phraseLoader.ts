import { parseCSV, Phrase } from '../utils/csvParser';

// Sample data for testing - in production, this would be loaded from CSV
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
  },
  {
    id: '3',
    english: 'Please fill out this registration form.',
    japanese: 'こちらの宿泊カードにご記入をお願いします。',
    category: 'Check-in'
  },
  {
    id: '4',
    english: 'Check-in time is from 3 PM.',
    japanese: 'チェックインは午後3時からです。',
    category: 'Check-in'
  },
  {
    id: '5',
    english: 'How many nights will you be staying?',
    japanese: '何泊のご予定ですか？',
    category: 'Check-in'
  },
  {
    id: '6',
    english: 'Your room is on the 5th floor.',
    japanese: 'お部屋は5階にございます。',
    category: 'Directions'
  },
  {
    id: '7',
    english: 'The elevator is over there.',
    japanese: 'エレベーターはあちらにございます。',
    category: 'Directions'
  },
  {
    id: '8',
    english: 'The restaurant is on the ground floor.',
    japanese: 'レストランは1階にございます。',
    category: 'Facilities'
  },
  {
    id: '9',
    english: 'We have a swimming pool and gym.',
    japanese: 'プールとジムがございます。',
    category: 'Facilities'
  },
  {
    id: '10',
    english: 'Is there anything else I can help you with?',
    japanese: '他にご不明な点はございますか？',
    category: 'Small Talk'
  }
];

let cachedPhrases: Phrase[] | null = null;

export const loadPhrases = async (): Promise<Phrase[]> => {
  if (cachedPhrases) {
    return cachedPhrases;
  }

  try {
    // For now, return sample data
    // In production, you would load from CSV file
    cachedPhrases = samplePhrases;
    return cachedPhrases;
  } catch (error) {
    console.error('Error loading phrases:', error);
    return [];
  }
};

export const getPhrases = (): Phrase[] => {
  return cachedPhrases || [];
};