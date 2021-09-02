import React from 'react'
import { StyleSheet, View, Text, Image, } from 'react-native'
import Logo from '../../../assets/logo-dark.jpg';

const Header = () => {
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
    
    return (
        <View style={styles.headerLayout}>
            <View style={styles.headerLayer}>
                <Image 
                    style={styles.headerImg}
                    source={Logo}
                />
                <View style={styles.headerContainer}>
                    <Text>{dateString}</Text>
                    <Text style={{textAlign: 'center'}}>{dayName}</Text>
                </View>
            </View>
            <Text style={styles.headerTitle}>
                Todo List
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerLayout: {
        marginTop: 30,
        marginBottom : 10,
        marginLeft: 16,
    },
    headerLayer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerImg: {
        resizeMode:'contain',
        height: '60%',
        width:'20%',
        justifyContent: 'flex-end',
    },
    headerContainer: {
        marginRight: 10,
    },
    headerTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 30,
    }
})

export default Header 