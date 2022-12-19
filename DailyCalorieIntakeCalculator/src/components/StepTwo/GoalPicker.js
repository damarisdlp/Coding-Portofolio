import { createContext, useState } from "react";
import { View, Text } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import styles from "../../style/style";

const GoalContext = createContext();

function GoalPicker(props) {
  const [goalPicked, setGoalPicked] = useState(0);
  const goalOptions = [
    { label: "Fat Loss", value: 0 },
    { label: "Maintain", value: 1 },
    { label: "Bulking", value: 2 },
  ];

  return (
    <View>
      <GoalContext.Provider value={goalPicked}>
        <Text style={styles.inputLabel}>Goal: </Text>
        <RadioForm
          style={styles.radio}
          radio_props={goalOptions}
          intial={goalPicked}
          onPress={(goalValue) => {
            setGoalPicked(goalValue);
          }}
        />
        {props.children}
      </GoalContext.Provider>
    </View>
  );
}

export { GoalContext, GoalPicker };
