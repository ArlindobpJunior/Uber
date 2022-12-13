import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Viaje apenas se necessário</Text>
      <Text style={styles.text}>
        Se precisar viajar, por favor tenha cuidado com sua segurança e a
        segurança de outros.
      </Text>
      <Text style={styles.learnMore}>Saiba mais</Text>
    </View>
  );
};

export default CovidMessage;
