import { View,Text,  } from 'react-native'
import styles from '../../style/style'
import { GoalPicker } from './GoalPicker';
import { Intensity } from './Intensity';
import { CalorieCalc } from './CalorieCalc';

function StepTwo(){
    return(
        <View style={styles.container}>
            <Text style={styles.stepText}>Step 2: Choose your Goals & Intensity</Text>
                <GoalPicker>
                <Intensity>
                    <CalorieCalc/>
                </Intensity>
                </GoalPicker>
        </View>
    )
}

export {StepTwo};