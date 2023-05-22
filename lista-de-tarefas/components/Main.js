import {
  View,
  Pressable,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { Component } from "react";

export default class Main extends Component {
  state = {
    tarefas: [],
    nomeTarefa: '.',
    descTarefa: '',
  };

  addTarefa() {
    this.setState({
      tarefas: [
        ...this.state.tarefas,
        {
          nome: this.state.nomeTarefa,
          descricao: "blabla",
        },
      ],
      nomeTarefa: "",
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
            style={{
              color: "black",
              fontSize: 20,
              fontWeight: 600,
              padding: 10,
            }}
          >
            To-do
          </Text>
        <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
          <TextInput
            placeholder="Digite o nome da tarefa"
            style={{ height: 30 }}
            onChangeText={nomeTarefa => this.setState({nomeTarefa})}
            defaultValue
          />
          <Pressable
          onPress={() => this.addTarefa()}
        >
          <Text
            style={{
              flex: 1,
              color: "white",
              fontSize: 30,
              fontWeight: 600,
              padding: 10,
              backgroundColor: '#a44aff',
              height: 30,
              textAlign: "center",
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            +
          </Text>
        </Pressable>
        </SafeAreaView>
        <FlatList
          data={this.state.tarefas}
          renderItem={({ item }) => (
            <View>
              <Text style={{backgroundColor: 'grey'}}>{item.nome}</Text>
              <Text>{item.descricao}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 300,
  }
})