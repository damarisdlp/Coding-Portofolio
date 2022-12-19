import React, { useContext, createContext } from "react";
import { View, Text } from "react-native";
import styles from '../../style/style';
import { BMRContext } from "../StepOne/BMRCalc";
import { ActivityLevelContext } from "../StepOne/ActivityLevel";

const TDEEContext = createContext();

function TDEECalc(props) {
  const userBmr = useContext(BMRContext);
  const userActivityLevel = useContext(ActivityLevelContext);

  switch (userActivityLevel) {
    case 0:
    const sedTdeeCalc = userBmr[0] * 1.2
    const sedTdee = Math.round(sedTdeeCalc)

      return (
        <View>
          <TDEEContext.Provider value={sedTdee}>
            <Text style={styles.inputLabel}>Your TDEE is: {sedTdee}</Text>
            {props.children}
          </TDEEContext.Provider>
        </View>
      );
  
    case 1:
      const lightActiveTdee = Math.round(userBmr[0] * 1.375)
      
      return (
        <View>
          <TDEEContext.Provider value={lightActiveTdee}>
            <Text style={styles.inputLabel}>
              Your TDEE is: {lightActiveTdee}
            </Text>
            {props.children}
          </TDEEContext.Provider>
        </View>
      );

      case 2:
      const activeTdee = Math.round(userBmr[0] * 1.55)

      return (
        <View>
          <TDEEContext.Provider value={activeTdee}>
            <Text style={styles.inputLabel}>Your TDEE is: {activeTdee}</Text>
            {props.children}
          </TDEEContext.Provider>
        </View>
      );

      case 3:
        const heavyActiveTdee = Math.round(userBmr[0] * 1.725)

        return (
        <View>
          <TDEEContext.Provider value={heavyActiveTdee}>
            <Text style={styles.inputLabel}>Your TDEE is: {heavyActiveTdee}</Text>
            {props.children}
          </TDEEContext.Provider>
        </View>
      );

      case 4:
        const athlete = Math.round(userBmr[0] * 1.9)

        return (
        <View>
          <TDEEContext.Provider value={athlete}>
            <Text style={styles.inputLabel}>Your TDEE is: {athlete}</Text>
            {props.children}
          </TDEEContext.Provider>
        </View>
      );
  }
}

export { TDEEContext, TDEECalc };
