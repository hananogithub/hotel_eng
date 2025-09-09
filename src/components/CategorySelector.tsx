import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

interface CategorySelectorProps {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
  onAllCategories: () => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  onAllCategories,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>カテゴリーを選択してください</Text>
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={[
            styles.categoryButton,
            selectedCategory === null && styles.selectedCategory,
          ]}
          onPress={onAllCategories}
        >
          <Text
            style={[
              styles.categoryButtonText,
              selectedCategory === null && styles.selectedCategoryText,
            ]}
          >
            すべてのカテゴリー
          </Text>
        </TouchableOpacity>

        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory,
            ]}
            onPress={() => onCategorySelect(category)}
          >
            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 80,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 48,
    marginTop: 24,
    color: '#1e293b',
    letterSpacing: -0.5,
  },
  scrollView: {
    flex: 1,
  },
  categoryButton: {
    backgroundColor: '#ffffff',
    padding: 24,
    marginBottom: 16,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#1e293b',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  selectedCategory: {
    backgroundColor: '#3b82f6',
    borderColor: '#2563eb',
    elevation: 8,
    shadowOpacity: 0.2,
    transform: [{ scale: 1.02 }],
  },
  categoryButtonText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1e293b',
    letterSpacing: -0.2,
  },
  selectedCategoryText: {
    color: '#ffffff',
  },
});