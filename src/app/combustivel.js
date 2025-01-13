import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";

export default function BiscoitoSorte() {
  const [alcool, setAlcool] = useState();
  const [gasolina, setGasolina] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.imgArea}>
        <Image
          style={styles.img}
          source={require('../../assets/logo.png')}
        />
      </View>
      <View style={styles.tituloArea}>
        <Text style={styles.tituloTexto}> Qual a melhor opção? </Text>
      </View>
      <View style={styles.inputArea}>
        <Text style={styles.textoInput}>Álcool (preco por litro):</Text>
        <TextInput
          placeholder="R$ Alcool"
          style={styles.input}
          keyboardType="numeric"
          value={alcool}
          onChangeText={(text) => setAlcool(text)}
        />
        <Text style={styles.textoInput}>Gasolina (preco por litro):</Text>
        <TextInput
          placeholder="R$ Gasolina"
          style={styles.input}
          keyboardType="numeric"
          value={gasolina}
          onChangeText={(text) => setGasolina(text)}
        />
      </View>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTexto}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  imgArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tituloArea:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  tituloTexto: {
    fontSize: 26,
    color: 'white',
    marginTop: 20,
    fontWeight: 'bold'
  },
  inputArea: {
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start', 
    margin: 20,
  },
  textoInput: {
    fontSize: 18,
    color: 'white',
    marginTop: 20,
    fontWeight: 'bold'
  },
  input: {
    marginTop: 5,
    height: 40,
    borderRadius: 10,
    color: 'black',
    backgroundColor: 'white',
  }
  ,
  img: {
    width: 200,
    height: 200
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: '#ff360e'
  },
  btnArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }

})