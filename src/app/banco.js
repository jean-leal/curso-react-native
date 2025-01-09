import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Switch } from "react-native";
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function Banco() {

  const [limite, setLimite] = useState(200)
  const [estudante, setEstudante] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.cabecalho}>Banco React</Text>
      
      <View>
        <Text style={styles.textoNome}>Nome: </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome: "
        />
      </View>

      <View>
        <Text style={styles.textoNome}>Idade: </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua idade:"
          inputMode="decimal"
        />
      </View>

      <Picker>
        <Picker.Item label="Masculino" value="masculino" />
        <Picker.Item label="Feminino" value="feminino" />
        <Picker.Item label="Outro" value="outro" />
      </Picker>
      
      <View>
      <Text style={styles.textoNome}>Informe seu Limite: </Text>
        <Slider
          minimumValue={0}
          maximumValue={1000}
          onValueChange={(valor) => setLimite(valor)}
        />
        <Text>{limite.toFixed(2)}</Text>
      </View>
      <View style={styles.areaEstudante}>
        <Text style={styles.textoNome}>Estudante:</Text>
        <Switch
          style={{ padding: 15 }}
          value={estudante}
          onValueChange={(v) => setEstudante(v)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24
  },
  cabecalho: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  areaEstudante: {
    borderColor: "#ffff",
    flexDirection: 'row',
    alignItems: 'center'
  },
  textoNome: {
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999999',
    backgroundColor: '#EEEEEE',
    color: '#000000',
    height: 38,
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
  },
})