import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Switch, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function Banco() {
  let sexoItems = ['Masculino', 'Feminino', 'Outro']

  const [limite, setLimite] = useState(200)
  const [estudante, setEstudante] = useState(false)
  const [sexo, setSexo] = useState(0)
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')

  const enviarDados = () => {

    if (nome === '' || idade === '') {
      alert('Preencha todos dados corretamente!')
      return;
    }

    alert(
      'Conta aberta com sucesso!! \n\n' +
      'Nome: ' + nome + '\n' +
      'Idade: ' + idade + '\n' +
      'Sexo: ' + sexoItems[sexo] + ' \n' +
      'Limite Conta: ' + limite.toFixed(0) + '\n' +
      'Conta Estudante: ' + ((estudante) ? 'Ativo' : 'Inativo')
    );

  }

  return (

    <View style={styles.container}>
      <Text style={styles.cabecalho}>Banco React</Text>

      <View>
        <Text style={styles.textoNome}>Nome: </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome: "
          onChangeText={(valor) => setNome(valor)}
        />
      </View>

      <View>
        <Text style={styles.textoNome}>Idade: </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua idade:"
          inputMode="decimal"
          onChangeText={(valor) => setIdade(valor)}
        />
      </View>

      <Picker
        selectedValue={sexo}
        onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
      >
        {sexoItems.map((v, k) => { 
          return <Picker.Item key={k} value={k} label={v} /> }
          )}

      </Picker>

      <View>
        <Text style={styles.textoNome}>Informe seu Limite: </Text>
        <Slider
          minimumValue={0}
          maximumValue={1000}
          onValueChange={(valor) => setLimite(valor)}
        />
        <Text>{limite.toFixed(0)}</Text>
      </View>
      <View style={styles.areaEstudante}>
        <Text style={styles.textoNome}>Estudante:</Text>
        <Switch
          style={{ padding: 15 }}
          value={estudante}
          onValueChange={(v) => setEstudante(v)}
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={enviarDados} underlayColor="#000000">
        <Text style={styles.botaoTexto}>Abrir Conta</Text>
      </TouchableOpacity>
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
  botao: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 15,
    margin: 20
  },
  botaoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
})