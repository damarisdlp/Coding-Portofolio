import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    stepText: {
      color: "#000",
      fontSize: 20,
      textAlign: "center",
      fontWeight: "bold",
      paddingTop: 20,
    },
    inputLabel: {
      color: "#000",
      fontSize: 18,
      textAlign: "left",
      paddingTop: 10,
      paddingLeft: 20,
    },
    errorMessage: {
      color: "red",
      fontSize: 18,
      textAlign: "left",
      paddingTop: 10,
      paddingLeft: 20,
    },
    input: {
      alignItems: "baseline",
      height: 40,
      width: 120,
      marginLeft: 20,
      marginTop: 10,
      marginBottom: 10,
      borderWidth: 1,
      padding: 10,
    },
    radio: {
      alignItems: "baseline",
      marginLeft: 20,
      marginTop: 10,
      marginBottom: 10,
      padding: 10,
    },
  });

  export default styles;