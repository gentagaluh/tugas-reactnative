import React from 'react';
import {ScrollView, View, TouchableOpacity, Text, Image} from 'react-native';
import CustomText from "../Custom/CustomText"
import CustomImage from "./CustomImage"

const CustomCatatan =(props)=>{
  return(
    <View style={{
      backgroundColor:'white',
      padding:7,
      borderRadius:10,
      width:130,
      borderWidth:1,
      borderColor:props.brc,
      marginBottom:props.mb2,
      marginTop:props.mt2,
      marginRight:props.mr2,
      marginLeft:props.ml2
    }}>
    <View style={{
      flexDirection:'row',
      alignItems:'center'
    }}>
    <CustomText txc={props.cl} tx={props.tx} size={10} fw='bold'/>
    <CustomImage img={props.img} wt={10} hg={10}/>
    <CustomText ml={props.ml} txc='black' tx='02/03/2023' size={7}/>
    </View>
    <CustomText txc={props.cl2} tx={props.tx2} size={12}/>
    </View>
  )
}

export default CustomCatatan;