import React from 'react';
import {TextInput} from 'react-native';

const CustomInput = (props) => {
  return(
    <TextInput
        placeholder={props.ph}
        style={{
          borderWidth:1,
          borderRadius:10,
          padding:10,
          marginBottom:props.mb,
          marginTop:props.mt,
          marginRight:props.mr,
          marginLeft:props.ml,
        }}
      />
  )
}

export default CustomInput;