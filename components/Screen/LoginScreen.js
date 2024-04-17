import React from 'react';
import {ScrollView, View} from 'react-native';
import CustomInput from "../Custom/CustomInput"
import CustomButton from "../Custom/CustomButton"
import CustomText from "../Custom/CustomText"
import CustomImage from "../Custom/CustomImage"

const Login =({navigation})=>{
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
        <CustomText tx=' - Login' size={18}/>
      </View>
      <CustomImage img={require('../../assets/user.png')} wt={100} hg={100} al='center'/>
      <CustomInput ph="Email" mb={20} mt={20}/>
      <CustomInput ph="Password" mb={20}/>
      <CustomButton bg="red" tx="Login" txcolor="white" mb={5} fw='bold' op={() => navigation.navigate('Home')}/>
      <CustomText tx='- Belum punya akun? Register -' txc='grey' ta='center'/>
      <CustomButton bg="rgba(255, 0, 0, 0.1)" mt={5} mb={50} tx="Register" fw='bold' txcolor="red" op={() => navigation.navigate('Register')}/>
      </View>
    </ScrollView>
  )
}

export default Login