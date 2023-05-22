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
    nomeTarefa: "",
  };

  addTarefa() {
    this.setState({
      tarefas: [
        ...this.state.tarefas,
        {
          nome: this.state.nomeTarefa,
        },
      ],
      nomeTarefa: "",
    });
  }

  removerTarefa(index) {
    this.state.tarefas.splice(index, 1)
    this.setState({
      tarefas: this.state.tarefas,
    })
  }

  ativacaoDeTecla(e) {
    if (e.key == 'Enter') {
      this.addTarefa()
    }
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
        <SafeAreaView style={{ flex: 1, flexDirection: "row", padding: 10 }}>
          <TextInput
            placeholder="Digite o nome da tarefa"
            placeholderTextColor="rgb(100,100,100)"
            style={{
              padding: 10,
              borderColor: "rgb(200, 200, 200)",
              borderWidth: 1,
              borderRadius: 3,
            }}
            clearButtonMode="always"
            value={this.state.nomeTarefa}
            onChangeText={(nomeTarefa) => this.setState({ nomeTarefa })}
            onKeyPress={(e) => this.ativacaoDeTecla(e)}
          />
          <Pressable
            onPress={() => this.addTarefa()}
            style={{
              justifyContent: "center",
              height: "100%",
              borderRadius: 2,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: 600,
                width: 30,
                backgroundColor: "#a44aff",
                textAlign: "center",
                borderRadius: 2,
              }}
            >
              +
            </Text>
          </Pressable>
        </SafeAreaView>
        <FlatList
          style={{ marginTop: 10, padding: 10 }}
          data={this.state.tarefas}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 3,
                flex: 1,
                flexDirection: "row",
                backgroundColor: "rgb(235, 235, 235)",
              }}
            >
              <Text style={{ padding: 5 }}>{item.nome}</Text>
              <Pressable
                onPress={() => this.removerTarefa(this.state.tarefas.indexOf(item))}
                style={{
                  justifyContent: "center",
                  height: "100%",
                  borderRadius: 2,
                  position: 'absolute',
                  right: 0,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: 600,
                    backgroundColor: "red",
                    textAlign: "center",
                    borderRadius: 2,
                    marginBottom: 5,
                    width: 20,
                  }}
                >
                  x
                </Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 300,
    borderRadius: 3,
  },
});
