import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import DeleteButton from 'components/button/DeleteButton';


const TodoItem = ({ title, done, remove, toggle, }) => {
    return (
        <View style={styles.todoItemLayout}>
            <View style={styles.todoItemLayer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={toggle}
                    style={done ? styles.done : styles.check}
                >
                    <FontAwesome name="check" color={done ? '#FFFFFF' : '#E0E0E0'} size={14} />
                </TouchableOpacity>
                <Text style={styles.todoItemTitle} style={done ? {fontWeight: '100'} : {fontWeight: 'bold'}}>
                    {title}
                </Text>
            </View>
            <DeleteButton onPress={remove}/>
        </View>
    )
}

const styles = StyleSheet.create({
    todoItemLayout: {
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        flexDirection:'row',
    },
    todoItemLayer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        width: '80%',
    },
    todoItemTitle: {
        fontSize: 16,
    },
    check: {
        borderWidth: 1,
        borderColor: '#E5E5E5',
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight : 8,
        borderRadius: 14,
    },
    done: {
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight : 8,
        borderRadius: 14,
        backgroundColor: '#999',
    }
})

export default TodoItem