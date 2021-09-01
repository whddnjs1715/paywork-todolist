import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9ecef',
  },
});