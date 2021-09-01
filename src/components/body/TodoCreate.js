import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const TodoCreate = ({ add, }) => {
    let content = ''
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const handleAddTask = (content) => {
        console.log(content);
      }
    const onChangeText = (text) => {
        content = text
    }
    return (
    <View style={styles.todoCreateLayout}>
        <TextInput
            autoFocus
            style={styles.todoCreateInput}
            placeholder="할 일을 입력 후, Enter를 누르세요."
            onChangeText={onChangeText}
            onEndEditing={() => add(content)}
        >
        </TextInput>
        <TouchableOpacity 
            style={{width: '30%'}}
        >
            <View style={styles.todoCreateButton}>
                <Text>추가하기</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    todoCreateLayout: {
        height: 50,
        flexDirection: 'row',
        borderWidth: 1,
    },
    todoCreateInput: {
        backgroundColor: '#FFFFFF',
        width: '100%',
    },
    todoCreateButton: {
        width: 120,
        height: '100%',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderLeftWidth: 1,
    }
})

export default TodoCreate;