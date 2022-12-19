import React, { createContext, useState } from 'react'
import { View, Text } from 'react-native'
import styles from '../../style/style';
import RadioForm from "react-native-simple-radio-button";

const TDEEFormulaContext = createContext();

function TdeeFormula(props) {
    const [formula, setFormula] = useState(0);
    const radioFormula = [
      { label: "Athletes Formula (best for lean people)", value: 0 },
      { label: "Lean Mass Formula (best if overweight)", value: 1 },
    ];
  
    return (
      <View>
        <TDEEFormulaContext.Provider value={formula}>
          <Text style={styles.inputLabel}>Formula:</Text>
          <RadioForm
            style={styles.radio}
            radio_props={radioFormula}
            initial={formula}
            onPress={(formulaValue) => {
              setFormula(formulaValue);
            }}
          />
          {props.children}
        </TDEEFormulaContext.Provider>
      </View>
    );
  }

  export {TDEEFormulaContext, TdeeFormula}