import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";
import UberTypeRow from "../UberTypeRow";
import typesData from "../../assets/data/types";

const UberTypes = () => {
  const confirm = () => {
    console.warn("confirm");
  };

  return (
    <View>
      {typesData.map((type) => (
        <UberTypeRow type={type} key={type.id} />
      ))}
      <Pressable onPress={confirm} style={styles.buttonText}>
        <Text style={styles.text}>Confirme Viagem</Text>
      </Pressable>
    </View>
  );
};

export default UberTypes;
