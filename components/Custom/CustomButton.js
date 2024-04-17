import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

const CustomButton = (props) => {
  return(
    <TouchableOpacity onPress={props.op}>
      <View style={{
        backgroundColor:props.bg,
        borderRadius:10,
        marginBottom:props.mb,
        marginTop:props.mt,
        marginRight:props.mr,
        marginLeft:props.ml,
      }}>
        <Text style={{
          color:props.txcolor,
          textAlign:'center',
          padding:10,
          fontWeight:props.fw
        }}>
        {props.tx}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomButton;