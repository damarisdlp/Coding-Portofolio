import { createContext, useContext, useState } from "react"
import { View, Text } from 'react-native'
import { GoalContext } from "./GoalPicker"
import RadioForm from "react-native-simple-radio-button"
import styles from "../../style/style"

const IntensityContext = createContext();

function Intensity(props){
    const [intensityPicked, setIntensityPicked] = useState(0)
    const intensityLossOptions = [
        {label: "Suggested 15%", value:0},
        {label: "Aggressive 20%", value:1},
        {label: "Reckless 25%", value:2},
    ]
    const maintenanceGoal = [
        {label: "Same as TDEE", value:0}
    ]
    const intensityBulkOptions = [
        {label: "Cautious 5%", value:0},
        {label: "Textbook 10%", value:1},
        {label: "Aggressive 15%", value:2},
    ]
    const userGoalPicked = useContext(GoalContext)
    
    if (userGoalPicked === 1){
        return(        
        <View>
            <IntensityContext.Provider value={intensityPicked}>
                <Text style={styles.inputLabel}>Intensity:</Text>
                <RadioForm
                style={styles.radio}
                radio_props={maintenanceGoal}
                initial={intensityPicked}
                onPress={(intensityValue) => {setIntensityPicked(intensityValue)}} />
                {props.children}
            </IntensityContext.Provider>
        </View>   
        )
    } else if (userGoalPicked === 0) {
    return(
        <View>
            <IntensityContext.Provider value={intensityPicked}>
                <Text style={styles.inputLabel}>Intensity:</Text>
                <RadioForm
                style={styles.radio}
                radio_props={intensityLossOptions}
                initial={intensityPicked}
                onPress={(intensityValue) => {setIntensityPicked(intensityValue)}} />
                {props.children}
            </IntensityContext.Provider>
        </View>
    )
} else {
    return(
        <View>
            <IntensityContext.Provider value={intensityPicked}>
                <Text style={styles.inputLabel}>Intensity:</Text>
                <RadioForm
                style={styles.radio}
                radio_props={intensityBulkOptions}
                initial={intensityPicked}
                onPress={(intensityValue) => {setIntensityPicked(intensityValue)}} />
                {props.children}
            </IntensityContext.Provider>
        </View>
    )
}
}

export {IntensityContext, Intensity}