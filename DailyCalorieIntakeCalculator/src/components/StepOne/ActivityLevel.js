import React, { createContext, useState } from "react";
import { View, Text } from "react-native";
import styles from "../../style/style";
import RadioForm from "react-native-simple-radio-button";

const ActivityLevelContext = createContext();

function ActivityLevel(props) {
  const [activityLevel, setActivityLevel] = useState(0);
  const radioActivityLevel = [
    { label: "Sedentary (Office Job)", value: 0 },
    { label: "Light Exercise (1-2 days/week)", value: 1 },
    { label: "Moderate Exercise (3-5 days/week)", value: 2 },
    { label: "Heavy Exercise (6-7 days/week)", value: 3 },
    { label: "Athlete (2x/day)", value: 4 },
  ];

  return (
    <View>
      <ActivityLevelContext.Provider value={activityLevel}>
        <Text style={styles.inputLabel}>Activity Level:</Text>
        <RadioForm
          style={styles.radio}
          radio_props={radioActivityLevel}
          initial={activityLevel}
          onPress={(activityLevelValue) => {
            setActivityLevel(activityLevelValue);
          }}
        />
        {props.children}
      </ActivityLevelContext.Provider>
    </View>
  );
}

export { ActivityLevelContext, ActivityLevel };
