import React from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import CustomInput from '../Custom/CustomInput'
import CustomButton from '../Custom/CustomButton'

const register =({navigation})=>{
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
        Silahkan Register
      </Text>

      <View style={{height:10}}>
      </View>

      <CustomInput ph="Nama Depan"/>
      <View style={{height:5}}></View>
      <CustomInput ph="Nama Belakang"/>
      <View style={{height:5}}></View>
      <CustomInput ph="Email / Nomor HP"/>
      <View style={{height:5}}></View>
      <CustomInput ph="Username"/>
      <View style={{height:5}}></View>
      <CustomInput ph="Password"/>
      <View style={{height:5}}></View>
      <CustomInput ph="Ulangi Password"/>
      <View style={{height:10}}></View>

      <CustomButton op={() => navigation.navigate('Portofolio')} tx='R E G I S T E R' ct="white" bg='rgb(101, 67, 33)'/>

      <Text style={{fontWeight:'bold', fontSize:10, alignSelf:'center', marginVertical:5}}>
        Atau
      </Text>

      <CustomButton op={() => navigation.navigate('Login')} tx='L O G I N' ct=" rgb(101, 67, 33)" bg='rgba(101, 67, 33, 0.1)'/>

    </ScrollView>
  )
}

export default register;