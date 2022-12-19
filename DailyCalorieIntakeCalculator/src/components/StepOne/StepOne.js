import { Text, ScrollView, View } from "react-native";
import { UserAge } from "../StepOne/UserAge";
import styles from "../../style/style";
import { UserGender } from "../StepOne/UserGender";
import { UserHeight } from "../StepOne/UserHeight";
import { UnitsSystem } from "../StepOne/UnitsSystem";
import { UserWeight } from "../StepOne/UserWeight";
import { UserLowAbs } from "../StepOne/UserLowAbs";
import { UserNeck } from "../StepOne/UserNeck";
import { TdeeFormula } from "../StepOne/TdeeFormula";
import { ActivityLevel } from "../StepOne/ActivityLevel";
import { UnitConversion } from "../StepOne/UnitConversion";
import { BMRCalc } from "../StepOne/BMRCalc";
import { TDEECalc } from "../StepOne/TdeeCalc";
import { StepTwo } from "../StepTwo/StepTwo";

function StepOne() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.stepText}>Step 1: Calculate your TDEE</Text>
        <UserAge>
          <UserGender>
            <UnitsSystem>
              <UserHeight>
                <UserWeight>
                  <UserLowAbs>
                    <UserNeck>
                      <TdeeFormula>
                        <ActivityLevel>
                          <UnitConversion>
                            <BMRCalc>
                              <TDEECalc>
                              <StepTwo/>
                              </TDEECalc>
                            </BMRCalc>
                          </UnitConversion>
                        </ActivityLevel>
                      </TdeeFormula>
                    </UserNeck>
                  </UserLowAbs>
                </UserWeight>
              </UserHeight>
            </UnitsSystem>
          </UserGender>
        </UserAge>
      </ScrollView>
    </View>
  );
}

export {StepOne};
