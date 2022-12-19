import React, { createContext, useState } from "react";
import { View, Text } from "react-native";
import styles from '../../style/style';
import RadioForm from "react-native-simple-radio-button";

const UnitsSystemContext = createContext()

function UnitsSystem(props) {
  const [units, setUnits] = useState(0);
  const unitsSystem = [
    { label: "Imperial", value: 0 },
    { label: "Metric", value: 1 },
  ];

  return (
    <View>
    <UnitsSystemContext.Provider value={units}>
      <Text style={styles.inputLabel}>Units:</Text>
      <RadioForm
        style={styles.radio}
        radio_props={unitsSystem}
        initial={units}
        onPress={(unitValue) => {
          setUnits(unitValue);
        }}
      />
      {props.children}
      </UnitsSystemContext.Provider>
    </View>
  );
}

export { UnitsSystemContext, UnitsSystem };
