import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main"
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{flex: 10, height: 10,}}>
        <Main />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'rgb(195,0,132)',
    alignItems: "center",
    justifyContent: "center",
  },
});
