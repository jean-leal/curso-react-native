import React from "react";

import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function ModalFilmes({ filme, voltar }) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
          <Text style={{ color: '#fff', fontSize: 16 }}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>{filme.nome}</Text>
        <Text style={styles.sinopse}>Sinopse: </Text>
        <Text style={styles.descricao}>{filme.sinopse}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: '100%',
    height: '90%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,

  },
  btnVoltar: {
    backgroundColor: '#e52246',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  titulo: {
    color: '#fff',
    fontSize: 26,
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
  },
  sinopse: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 10,
  },
  descricao: {
    color: '#fff',
    marginLeft: 10,
    marginRight: 10,
  }
})