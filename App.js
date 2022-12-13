import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import DestinationSearch from "./src/screens/DestinationSearch";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <HomeScreen /> */}
      <DestinationSearch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
