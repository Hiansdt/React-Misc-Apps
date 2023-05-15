import {View, Text, Button, StyleSheet, Pressable, Alert} from 'react-native'
import React, {Component} from 'react'

export default class Contador extends Component {
    state = {
        contador: 0
    }

    incrementar() {
        if (this.state.contador == this.props.limite) {
            Alert.alert(
                `O contador não pode ir acima de ${this.props.limite}!`
            )
        } else this.setState({contador: this.state.contador + 1})
    }

    decrementar() {
        if (this.state.contador > 0) this.setState({contador: this.state.contador - 1})
        else Alert.alert(
            'O contador não pode ir abaixo de 0!'
        )
    }
    render () {
        return (
            <View>
                <Text>Contador: {this.state.contador}</Text>
                <Pressable title="Incrementar" style={styles.increment} onPress={() => this.incrementar()}>
                    <Text style={styles.text}>Incrementar</Text>
                </Pressable>
                <Pressable style={styles.decrement} title="Decrementar" onPress={() => this.decrementar()}>
                    <Text style={styles.text}>Decrementar</Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    increment: {
        marginTop: 20,
        backgroundColor: '#21b5ff',
    },
    decrement: {
        marginTop: 20,
        backgroundColor: 'red',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
    }
})