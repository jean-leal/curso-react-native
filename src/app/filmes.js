import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";

import Filme from "../components/filme";

export default function Filmes() {
  const [filmes, setFilmes] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await fetch('https://sujeitoprogramador.com/r-api/?api=filmes')

        if (!response.ok) {
          throw new Error("Erro ao buscar os dados da API");
        }
        const result = await response.json()
        setFilmes(result)
        setLoading(false)
      } catch (error) {
        alert(error.message)
      }
    }

    data()
  }, [])

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color="#121212" size={45} />
        <Text>Carregando filmes...</Text>
      </View>
    )
  } else {

    return (
      <View style={styles.container}>
        <FlatList
          data={filmes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Filme data={item} />}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})