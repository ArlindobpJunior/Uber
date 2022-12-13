import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const HomeSearch = () => {
  return (
    <View>
      {/* Input Box */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Para Onde?</Text>
        <View style={styles.timeContainer}>
          <Icon name={"clock"} size={20} />
          <Text>Agora</Text>
          <Icon name={"arrow-down-thin"} size={20} />
        </View>
      </View>

      {/* Previous Destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Icon name={"clock"} size={20} />
        </View>
        <Text style={styles.destinationText}>Restaurante Tia Graça</Text>
      </View>

      {/* Home Destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: "#1597e5" }]}>
          <Icon name={"home"} size={20} />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
