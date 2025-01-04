import { StyleSheet, Text, View } from "react-native";


export default function Cronometro() {
  return (
    
      <View style={styles.container}>
        <Text>Cronometro</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center'
  }
})