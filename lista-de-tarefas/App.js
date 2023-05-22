import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./components/Main"
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 10, height: 10,}}>
        <Main />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'rgb(0,190,256)',
    alignItems: "center",
    justifyContent: "center",
  },
});
