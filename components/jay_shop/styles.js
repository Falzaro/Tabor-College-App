import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    marginTop: 5,
    overflow: "hidden",
    alignItems: "center",
    borderRadius: 5,
  },
  imageLayout: {
    width: 200,
    height: 200,
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 5,
    borderColor: "#f7d117",
    borderWidth: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  price: {
    alignItems: "center",
    paddingHorizontal: 10,
    color: "white",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#003082",
    borderColor: "#f7d117",
    borderWidth: 1,
    paddingBottom: 5,
  },
  name: {
    textAlign: "center",
    color: "white",
    paddingHorizontal: 10,
  },
});
