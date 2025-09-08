import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LearningScreen } from './src/screens/LearningScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <LearningScreen />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
