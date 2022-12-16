import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#eee",
    borderWidth: 0.5,
    borderColor: "grey",
  },
  image: {
    height: 60,
    width: 70,
    resizeMode: "contain",
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  type: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  time: {
    color: "#5d5d5d",
  },
  rightContainer: {
    width: 100,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default styles;
