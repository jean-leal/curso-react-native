import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function BiscoitoSorte() {
  const frases = [
    'A vida trará coisas boas se tiveres paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Gente todo dia arruma os cabelos, por que não o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'
  ]
  const [textoFrase, setTextoFrase] = useState('');
  const [img, setImg] = useState(require('../../assets/biscoito-fechado.png'));

  const quebraBiscoito = () => { //função de abrir o biscoito
    const numeroAleatorio = Math.floor(Math.random() * frases.length);// cria um numero aleatorio que considera a quantidade de frazes que tem na variavel frases
    setTextoFrase('" ' + frases[numeroAleatorio]+ ' "');// pegando o numero aleatorio criado acima e adiciando na variavel textofrase para mostrar em tela  
    setImg(require('../../assets/biscoito-aberto.png'))
  }
  return (
    <View style={styles.container}>
      <Image
        source={img}
        style={styles.img}
      />
      <Text style={styles.textoFrase}> {textoFrase} </Text>
      <TouchableOpacity style={styles.btn} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Abrir biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btn: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }

})