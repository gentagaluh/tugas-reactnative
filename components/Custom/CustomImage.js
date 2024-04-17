import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';

const CustomImage = (props) => {
  return(
      <Image
        style={{height:props.h, width:props.w, borderRadius:props.br, alignSelf:props.alg}}
        source={props.img}
      />
  )
}

export default CustomImage;