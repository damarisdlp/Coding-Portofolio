import React, { createContext, useContext, useState } from 'react'
import { View,Text,TextInput } from 'react-native'
import styles from '../../style/style';
import { UnitsSystemContext } from '../StepOne/UnitsSystem';

const WeightContext = createContext();

function UserWeight(props) {
    const [weight, setWeight] = useState(0);
    const units = useContext(UnitsSystemContext);

    if (units === 0) {
      if (isNaN(weight) || weight === " ") {
        return (
          <View>
          <WeightContext.Provider value={weight}>
              <Text style={styles.inputLabel}>Weight:</Text>
              <TextInput
                style={styles.input}
                placeholder="Pounds"
                onChangeText={(UserWeight) => setWeight(UserWeight)}
                defaultValue={weight}
                keyboardType="numeric"
              />
              <Text style={styles.errorMessage}>
                Error: Please enter a numerical value
              </Text>
              {props.children}
              </WeightContext.Provider>
          </View>
        );
      } else {
        return (
          <View>
          <WeightContext.Provider value={weight}>
              <Text style={styles.inputLabel}>Weight:</Text>
              <TextInput
                style={styles.input}
                placeholder="Pounds"
                onChangeText={(UserWeight) => setWeight(UserWeight)}
                defaultValue={weight}
                keyboardType="numeric"
              />
              {props.children}
              </WeightContext.Provider>
          </View>
        );
      }
    } else {
      if (isNaN(weight) || weight === " ") {
        return (
          <View>
          <WeightContext.Provider value={weight}>
              <Text style={styles.inputLabel}>Weight:</Text>
              <TextInput
                style={styles.input}
                placeholder="Kilograms"
                onChangeText={(UserWeight) => setWeight(UserWeight)}
                defaultValue={weight}
                keyboardType="numeric"
              />
              <Text style={styles.errorMessage}>
                Error: Please enter a numerical value
              </Text>
              {props.children}
              </WeightContext.Provider>
          </View>
        );
      } else {
        return (
          <View>
          <WeightContext.Provider value={weight}>
              <Text style={styles.inputLabel}>Weight:</Text>
              <TextInput
                style={styles.input}
                placeholder="Kilograms"
                onChangeText={(UserWeight) => setWeight(UserWeight)}
                defaultValue={weight}
                keyboardType="numeric"
              />
              {props.children}
              </WeightContext.Provider>
          </View>
        );
      }
    }
  }

  export {WeightContext, UserWeight};