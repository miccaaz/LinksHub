import { Text, View, StyleSheet} from "react-native";

export default function Index() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Hello </Text>;
      <Text style={ styles.title }>React Native!</Text>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title:{
    color: "red",
    fontSize: 22
  }
})