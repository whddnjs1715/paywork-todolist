import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native';
import Logo from '../../../images/logo-dark.jpg';

const Header = () => {
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

    return (
        <View style={styles.HeaderLayout}>
            <View style={styles.HeaderLayer}>
                <Image 
                    style={styles.HeaderImg}
                    source={Logo}
                />
                <View>
                    <Text>{dateString}</Text>
                    <Text style={{textAlign: 'center'}}>{dayName}</Text>
                </View>
            </View>
            <View>
            <Text style={styles.HeaderTitle}>Todo List</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderLayout: {
        width: '100%',
        height: '20%',
        borderBottomWidth: 1,
        borderColor: '#999',
        marginBottom: 500,
    },
    HeaderLayer: {
        height:'20%',
        width:'20%',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    HeaderImg: {
        height:'150%',
        width:'150%',
        resizeMode:'contain',
        marginRight: 140,
        marginLeft: 10,
    },
    HederWrapper: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 30,
    },
    HeaderTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 30,
    },
})

export default Header;