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
    nomeTarefa: '',
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
      <View>
        <Pressable
          onPress={() => this.addTarefa()}
          style={{ backgroundColor: "rgb(50,50,50)" }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: 600,
              padding: 10,
            }}
          >
            Adicionar Tarefa
          </Text>
        </Pressable>
        <SafeAreaView>
          <TextInput
            placeholder="Digite o nome da tarefa"
            style={{ height: 40 }}
            onChangeText={nomeTarefa => this.setState({nomeTarefa})}
            defaultValue
          />
        </SafeAreaView>
        <FlatList
          data={this.state.tarefas}
          renderItem={({ item }) => (
            <View>
              <Text>{item.nome}</Text>
              <Text>{item.descricao}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
