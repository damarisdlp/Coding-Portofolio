import React, { createContext, useContext } from "react";
import { View, Text } from "react-native";
import styles from "../../style/style";
import { GenderContext } from "../StepOne/UserGender";
import { TDEEFormulaContext } from "../StepOne/TdeeFormula";
import { ConversionContext } from "../StepOne/UnitConversion";
import { AgeContext } from "../StepOne/UserAge";

const BMRContext = createContext();

function BMRCalc(props) {
  const userTdeeFormula = useContext(TDEEFormulaContext);
  const userGender = useContext(GenderContext);
  const unitConversion = useContext(ConversionContext);
  const userAge = useContext(AgeContext);

  switch (userTdeeFormula) {
    case 0:
      switch (userGender) {
        case 0:
          const maleWeightBMR = 10 * unitConversion[0];
          const maleHeightBMR = 6.25 * unitConversion[1];
          const maleAgeBMR = 5 * userAge;

          const maleAthleteBMR = Math.floor(
            maleWeightBMR + maleHeightBMR - maleAgeBMR + 5
          );

          const maleAthleteBf =
          Math.round(
            (10.1 -
              0.239 * unitConversion[1] +
              0.8 * unitConversion[2] -
              0.5 * unitConversion[3]) *
              10
          ) / 10;

        const maleLeanMassCalc = (unitConversion[0] * (100 - maleAthleteBf)) / 100;

          return (
            <View>
              <BMRContext.Provider value={[maleAthleteBMR , maleLeanMassCalc]}>
                <Text style={styles.inputLabel}>
                  Your BMR is: {maleAthleteBMR}{" "}
                </Text>
                {props.children}
              </BMRContext.Provider>
            </View>
          );

        case 1:
          const femaleWeightBMR = 10 * unitConversion[0];
          const femaleHeightBMR = 6.25 * unitConversion[1];
          const femaleAgeBMR = 5 * userAge;

          const femaleAthleteBMR = Math.floor(
            femaleWeightBMR + femaleHeightBMR - femaleAgeBMR - 161
          );

          const femaleAthleteBf =
          Math.round(
            (19.2 -
              0.239 * unitConversion[1] +
              0.8 * unitConversion[2] -
              0.5 * unitConversion[3]) *
              10
          ) / 10;

        const femaleLeanMassCalc = (unitConversion[0] * (100 - femaleAthleteBf)) / 100;

          return (
            <View>
              <BMRContext.Provider value={[femaleAthleteBMR,femaleLeanMassCalc]}>
                <Text style={styles.inputLabel}>
                  Your BMR is: {femaleAthleteBMR}{" "}
                </Text>
                {props.children}
              </BMRContext.Provider>
            </View>
          );
      }
    case 1:
      switch (userGender) {
        case 0:
          const maleBf =
            Math.round(
              (10.1 -
                0.239 * unitConversion[1] +
                0.8 * unitConversion[2] -
                0.5 * unitConversion[3]) *
                10
            ) / 10;

          const maleLeanMassCalc = (unitConversion[0] * (100 - maleBf)) / 100;

          const maleLeanBMR = Math.floor(370 + 21.6 * maleLeanMassCalc);

          return (
            <View>
              <BMRContext.Provider value={[maleLeanBMR,maleLeanMassCalc]}>
                <Text style={styles.inputLabel}>
                  Your Body Fat % is: {maleBf}
                </Text>
                <Text style={styles.inputLabel}>
                  Your BMR is: {maleLeanBMR}
                </Text>
                {props.children}
              </BMRContext.Provider>
            </View>
          );

        case 1:
          const femaleBf =
            Math.round(
              (19.2 -
                0.239 * unitConversion[1] +
                0.8 * unitConversion[2] -
                0.5 * unitConversion[3]) *
                10
            ) / 10;
          const femaleLeanMassCalc =
            (unitConversion[0] * (100 - femaleBf)) / 100;

          const femaleLeanBMR = Math.floor(370 + 21.6 * femaleLeanMassCalc);

          return (
            <View>
              <BMRContext.Provider value={[femaleLeanBMR,femaleLeanMassCalc]}>
                <Text style={styles.inputLabel}>
                  Your Body Fat % is: {femaleBf}
                </Text>
                <Text style={styles.inputLabel}>
                  Your BMR is: {femaleLeanBMR}{" "}
                </Text>
                {props.children}
              </BMRContext.Provider>
            </View>
          );
      }
  }
}

export { BMRContext, BMRCalc };
