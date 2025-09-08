import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { FlashCard } from '../components/FlashCard';
import { CategorySelector } from '../components/CategorySelector';
import { loadPhrases, getPhrases } from '../data/phraseLoader';
import { Phrase, getCategories, getPhrasesByCategory } from '../utils/csvParser';

export const LearningScreen: React.FC = () => {
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [filteredPhrases, setFilteredPhrases] = useState<Phrase[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showCategorySelector, setShowCategorySelector] = useState(true);

  useEffect(() => {
    initializeData();
  }, []);

  const initializeData = async () => {
    try {
      setLoading(true);
      const loadedPhrases = await loadPhrases();
      setPhrases(loadedPhrases);
      setFilteredPhrases(loadedPhrases);
      setCategories(getCategories(loadedPhrases));
    } catch (error) {
      Alert.alert('エラー', 'データの読み込みに失敗しました');
      console.error('Error initializing data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    const filtered = getPhrasesByCategory(phrases, category);
    setFilteredPhrases(filtered);
    setCurrentIndex(0);
    setShowCategorySelector(false);
  };

  const handleAllCategories = () => {
    setSelectedCategory(null);
    setFilteredPhrases(phrases);
    setCurrentIndex(0);
    setShowCategorySelector(false);
  };

  const handleNext = () => {
    if (currentIndex < filteredPhrases.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleBackToCategories = () => {
    setShowCategorySelector(true);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.loadingText}>データを読み込み中...</Text>
      </View>
    );
  }

  if (showCategorySelector) {
    return (
      <CategorySelector
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
        onAllCategories={handleAllCategories}
      />
    );
  }

  if (filteredPhrases.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>選択されたカテゴリーにフレーズがありません</Text>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToCategories}>
          <Text style={styles.backButtonText}>カテゴリー選択に戻る</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentPhrase = filteredPhrases[currentIndex];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToCategories}>
          <Text style={styles.backButtonText}>← カテゴリー</Text>
        </TouchableOpacity>
        <Text style={styles.progressText}>
          {currentIndex + 1} / {filteredPhrases.length}
        </Text>
      </View>

      <FlashCard
        phrase={currentPhrase}
        onNext={handleNext}
        onPrevious={handlePrevious}
        isFirst={currentIndex === 0}
        isLast={currentIndex === filteredPhrases.length - 1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  progressText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
});