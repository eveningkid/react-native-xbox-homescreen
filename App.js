import React from 'react';
import { StatusBar } from 'react-native';
import {
  DarkTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNavigator from './src/navigation/BottomNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />

      <NavigationContainer theme={DarkTheme}>
        <BottomNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

