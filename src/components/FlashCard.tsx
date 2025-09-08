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
  },
  cardContainer: {
    width: width - 40,
    height: 300,
    marginBottom: 30,
  },
  card: {
    flex: 1,
    position: 'relative',
  },
  cardFace: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardBack: {
    backgroundColor: '#f0f8ff',
  },
  category: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    fontWeight: '600',
  },
  englishText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
    lineHeight: 24,
  },
  japaneseText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
    lineHeight: 28,
  },
  hintText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  navButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    minWidth: 100,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  disabledText: {
    color: '#999',
  },
});