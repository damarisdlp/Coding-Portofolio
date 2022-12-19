import React, { useContext,createContext } from "react";
import { View } from 'react-native'
import { UnitsSystemContext } from "../StepOne/UnitsSystem";
import { WeightContext } from "../StepOne/UserWeight";
import { HeightContext } from "../StepOne/UserHeight";
import { LowAbsContext } from "../StepOne/UserLowAbs";
import { NeckContext } from "../StepOne/UserNeck";

const ConversionContext = createContext();

function UnitConversion(props) {
  const units = useContext(UnitsSystemContext);
  const userWeight = useContext(WeightContext);
  const userHeight = useContext(HeightContext);
  const userLowAbs = useContext(LowAbsContext);
  const userNeck = useContext(NeckContext);
  
  if (units === 0) {
    const userWeightKg = userWeight / 2.205 //lbs to kg
    const userHeightCm = (userHeight[0] * 12 * 2.54) + (userHeight[1] * 2.54); //ft to cm
    const userLowAbsCm = userLowAbs * 2.54; //in to cm
    const userNeckCm = userNeck * 2.54; //in to cm
    return(
        <View>
        <ConversionContext.Provider value={[userWeightKg, userHeightCm, userLowAbsCm, userNeckCm]}>
            {props.children}
        </ConversionContext.Provider>
        </View>
    )
  } else {
    const userWeightKg = userWeight//kg
    const userHeightCm = userHeight*100 //m to cm
    const userLowAbsCm = userLowAbs //cm
    const userNeckCm = userNeck //cm

    return(
        <View>
        <ConversionContext.Provider value={[userWeightKg, userHeightCm, userLowAbsCm, userNeckCm]}>           
        {props.children}
        </ConversionContext.Provider>
        </View>
    )
  }
}

export {ConversionContext, UnitConversion };
