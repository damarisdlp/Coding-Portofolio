import React, { createContext, useContext } from "react";
import { View, Text } from "react-native";
import styles from "../../style/style";
import { TDEEContext } from "../StepOne/TdeeCalc";
import { GoalContext } from "./GoalPicker";
import { IntensityContext } from "./Intensity";

const DailyCaloriesContext = createContext();

function CalorieCalc(props) {
  const userGoalPicked = useContext(GoalContext);
  const userIntensityPicked = useContext(IntensityContext);
  const userCalculatedTdee = useContext(TDEEContext);

  switch (userGoalPicked) {
    case 0:
      switch (userIntensityPicked) {
        case 0:
          const suggestedDailyCalories = Math.round(userCalculatedTdee - (userCalculatedTdee * 0.15));
          return (
            <View>
              <DailyCaloriesContext.Provider value={suggestedDailyCalories}>
                <Text style={styles.inputLabel}>
                  Calories/Day: {suggestedDailyCalories}
                </Text>
                {props.children}
              </DailyCaloriesContext.Provider>
            </View>
          );
        case 1:
          const aggressiveDailyCalories = Math.round(userCalculatedTdee - (userCalculatedTdee * 0.2));

          return (
            <View>
              <DailyCaloriesContext.Provider value={aggressiveDailyCalories}>
                <Text style={styles.inputLabel}>
                  Calories/Day: {aggressiveDailyCalories}
                </Text>
                {props.children}
              </DailyCaloriesContext.Provider>
            </View>
          );

        case 2:
          const recklessDailyCalories = Math.round(userCalculatedTdee - (userCalculatedTdee * 0.25));

          return (
            <View>
              <DailyCaloriesContext.Provider value={recklessDailyCalories}>
                <Text style={styles.inputLabel}>
                  Calories/Day: {recklessDailyCalories}
                </Text>
                {props.children}
              </DailyCaloriesContext.Provider>
            </View>
          );
      }
    case 1:
      const suggestedDailyCalories = userCalculatedTdee;

      return (
        <View>
          <DailyCaloriesContext.Provider value={suggestedDailyCalories}>
            <Text style={styles.inputLabel}>
              Calories/Day: {suggestedDailyCalories}
            </Text>
            {props.children}
          </DailyCaloriesContext.Provider>
        </View>
      );
    case 2:
      switch (userIntensityPicked) {
        case 0:
          const suggestedDailyCalories = Math.round(userCalculatedTdee + (userCalculatedTdee * 0.05));
          return (
            <View>
              <DailyCaloriesContext.Provider value={suggestedDailyCalories}>
                <Text style={styles.inputLabel}>
                  Calories/Day: {suggestedDailyCalories}
                </Text>
                {props.children}
              </DailyCaloriesContext.Provider>
            </View>
          );
        case 1:
          const aggressiveDailyCalories = Math.round(userCalculatedTdee + (userCalculatedTdee * 0.1));

          return (
            <View>
              <DailyCaloriesContext.Provider value={aggressiveDailyCalories}>
                <Text style={styles.inputLabel}>
                  Calories/Day: {aggressiveDailyCalories}
                </Text>
                {props.children}
              </DailyCaloriesContext.Provider>
            </View>
          );

        case 2:
          const recklessDailyCalories = Math.round(userCalculatedTdee + (userCalculatedTdee * 0.15));

          return (
            <View>
              <DailyCaloriesContext.Provider value={recklessDailyCalories}>
                <Text style={styles.inputLabel}>
                  Calories/Day: {recklessDailyCalories}
                </Text>
                {props.children}
              </DailyCaloriesContext.Provider>
            </View>
          );
      }
  }
}
export { DailyCaloriesContext, CalorieCalc };
