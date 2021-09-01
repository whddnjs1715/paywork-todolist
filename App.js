import React from 'react';
import { StyleSheet, SafeAreaView, } from 'react-native';
import Header from './src/components/header/Header';
import TodoItem from './src/components/body/TodoItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TodoItem title="리액트 공부" done={true} />
      <TodoItem title="알고리즘 공부" done={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9ecef',
  },
});