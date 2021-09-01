import React from 'react';
import { FlatList, } from 'react-native';
import TodoItem from './TodoItem';
import { render } from 'react-dom';

const TodoList = () => {
    const todos = [
        {
            id: 1,
            text: '아침에 일찍 일어나기',
            done: true
        },
        {
            id: 2,
            text: '리액트 공부하기',
            done: true
        },
        {
            id: 3,
            text: '점심식사 하기',
            done: false
        },
        {
            id: 4,
            text: '리액트 복습하기',
            done: false
        },
        {
            id: 5,
            text: '집밖에 나가지 말기',
            done: false
        }
    ];

    return (
        <FlatList 
            data={this.state.todos}
            renderItem={({ item }) => {
                return (
                    <TodoItem
                        title={item.title}
                        done={item.done}
                        keyExtractor={(_, index) => {
                            return '${index}'
                        }}
                    />
                )
            }}
        />
    )
}