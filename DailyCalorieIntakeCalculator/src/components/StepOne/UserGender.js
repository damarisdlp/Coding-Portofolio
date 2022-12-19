import React, { createContext, useState } from 'react'
import { View, Text } from 'react-native'
import styles from '../../style/style';
import RadioForm from "react-native-simple-radio-button";

const GenderContext = createContext();

function UserGender(props) {
    const [gender, setGender] = useState(0);
    const radioGender = [
      { label: "Male", value: 0 },
      { label: "Female", value: 1 },
    ];
    return (
      <View>
        <GenderContext.Provider value={gender}>
          <Text style={styles.inputLabel}>Gender:</Text>
          <RadioForm
            style={styles.radio}
            radio_props={radioGender}
            initial={gender}
            onPress={(genderValue) => {
              setGender(genderValue);
            }}
          />
          {props.children}
          </GenderContext.Provider>
      </View>
    );
  }

  export {GenderContext, UserGender};