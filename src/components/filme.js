import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";

import ModalFilmes from "./modalFilmes";

export default function Filme({ data }) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>
        <Image
          source={{ uri: data.foto }}
          style={styles.capa}
        />

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(true)}>
            <Text style={styles.btnTexto}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>

        <ModalFilmes filme={data} voltar={() => setModalVisible(false)} />

      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 12,
    elevation: 2,
  },
  capa: {
    height: 250,
    zIndex: 2
  },
  titulo: {
    padding: 12,
    fontSize: 18,
  },
  btnArea: {
    alignItems: "flex-end",
    marginTop: -45,
    zIndex: 9
  },
  btn: {
    width: 100,
    backgroundColor: "#09a6ff",
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  btnTexto: {
    textAlign: "center",
    color: "#fff"
  }
})