import {
  View,
  Pressable,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ImageBackground,
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
    this.state.tarefas.splice(index, 1);
    this.setState({
      tarefas: this.state.tarefas,
    });
  }

  ativacaoDeTecla(e) {
    if (e.key == "Enter") {
      this.addTarefa();
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
          Todo App
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
              height: 35,
              width: 250,
            }}
            clearButtonMode="always"
            value={this.state.nomeTarefa}
            onChangeText={(nomeTarefa) => this.setState({ nomeTarefa })}
            onKeyPress={(e) => this.ativacaoDeTecla(e)}
          />
          <Pressable
            onPress={() => this.addTarefa()}
            style={{
              height: 35,
              borderRadius: 2,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "purple",
                fontSize: 30,
                fontWeight: 600,
                width: 30,
                textAlign: "center",
                borderRadius: 2,
              }}
            >
              +
            </Text>
          </Pressable>
        </SafeAreaView>
        <ImageBackground source={{uri: 'https://wallpapercave.com/wp/wp6621664.jpg'}} style={{marginTop: 40, resizeMode: 'contain', height: 250,}}>
          <FlatList
            style={{ padding: 10, marginBottom: 10 }}
            data={this.state.tarefas}
            renderItem={({ item }) => (
              <View
                style={{
                  padding: 3,
                  flex: 1,
                  flexDirection: "row",
                  backgroundColor: "rgba(50, 50, 50, 0.4)",
                  marginBottom: 10,
                  alignContent: "center",
                  height: 35,
                }}
              >
                <Text style={{ padding: 5, color: 'white'}}>{item.nome}</Text>
                <Pressable
                  onPress={() =>
                    this.removerTarefa(this.state.tarefas.indexOf(item))
                  }
                  style={{
                    justifyContent: "center",
                    height: 35,
                    borderRadius: 2,
                    position: "absolute",
                    right: 0,
                  }}
                >
                  <Text
                    style={{
                      color: "rgba(240, 50, 50, 1)",
                      fontSize: 25,
                      fontWeight: 600,
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
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: "50%",
    borderRadius: 3,
    height: "50%",
    width: 300
  },
});
