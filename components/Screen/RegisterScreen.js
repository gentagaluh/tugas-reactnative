import React from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import CustomInput from "../Custom/CustomInput"
import CustomButton from "../Custom/CustomButton"
import CustomText from "../Custom/CustomText"
import CustomImage from "../Custom/CustomImage"

const Register =({navigation})=>{
  return (
    <ScrollView style={{
      backgroundColor:'white'
    }}>
      <View style={{
        margin:20
      }}>
      <CustomImage img={require('../../assets/logotelkom.png')} wt={150} hg={43.05}/>
      <View style={{
        flexDirection:'row'
      }}>
        <CustomText tx='Pembayaran SPP' size={18} fw='bold' mb={40}/>
        <CustomText tx=' - Register' size={18}/>
      </View>
      <CustomImage img={require('../../assets/user.png')} wt={100} hg={100} al='center'/>
      <CustomInput ph="Nama Lengkap" mb={20} mt={20}/>
      <CustomInput ph="NIS" mb={20}/>
      <CustomInput ph="Email" mb={20}/>
      <CustomInput ph="Password" mb={20}/>
      <CustomInput ph="Ulangi Password" mb={20}/>
      <CustomButton bg="red" tx="Register" txcolor="white" mb={5} fw='bold' op={() => navigation.navigate('Home')}/>
      <CustomText tx='- Sudah punya akun? Login -' txc='grey' ta='center'/>
      <CustomButton mt={5} mb={50} bg="rgba(255, 0, 0, 0.1)" tx="Login" txcolor="red" op={() => navigation.navigate('Login')} fw='bold'/>
      </View>
    </ScrollView>
  )
}

export default Register