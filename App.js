import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, AsyncStorage} from 'react-native';
import Header from 'components/header/Header';
import TodoItem from 'components/body/TodoItem';
import TodoCreate from 'components/body/TodoCreate';

export default class App extends React.Component {
  componentDidMount() {
    AsyncStorage.getItem('@todo:state').then((state) => {
      this.setState(JSON.parse(state))
    })
  }

  state = {
    todos: [
    {
      title: "일기쓰기",
      done: true,
    },
    ],
  }

  save = () => {
    AsyncStorage.setItem('@todo:state', JSON.stringify(this.state))
  }

  render() {
    const undone = this.state.todos.filter(todo => !todo.done);
    return (
      <SafeAreaView style={styles.container}>
        <Header />
          <Text style={{textAlign: 'center', marginBottom: 5  }}>남은 일이 {undone.length}개 남았어요.</Text>
        <TodoCreate 
          add={(title) => {
            this.setState({
              todos: this.state.todos.concat({
                title: title,
                done: false,
              }),
            }, this.save)
          }}
        />
        <FlatList 
          data={this.state.todos}
          renderItem={({ item, index }) => {
            return (
              <TodoItem
                title={item.title}
                done={item.done}
                keyExtractor={(id, index) => {
                  return id + '${index}'
                }}
                remove={() => {
                  this.setState({
                    todos: this.state.todos.filter((_, i) => i !== index)
                  }, this.save)
                }}
                toggle={() => {
                  const newTodos = [...this.state.todos]
                  newTodos[index].done = !newTodos[index].done
                  this.setState({ todos: newTodos}, this.save)
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