import React from 'react';
import {Text, View} from 'react-native';

const CustomTitle = (props) => {
  return(
    <View style={{borderRadius:10,marginHorizontal:20,backgroundColor:'rgba(101, 67, 33, 0.1)'}}>
      <Text style={{textAlign:'center',padding:10, fontSize:17, fontWeight:'bold', color:'rgb(101, 67, 33)'}}>
        {props.tx}
      </Text>
    </View>
  )
}

export default CustomTitle;