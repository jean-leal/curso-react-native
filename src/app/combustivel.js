import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert, Modal } from "react-native";

export default function BiscoitoSorte() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');
  const [modal, setModal] = useState(false);

  const Calcular = () => {
    const res = alcool / gasolina;

    if (alcool !== '' || gasolina !== '') {
      setModal(true);
      res >= 0.7 ? setResultado('Gasolina') : setResultado('Álcool');
    } else {
      Alert.alert('Preencha todos os campos')
      setModal(false);
    }
  }

  const Refazer = () => {
    setAlcool('');
    setGasolina('');
    setResultado('');
    setModal(false);
  }


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
          onChangeText={(text) => setAlcool(text.replace(',', '.'))} // Substitui a virgula por ponto
        />
        <Text style={styles.textoInput}>Gasolina (preco por litro):</Text>
        <TextInput
          placeholder="R$ Gasolina"
          style={styles.input}
          keyboardType="numeric"
          value={gasolina}
          onChangeText={(text) => setGasolina(text.replace(',', '.'))} // Substitui a virgula por ponto
        />
      </View>

      <View style={styles.btnArea}>
        <TouchableOpacity
          style={styles.btn}
          onPress={Calcular}
        >
          <Text style={styles.btnTexto}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modal}
      >
        <View style={styles.container}>
          <View style={styles.imgArea}>
            <Image
              style={styles.img}
              source={require('../../assets/gas.png')}
            />
          </View>
          <View style={styles.tituloArea}>
            <Text style={{color:'#6abf31', fontSize:26, fontWeight: 'bold'}}> {'A melhor opção é: ' + resultado} </Text>
          </View>
          <View style={styles.tituloArea}>
            <Text style={styles.tituloTexto}> Com os Preços: </Text>
            <Text style={{ color: 'white', fontSize: 18 }}>{'Álcool: R$ ' + alcool}</Text>
            <Text style={{ color: 'white', fontSize: 18 }}>{'Gasolina: R$ ' + gasolina}</Text>
          </View>
          <View style={styles.btnArea}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTexto} onPress={Refazer}>Refazer Cálculo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    alignItems: 'center', 
    marginTop: 40
  },
  tituloArea: {
    marginTop: 20,
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
    fontSize: 18,
    padding: 5,
    marginTop: 5,
    height: 40,
    borderRadius: 8,
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