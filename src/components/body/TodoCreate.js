import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const TodoCreate = () => {
    return (
    <View style={styles.todoCreateLayout}>
        <TextInput
            autoFocus
            placeholder="할 일을 입력해주세요."
            style={styles.todoCreateInput}
        >
        </TextInput>
        <TouchableOpacity style={{width: '30%'}}>
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
        width: '70%',
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