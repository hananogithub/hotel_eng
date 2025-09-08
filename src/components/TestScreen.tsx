import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { loadPhrases } from '../data/phraseLoader';
import { Phrase } from '../utils/csvParser';

export const TestScreen: React.FC = () => {
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTestData();
  }, []);

  const loadTestData = async () => {
    try {
      const loadedPhrases = await loadPhrases();
      setPhrases(loadedPhrases);
      console.log('Loaded phrases:', loadedPhrases.length);
    } catch (error) {
      console.error('Error loading test data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>データを読み込み中...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>テスト画面 - 読み込まれたフレーズ数: {phrases.length}</Text>
      
      {phrases.slice(0, 10).map((phrase, index) => (
        <View key={phrase.id} style={styles.phraseContainer}>
          <Text style={styles.english}>{phrase.english}</Text>
          <Text style={styles.japanese}>{phrase.japanese}</Text>
          <Text style={styles.category}>カテゴリー: {phrase.category}</Text>
        </View>
      ))}
      
      {phrases.length > 10 && (
        <Text style={styles.moreText}>... 他 {phrases.length - 10} 件</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  phraseContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  english: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  japanese: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
  },
  category: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
  moreText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
