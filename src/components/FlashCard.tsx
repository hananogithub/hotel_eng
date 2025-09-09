import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from 'react-native';
import { Phrase } from '../utils/csvParser';

interface FlashCardProps {
  phrase: Phrase;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const { width } = Dimensions.get('window');

export const FlashCard: React.FC<FlashCardProps> = ({
  phrase,
  onNext,
  onPrevious,
  isFirst,
  isLast,
}) => {
  const [showJapanese, setShowJapanese] = useState(false);
  const [flipAnimation] = useState(new Animated.Value(0));

  const flipCard = () => {
    Animated.timing(flipAnimation, {
      toValue: showJapanese ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setShowJapanese(!showJapanese);
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={flipCard} style={styles.card}>
          <Animated.View
            style={[
              styles.cardFace,
              { transform: [{ rotateY: frontInterpolate }] },
            ]}
          >
            <Text style={styles.category}>{phrase.category}</Text>
            <Text style={styles.englishText}>{phrase.english}</Text>
            <Text style={styles.hintText}>タップして日本語を表示</Text>
          </Animated.View>
          <Animated.View
            style={[
              styles.cardFace,
              styles.cardBack,
              { transform: [{ rotateY: backInterpolate }] },
            ]}
          >
            <Text style={styles.category}>{phrase.category}</Text>
            <Text style={styles.japaneseText}>{phrase.japanese}</Text>
            <Text style={styles.hintText}>タップして英語を表示</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>

      <View style={styles.navigation}>
        <TouchableOpacity
          style={[styles.navButton, isFirst && styles.disabledButton]}
          onPress={onPrevious}
          disabled={isFirst}
        >
          <Text style={[styles.navButtonText, isFirst && styles.disabledText]}>
            前へ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, isLast && styles.disabledButton]}
          onPress={onNext}
          disabled={isLast}
        >
          <Text style={[styles.navButtonText, isLast && styles.disabledText]}>
            次へ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#f8fafc',
  },
  cardContainer: {
    width: width - 40,
    height: 320,
    marginBottom: 40,
  },
  card: {
    flex: 1,
    position: 'relative',
  },
  cardFace: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
    elevation: 8,
    shadowColor: '#1e293b',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardBack: {
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backgroundColor: '#f1f5f9',
  },
  category: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    backgroundColor: '#e2e8f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  englishText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: '600',
    lineHeight: 28,
    color: '#1e293b',
  },
  japaneseText: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: '600',
    lineHeight: 32,
    color: '#1e293b',
  },
  hintText: {
    fontSize: 13,
    color: '#94a3b8',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 16,
  },
  navButton: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 16,
    minWidth: 120,
    elevation: 4,
    shadowColor: '#3b82f6',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  disabledButton: {
    backgroundColor: '#cbd5e1',
    elevation: 0,
    shadowOpacity: 0,
  },
  navButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  disabledText: {
    color: '#94a3b8',
  },
});