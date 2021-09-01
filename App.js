import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, } from 'react-native';
import Header from 'components/header/Header';
import TodoItem from 'components/body/TodoItem';
import TodoCreate from 'components/body/TodoCreate';

export default class App extends React.Component {
  state = {
    todos: [
    {
      title: "일기쓰기",
      done: true,
    },
    ],
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <TodoCreate 
          add={(title) => {
            this.setState({
              todos: this.state.todos.concat({
                title: title,
                done: false,
              }),
            })
          }}
        />
        <FlatList 
          data={this.state.todos}
          renderItem={({ item, index }) => {
            return (
              <TodoItem
                title={item.title}
                done={item.done}
                remove={() => {
                  this.setState({
                    todos: this.state.todos.filter((_, i) => i !== index)
                  })
                }}
                toggle={() => {
                  const newTodos = [...this.state.todos]
                  newTodos[index].done = !newTodos[index].done
                  this.setState({ todos: newTodos})
                }}
              />
            )
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9ecef',
  },
});