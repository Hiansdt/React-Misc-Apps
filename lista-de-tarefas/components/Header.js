import {View, Text, StyleSheet} from 'react-native'
import React, {Component} from 'react'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.text}>
                    Lista de Tarefas
                </Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: 'white'
    }
});