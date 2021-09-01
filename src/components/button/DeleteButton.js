import React from 'react'
import { TouchableOpacity, StyleSheet, } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const DeleteButton = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.deleteButton}
        >
            <AntDesign name="delete" size={14} color="#999"/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    deleteButton: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#E5E5E5', 
    },
})

export default DeleteButton