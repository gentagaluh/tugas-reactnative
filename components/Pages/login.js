import React from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import CustomInput from '../Custom/CustomInput'
import CustomButton from '../Custom/CustomButton'

const login = ({navigation}) => {
  return(
    <ScrollView style={{backgroundColor:'white'}}>

      <Image
        source={require('../../assets/fotoprofil.jpg')}
        style={{width:100, height:100, borderRadius:100, alignSelf:'center', marginTop:40, marginBottom:5}}
      />

      <Text style={{fontWeight:'bold', fontSize:20, textAlign:'center'}}>
        My Portofolio
      </Text>

      <Text style={{fontSize:15, textAlign:'center'}}>
        Silahakan Login
      </Text>

      <View style={{height:10}}>
      </View>

      <CustomInput ph="Username"/>

      <View style={{height:5}}>
      </View>

      <CustomInput ph="Password"/>
      
      <Text style={{fontWeight:'bold', fontSize:10, alignSelf:'flex-end', marginRight:35, marginVertical:10}}>
        Lupa password?
      </Text>

      <CustomButton op={() => navigation.navigate('Portofolio')} tx='L O G I N' ct="white" bg='rgb(101, 67, 33)'/>

      <Text style={{fontWeight:'bold', fontSize:10, alignSelf:'center', marginVertical:5}}>
        Atau
      </Text>

      <CustomButton op={() => navigation.navigate('Register')} tx='R E G I S T E R' ct=" rgb(101, 67, 33)" bg='rgba(101, 67, 33, 0.1)'/>

    </ScrollView>
  )
};

export default login;