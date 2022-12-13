import { View, TextInput, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styles from "./styles";

const DestinationSearch = () => {
  const [fromText, setFromText] = useState("");
  const [destinationText, setDestinationText] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          value={fromText}
          onChangeText={setFromText}
          style={styles.textInput}
          placeholder="Origem"
        />
        <TextInput
          value={destinationText}
          onChangeText={setDestinationText}
          style={styles.textInput}
          placeholder="Destino"
        />

        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "AIzaSyDgWNlOFvSw4gDl8Ar3zxczYV3sZx87dyM",
            language: "pt",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
