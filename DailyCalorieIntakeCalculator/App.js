import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, View, ScrollView } from 'react-native';
import {StepOne} from "./src/components/StepOne/StepOne"

class App extends Component {
  render() {
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Calorie Calculator</Text>
      <StepOne/>
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: "#000",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",  },
});


export default App;
