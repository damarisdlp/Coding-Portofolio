import React, { createContext, useState } from 'react'
import { Text, View, TextInput } from 'react-native';
import styles from '../../style/style';

const AgeContext = createContext()

function UserAge(props) {
    const [age, setAge] = useState(0);

    if (isNaN(age) || age === " ") {
      return (
        <View>
        <AgeContext.Provider value={age}>
            <Text style={styles.inputLabel}>Age:</Text> 
            <TextInput
              style={styles.input}
              placeholder="Type Age"
              onChangeText={(UserAge) => setAge(UserAge)}
              defaultValue={age}
              keyboardType="phone-pad"
            />
            <Text style={styles.errorMessage}>
              Error: Please enter a numerical value
            </Text>
            {props.children}
            </AgeContext.Provider>
        </View>
      );
    } else {
      return (
        <View>
        <AgeContext.Provider value={age}>
            <Text style={styles.inputLabel}>Age:</Text>
            <TextInput
              style={styles.input}
              placeholder="Type Age"
              onChangeText={(UserAge) => setAge(UserAge)}
              defaultValue={age}
              keyboardType="phone-pad"
            />
            {props.children}
            </AgeContext.Provider>
        </View>
      );
    }
}

  export {AgeContext, UserAge};