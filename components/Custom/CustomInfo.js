import React from 'react';
import {ScrollView, View, TouchableOpacity, Text} from 'react-native';
import CustomText from "../Custom/CustomText"

const CustomInfo =(props)=>{
  return(
    <View style={{
      backgroundColor:props.bg,
      padding:10,
      borderRadius:10,
      width:140,
      marginRight:props.mr
    }}>
    <CustomText txc={props.cl} tx={props.tx} size={props.sz} fw={props.fw}/>
    <CustomText txc={props.cl} tx={props.tx2} size={props.sz2}/>
    </View>
  )
}

export default CustomInfo;