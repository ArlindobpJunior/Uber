import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

import Ionicons from "react-native-vector-icons/Ionicons";

const UberTypeRow = (props) => {
  const { type } = props;

  const getImage = () => {
    if (type.type === "UberX") {
      return require("../../assets/images/UberX.jpg");
    } else if (type.type === "Comfort") {
      return require("../../assets/images/Comfort.jpg");
    } else return require("../../assets/images/UberXL.png");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={getImage()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} <Ionicons name={"person"} size={16} />3
        </Text>
        <Text style={styles.time}>8:03PM drop pff</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={"pricetag"} size={18} color={"#00ff00"} />
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </View>
  );
};

export default UberTypeRow;
