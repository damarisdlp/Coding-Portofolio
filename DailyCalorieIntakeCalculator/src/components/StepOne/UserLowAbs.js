import React, { createContext, useContext, useState } from 'react'
import { View,Text,TextInput } from 'react-native'
import styles from '../../style/style';
import { UnitsSystemContext } from '../StepOne/UnitsSystem';

const LowAbsContext = createContext();

function UserLowAbs(props) {
    const [lowAbs, setLowAbs] = useState(0);
    const units = useContext(UnitsSystemContext);

    if (units === 0) {
      if (isNaN(lowAbs) || lowAbs === " ") {
        return (
          <View>
          <LowAbsContext.Provider value={lowAbs}>
              <Text style={styles.inputLabel}>Low Abs:</Text>
              <TextInput
                style={styles.input}
                placeholder="Inches"
                onChangeText={(UserLowAbs) => setLowAbs(UserLowAbs)}
                defaultValue={lowAbs}
                keyboardType="numeric"
              />
              <Text style={styles.errorMessage}>
                Error: Please enter a numerical value
              </Text>
              {props.children}
              </LowAbsContext.Provider>
          </View>
        );
      } else {
        return (
          <View>
          <LowAbsContext.Provider value={lowAbs}>
              <Text style={styles.inputLabel}>Low Abs:</Text>
              <TextInput
                style={styles.input}
                placeholder="Inches"
                onChangeText={(UserLowAbs) => setLowAbs(UserLowAbs)}
                defaultValue={lowAbs}
                keyboardType="numeric"
              />
              {props.children}
              </LowAbsContext.Provider>
          </View>
        );
      }
    } else {
      if (isNaN(lowAbs) || lowAbs === " ") {
        return (
          <View>
          <LowAbsContext.Provider value={lowAbs}>
              <Text style={styles.inputLabel}>Low Abs:</Text>
              <TextInput
                style={styles.input}
                placeholder="Centimeters"
                onChangeText={(UserLowAbs) => setLowAbs(UserLowAbs)}
                defaultValue={lowAbs}
                keyboardType="numeric"
              />
              <Text style={styles.errorMessage}>
                Error: Please enter a numerical value
              </Text>
              {props.children}
              </LowAbsContext.Provider>
          </View>
        );
      } else {
        return (
          <View>
          <LowAbsContext.Provider value={lowAbs}>
              <Text style={styles.inputLabel}>Low Abs:</Text>
              <TextInput
                style={styles.input}
                placeholder="Centimeters"
                onChangeText={(UserLowAbs) => setLowAbs(UserLowAbs)}
                defaultValue={lowAbs}
                keyboardType="numeric"
              />
              {props.children}
              </LowAbsContext.Provider>
          </View>
        );
      }
    }
  }

  export {LowAbsContext, UserLowAbs};