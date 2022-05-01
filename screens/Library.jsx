import { StyleSheet, View, Text } from "react-native";
import Main from "../components/Main";
import { WebView } from "react-native-webview";
function Library({ route }) {
  const { name } = route;
  const libraryCover = require("../assets/coverImage/library.jpg");
  const coverImage = {
    source: libraryCover,
    darkness: "rgba(0, 0, 0, 0.12)",
    blurRadius: 1,
  };
  return (
    <Main name={name} coverImage={coverImage}>
      <View style={styles.center}>
          
      </View>
    </Main>
  );
}

export default Library;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
