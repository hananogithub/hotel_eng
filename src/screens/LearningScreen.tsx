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
    backgroundColor: '#f8fafc',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#64748b',
    fontWeight: '500',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f8fafc',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 24,
    color: '#64748b',
    fontWeight: '500',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: 80,
    paddingBottom: 24,
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowColor: '#1e293b',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  backButton: {
    padding: 12,
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  backButtonText: {
    fontSize: 16,
    color: '#3b82f6',
    fontWeight: '700',
  },
  progressText: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '700',
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
});