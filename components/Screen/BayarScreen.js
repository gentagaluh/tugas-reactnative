import React,{useState} from 'react';
import {ScrollView, View} from 'react-native';
import CustomInput from "../Custom/CustomInput"
import CustomButton from "../Custom/CustomButton"
import CustomText from "../Custom/CustomText"
import CustomImage from "../Custom/CustomImage"
import CustomInfo from "../Custom/CustomInfo"
import CustomCatatan from "../Custom/CustomCatatan"

const Bayar =({navigation})=>{
  const [jenis, setjenis] = useState("SPP Oktober 2023");
  return (
    <ScrollView style={{
      backgroundColor:'white'
    }}>
    <View style={{
      backgroundColor:'rgba(255,255,0,0.3)',
      marginHorizontal:10,
      borderRadius:10,
      marginTop:10
    }}>
    <View style={{
      flexDirection:'row',
      marginHorizontal:10,
      marginTop:10
    }}>
    <CustomInfo tx='Tagihan' fw='bold' cl='white' bg='red' sz={14} tx2='Rp440.000' sz2={20}/>
    <View style={{
      marginLeft:10
    }}>
    <CustomText tx='Rincian Tagihan :' size={12} fw='bold'/>
    <CustomText tx='1. SPP Oktober 2023' size={12}/>
    <CustomText tx='1. SPP November 2023' size={12}/>
    </View>
    </View>

    <View style={{
      flexDirection:'row',
      alignSelf:'center',
      alignItems:'center',
      marginVertical:20
    }}>
    <View>
    <CustomText tx={jenis} size={14} fw='bold'/>
    <CustomText tx='Rp220.000' size={14}/>
    </View>
    <CustomButton bg="black" fw='bold' tx="Pilih Lain" txcolor="white" op={() => setjenis("SPP November 2023")} ml={10} mr={5}/>
    <CustomButton bg="red" fw='bold' tx="Batal" txcolor="white" op={() => setjenis("SPP Oktober 2023")}/>
    </View>

    <CustomButton bg="green" fw='bold' tx="Bayar Tagihan" txcolor="white" op={() => navigation.navigate('Home')} ml={10} mr={10} mb={10}/>
    </View>
    </ScrollView>
  )
}

export default Bayar