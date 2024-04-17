import React from 'react';
import {Text} from 'react-native';

const CustomText = (props) => {
  return(
    <Text style={{
      fontSize:props.size,
      color:props.txc,
      fontWeight:props.fw,
      textAlign:props.ta,
      marginBottom:props.mb,
      marginTop:props.mt,
      marginRight:props.mr,
      marginLeft:props.ml,
    }}>
      {props.tx}
    </Text>
  )
}

export default CustomText;