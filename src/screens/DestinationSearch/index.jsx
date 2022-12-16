import { View, TextInput, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import styles from "./styles";
import { GOOGLE_MAPS_APIKEY } from "@env";

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn("Redirect to result");
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Origem"
          listViewDisplayed={"auto"}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          styles={{
            textInput: styles.textInput,
          }}
          onPress={(data, details = null) => {
            setOriginPlace({ data, details });
            console.log(data, details);
          }}
          // onFail={(error) => console.log(error)}
          // onNotFound={() => console.log("no results")}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "pt",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Destino"
          listViewDisplayed={"auto"}
          fetchDetails={true}
          styles={{
            textInput: styles.textInput,
          }}
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
            console.log(data, details);
          }}
          // onFail={(error) => console.log(error)}
          // onNotFound={() => console.log("no results")}
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
