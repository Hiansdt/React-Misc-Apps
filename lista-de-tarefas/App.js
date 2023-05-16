import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main"
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.container}>
        <Main />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
