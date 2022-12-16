import { View, Text, Image } from "react-native";
import React from "react";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  MyCustomMarkerView,
} from "react-native-maps";

const HomeMap = () => {
  return (
    <MapView
      style={{ height: "100%", width: "100%" }}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: -23.01869,
        longitude: -43.48009,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0111,
      }}
    >
      <Marker coordinate={{ latitude: -23.01869, longitude: -43.48009 }}>
        <Image
          style={{ width: 40, height: 40, resizeMode: "contain" }}
          source={require("../../assets/images/UberXL.png")}
        />
      </Marker>
    </MapView>
  );
};

export default HomeMap;
