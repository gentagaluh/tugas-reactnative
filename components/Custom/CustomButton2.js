import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

const CustomButton2 = (props) => {
  return(
    <TouchableOpacity onPress={props.op}>
    
    <View style={{marginHorizontal:props.mh,borderRadius:10,backgroundColor:props.cl, width:80, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
      <Image
      style={{height:20, width:20}}
      source={props.img}
    />
      <Text style={{padding:10, fontSize:13, fontWeight:'bold', color:'black'}}>
        {props.tx}
      </Text>
    </View>
    </TouchableOpacity>
  )
}

export default CustomButton2;