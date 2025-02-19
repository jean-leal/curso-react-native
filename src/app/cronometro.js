import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


export default function Cronometro() {
  const [numero, setNumero] = useState(0.0)
  const [timer, setTimer] = useState(null)
  const [btnInicio, setBtnInicio] = useState("INICIAR")

  const iniciar = () => {
    if (timer !== null) {
      clearInterval(timer)
      setTimer(null)
      setBtnInicio("INICIAR")
    } else {     
      setTimer(setInterval(() => {
        setNumero((numero) => numero + 0.1)
      }, 100))
      setBtnInicio("PAUSAR")
    }
  }

  const zerar = () => {
    if(timer !== null ){
      clearInterval(timer)
      setTimer(null)
    }
    setNumero(0.0)
    setBtnInicio("INICIAR")
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/cronometro.png')}
        style={styles.cronometro}
      />
      <Text style={styles.timer}>{numero.toFixed(1)}</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnTexto}>{btnInicio}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={zerar}>
          <Text style={styles.btnTexto}>ZERAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cronometro: {

  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    fontSize: 65,
    fontWeight: 'bold',
    color: "#fff"
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 80
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 16,
    borderRadius: 10
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  }

})