import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>Contador (Teste-1)</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: 'large',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
    }
})