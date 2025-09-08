import { Phrase } from '../utils/csvParser';

// CSVデータを直接JavaScript配列として定義
export const phraseData: Phrase[] = [
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
  },
  {
    id: '11',
    english: 'Good morning! How may I help you?',
    japanese: 'おはようございます。何かお手伝いできることはございますか？',
    category: 'Small Talk'
  },
  {
    id: '12',
    english: 'Have a pleasant stay!',
    japanese: '快適なご滞在をお過ごしください！',
    category: 'Small Talk'
  },
  {
    id: '13',
    english: 'The check-out time is 11 AM.',
    japanese: 'チェックアウトは午前11時です。',
    category: 'Check-out'
  },
  {
    id: '14',
    english: 'Would you like to extend your stay?',
    japanese: 'ご延泊はいかがでしょうか？',
    category: 'Check-out'
  },
  {
    id: '15',
    english: 'Please return your room key.',
    japanese: 'お部屋のキーをお返しください。',
    category: 'Check-out'
  },
  {
    id: '16',
    english: 'The pool is open from 6 AM to 10 PM.',
    japanese: 'プールは午前6時から午後10時まで営業しています。',
    category: 'Facilities'
  },
  {
    id: '17',
    english: 'The gym is located on the 3rd floor.',
    japanese: 'ジムは3階にございます。',
    category: 'Facilities'
  },
  {
    id: '18',
    english: 'Turn left at the lobby.',
    japanese: 'ロビーで左に曲がってください。',
    category: 'Directions'
  },
  {
    id: '19',
    english: 'Go straight ahead.',
    japanese: 'まっすぐ進んでください。',
    category: 'Directions'
  },
  {
    id: '20',
    english: 'I apologize for the inconvenience.',
    japanese: 'ご迷惑をおかけして申し訳ございません。',
    category: 'Problems'
  },
  // Check-in phrases
  {
    id: '21',
    english: 'Do you have any special requests?',
    japanese: '何かご要望はございますか？',
    category: 'Check-in'
  },
  {
    id: '22',
    english: 'Your room number is 1205.',
    japanese: 'お部屋番号は1205号室です。',
    category: 'Check-in'
  },
  {
    id: '23',
    english: 'Here is your room key.',
    japanese: 'こちらがお部屋のキーです。',
    category: 'Check-in'
  },
  {
    id: '24',
    english: 'Breakfast is included in your stay.',
    japanese: '朝食はご宿泊料金に含まれております。',
    category: 'Check-in'
  },
  {
    id: '25',
    english: 'The bellboy will help you with your luggage.',
    japanese: 'ベルボーイがお荷物のお手伝いをいたします。',
    category: 'Check-in'
  },
  // Check-out phrases
  {
    id: '26',
    english: 'Would you like to settle your bill?',
    japanese: 'お会計はいかがいたしましょうか？',
    category: 'Check-out'
  },
  {
    id: '27',
    english: 'How would you like to pay?',
    japanese: 'お支払い方法はいかがいたしますか？',
    category: 'Check-out'
  },
  {
    id: '28',
    english: 'We accept credit cards and cash.',
    japanese: 'クレジットカードと現金でお支払いいただけます。',
    category: 'Check-out'
  },
  {
    id: '29',
    english: 'Thank you for staying with us.',
    japanese: 'ご利用いただき、ありがとうございました。',
    category: 'Check-out'
  },
  {
    id: '30',
    english: 'We hope you enjoyed your stay.',
    japanese: 'ご滞在はいかがでしたでしょうか。',
    category: 'Check-out'
  },
  // Directions phrases
  {
    id: '31',
    english: 'The elevator is on your right.',
    japanese: 'エレベーターは右手にございます。',
    category: 'Directions'
  },
  {
    id: '32',
    english: 'Take the stairs to the second floor.',
    japanese: '2階まで階段をお使いください。',
    category: 'Directions'
  },
  {
    id: '33',
    english: 'The exit is at the end of the corridor.',
    japanese: '出口は廊下の突き当たりにございます。',
    category: 'Directions'
  },
  {
    id: '34',
    english: 'Turn right at the next corner.',
    japanese: '次の角を右に曲がってください。',
    category: 'Directions'
  },
  {
    id: '35',
    english: 'It\'s on the opposite side of the building.',
    japanese: '建物の反対側にございます。',
    category: 'Directions'
  },
  // Facilities phrases
  {
    id: '36',
    english: 'The spa is open 24 hours.',
    japanese: 'スパは24時間営業しております。',
    category: 'Facilities'
  },
  {
    id: '37',
    english: 'The business center is on the mezzanine floor.',
    japanese: 'ビジネスセンターは中2階にございます。',
    category: 'Facilities'
  },
  {
    id: '38',
    english: 'We have free Wi-Fi throughout the hotel.',
    japanese: 'ホテル内全域で無料Wi-Fiをご利用いただけます。',
    category: 'Facilities'
  },
  {
    id: '39',
    english: 'The laundry service is available 24 hours.',
    japanese: 'ランドリーサービスは24時間ご利用いただけます。',
    category: 'Facilities'
  },
  {
    id: '40',
    english: 'The conference room can accommodate 50 people.',
    japanese: '会議室は50名までご利用いただけます。',
    category: 'Facilities'
  },
  // Requests phrases
  {
    id: '41',
    english: 'Could you please wake me up at 7 AM?',
    japanese: '朝7時にモーニングコールをお願いできますか？',
    category: 'Requests'
  },
  {
    id: '42',
    english: 'I need extra towels, please.',
    japanese: 'タオルを追加でお願いします。',
    category: 'Requests'
  },
  {
    id: '43',
    english: 'Could you bring me some ice?',
    japanese: '氷を持ってきていただけますか？',
    category: 'Requests'
  },
  {
    id: '44',
    english: 'I would like to make a reservation for dinner.',
    japanese: 'ディナーの予約をお願いしたいのですが。',
    category: 'Requests'
  },
  {
    id: '45',
    english: 'Can you help me with my luggage?',
    japanese: '荷物のお手伝いをしていただけますか？',
    category: 'Requests'
  },
  // Problems phrases
  {
    id: '46',
    english: 'There seems to be a problem with the air conditioning.',
    japanese: 'エアコンに問題があるようです。',
    category: 'Problems'
  },
  {
    id: '47',
    english: 'The TV is not working properly.',
    japanese: 'テレビが正常に動作しません。',
    category: 'Problems'
  },
  {
    id: '48',
    english: 'I lost my room key.',
    japanese: '部屋のキーをなくしてしまいました。',
    category: 'Problems'
  },
  {
    id: '49',
    english: 'The hot water is not working.',
    japanese: 'お湯が出ません。',
    category: 'Problems'
  },
  {
    id: '50',
    english: 'There is too much noise from the next room.',
    japanese: '隣の部屋から騒音が聞こえます。',
    category: 'Problems'
  },
  // Phone phrases
  {
    id: '51',
    english: 'How can I make an outside call?',
    japanese: '外線に電話をかけるにはどうすればよいですか？',
    category: 'Phone'
  },
  {
    id: '52',
    english: 'What is the dialing code for international calls?',
    japanese: '国際電話のかけ方はどうすればよいですか？',
    category: 'Phone'
  },
  {
    id: '53',
    english: 'I would like to make a collect call.',
    japanese: 'コレクトコールで電話をかけたいのですが。',
    category: 'Phone'
  },
  {
    id: '54',
    english: 'Can you connect me to room 1205?',
    japanese: '1205号室に電話を回していただけますか？',
    category: 'Phone'
  },
  {
    id: '55',
    english: 'I have a message for Mr. Smith.',
    japanese: 'スミス様への伝言がございます。',
    category: 'Phone'
  },
  // Emergency phrases
  {
    id: '56',
    english: 'Is there an emergency exit nearby?',
    japanese: '近くに非常口はありますか？',
    category: 'Emergency'
  },
  {
    id: '57',
    english: 'Where is the fire extinguisher?',
    japanese: '消火器はどこにありますか？',
    category: 'Emergency'
  },
  {
    id: '58',
    english: 'Please call an ambulance immediately.',
    japanese: 'すぐに救急車を呼んでください。',
    category: 'Emergency'
  },
  {
    id: '59',
    english: 'I need to report a medical emergency.',
    japanese: '医療緊急事態を報告する必要があります。',
    category: 'Emergency'
  },
  {
    id: '60',
    english: 'Please contact the police.',
    japanese: '警察に連絡してください。',
    category: 'Emergency'
  },
  // Small Talk phrases
  {
    id: '61',
    english: 'How is the weather today?',
    japanese: '今日の天気はいかがですか？',
    category: 'Small Talk'
  },
  {
    id: '62',
    english: 'Are you enjoying your stay?',
    japanese: 'ご滞在はいかがでしょうか？',
    category: 'Small Talk'
  },
  {
    id: '63',
    english: 'Is this your first time visiting our city?',
    japanese: '当市へのご訪問は初めてですか？',
    category: 'Small Talk'
  },
  {
    id: '64',
    english: 'Do you have any plans for today?',
    japanese: '今日は何かご予定はありますか？',
    category: 'Small Talk'
  },
  {
    id: '65',
    english: 'I hope you have a wonderful day.',
    japanese: '素晴らしい一日をお過ごしください。',
    category: 'Small Talk'
  }
];
