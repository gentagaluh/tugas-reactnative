import React from 'react';
import {Image} from 'react-native';

const CustomImage = (props) => {
  return(
    <Image
    style={{
      height:props.hg,
      width:props.wt,
      borderRadius:props.br,
      alignSelf:props.al
    }}
    source={props.img}
    />
  )
}

export default CustomImage;