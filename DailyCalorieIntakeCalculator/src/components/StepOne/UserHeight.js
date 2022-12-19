import React, { createContext, useContext, useState } from 'react'
import { View,Text,TextInput } from 'react-native'
import styles from '../../style/style';
import { UnitsSystemContext } from '../StepOne/UnitsSystem';

const HeightContext = createContext();

function UserHeight(props) {
    const [heightFeet, setHeightFeet] = useState(0);
    const [heightInches, setHeightInches] = useState(0);
    const [heightMeters, setHeightMeters] = useState(0);
    const units = useContext(UnitsSystemContext);
    
    //System units chosen are imperial
    if (units === 0) { 
        //There are blank or non numerical entries in the text input
      if (
        isNaN(heightFeet) ||
        isNaN(heightInches) ||
        heightFeet === " " ||
        heightInches === " "
      ) {
        return (
          <View>
          <HeightContext.Provider value={[heightFeet, heightInches]}>
              <Text style={styles.inputLabel}>Height:</Text>
              <TextInput
                style={styles.input}
                placeholder="Feet"
                onChangeText={(userHeightFeet) => setHeightFeet(userHeightFeet)}
                defaultValue={heightFeet}
                keyboardType="phone-pad"
              />
              <TextInput
                style={styles.input}
                placeholder="Inches"
                onChangeText={(userHeightInches) =>
                  setHeightInches(userHeightInches)
                }
                defaultValue={heightInches}
                keyboardType="phone-pad"
              />
              <Text style={styles.errorMessage}>
                Error: Please enter a numerical value{" "}
              </Text>
              {props.children}
              </HeightContext.Provider>
          </View>
        );
      } else {
        return (
          <View>
          <HeightContext.Provider value={[heightFeet, heightInches]}>
              <Text style={styles.inputLabel}>Height:</Text>
              <TextInput
                style={styles.input}
                placeholder="Feet"
                onChangeText={(userHeightFeet) => setHeightFeet(userHeightFeet)}
                defaultValue={heightFeet}
                keyboardType="phone-pad"
              />
              <TextInput
                style={styles.input}
                placeholder="Inches"
                onChangeText={(userHeightInches) =>
                  setHeightInches(userHeightInches)
                }
                defaultValue={heightInches}
                keyboardType="numeric"
              />
              {props.children}
              </HeightContext.Provider>
          </View>
        );
      }
      //Units sytem chosen is metric
    } else {
      if (
        isNaN(heightMeters) ||
        heightMeters === " "
      ) {
        return (
          <View>
          <HeightContext.Provider value={heightMeters}>
              <Text style={styles.inputLabel}>Height:</Text>
              <TextInput
                style={styles.input}
                placeholder="Meters"
                onChangeText={(userHeightMeters) => setHeightMeters(userHeightMeters)}
                defaultValue={heightMeters}
                keyboardType="phone-pad"
              />
              <Text style={styles.errorMessage}>
                Error: Please enter a numerical value{" "}
              </Text>
              {props.children}
              </HeightContext.Provider>
          </View>
        );
      } else {
        return (
          <View>
          <HeightContext.Provider value={heightMeters}>
              <Text style={styles.inputLabel}>Height:</Text>
              <TextInput
                style={styles.input}
                placeholder="Meters"
                onChangeText={(userHeightMeters) => setHeightMeters(userHeightMeters)}
                defaultValue={heightMeters}
                keyboardType="phone-pad"
              />
              {props.children}
              </HeightContext.Provider>
          </View>
        );
      }
    }
  }

  export {HeightContext, UserHeight} ;