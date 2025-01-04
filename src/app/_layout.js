import React from "react";
import { StatusBar, SafeAreaView, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function Layout() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light" backgroundColor="black" />
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Biscoito Sorte",
            tabBarIcon: ({ focused, color, size }) => {
              return <MaterialCommunityIcons name="cookie" size={24} />
            }
          }}
        />
        <Tabs.Screen
          name="cronometro"
          options={{
            headerShown: false,
            title: "Cronometro",
            tabBarIcon: ({ focused, color, size }) => {
              return <MaterialCommunityIcons name="clock" size={24} />
            }
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});