import React, { createContext, useContext, useState } from 'react'
import { View,Text,TextInput } from 'react-native'
import styles from '../../style/style';
import { UnitsSystemContext } from '../StepOne/UnitsSystem';

const NeckContext = createContext();

function UserNeck(props) {
    const [neck, setNeck] = useState(0);
    const units = useContext(UnitsSystemContext);

    if (units === 0) { 
      if (isNaN(neck) || neck === " ") {
        return (
          <View>
          <NeckContext.Provider value={neck}>
              <Text style={styles.inputLabel}>Neck:</Text>
              <TextInput
                style={styles.input}
                placeholder="Inches"
                onChangeText={(UserNeck) => setNeck(UserNeck)}
                defaultValue={neck}
                keyboardType="numeric"
              />
              <Text style={styles.errorMessage}>
                Error: Please enter a numerical value
              </Text>
              {props.children}
              </NeckContext.Provider>
          </View>
        );
      } else {
        return (
          <View>
          <NeckContext.Provider value={neck}>
              <Text style={styles.inputLabel}>Neck:</Text>
              <TextInput
                style={styles.input}
                placeholder="Inches"
                onChangeText={(UserNeck) => setNeck(UserNeck)}
                defaultValue={neck}
                keyboardType="numeric"
              />
              {props.children}
              </NeckContext.Provider>
          </View>
        );
      }
    } else {
      if (isNaN(neck) || neck === " ") {
        return (
          <View>
          <NeckContext.Provider value={neck}>
              <Text style={styles.inputLabel}>Neck:</Text>
              <TextInput
                style={styles.input}
                placeholder="Centimeters"
                onChangeText={(UserNeck) => setNeck(UserNeck)}
                defaultValue={neck}
                keyboardType="numeric"
              />
              <Text style={styles.errorMessage}>
                Error: Please enter a numerical value
              </Text>
              {props.children}
              </NeckContext.Provider>
          </View>
        );
      } else {
        return (
          <View>
          <NeckContext.Provider value={neck}>
              <Text style={styles.inputLabel}>Neck:</Text>
              <TextInput
                style={styles.input}
                placeholder="Centimeters"
                onChangeText={(UserNeck) => setNeck(UserNeck)}
                defaultValue={neck}
                keyboardType="numeric"
              />
              {props.children}
              </NeckContext.Provider>
          </View>
        );
      }
    }
  };
  
 export {NeckContext, UserNeck};