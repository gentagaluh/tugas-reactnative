import React from 'react';
import {Text} from 'react-native';

const CustomText = (props) => {
  return(
    <Text style={{fontWeight:props.fw, fontSize:props.fs, textAlign:'center'}}>
      {props.tx}
    </Text>
  )
}

export default CustomText;