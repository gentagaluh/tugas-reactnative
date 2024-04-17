import React from 'react';
import {ScrollView, View} from 'react-native';
import CustomInput from "../Custom/CustomInput"
import CustomButton from "../Custom/CustomButton"
import CustomText from "../Custom/CustomText"
import CustomImage from "../Custom/CustomImage"
import CustomInfo from "../Custom/CustomInfo"
import CustomCatatan from "../Custom/CustomCatatan"

const All =({navigation})=>{
  return(
    <ScrollView style={{
      backgroundColor:'white'
    }}>

    <View style={{
      flexDirection:'row'
    }}>
    <CustomButton wd={70} bg="rgba(255, 0, 0, 0.1)" fw='bold' tx="Home" txcolor="red" op={() => navigation.navigate('Home')} ml={10} mt={10}/>
    <CustomButton wd={70} bg="red" fw='bold' tx="All Siswa" txcolor="white" op={() => navigation.navigate('All')} ml={5} mt={10}/>
    </View>

    <View style={{
      flexDirection:'row',
      alignSelf:'center'
    }}>
    <CustomButton bg="lightgreen" fw='bold' tx="Siswa Lunas" txcolor="green" op={() => navigation.navigate('Lunas')} mt={10}/>
    <CustomButton bg="pink" fw='bold' tx="Siswa Belum Lunas" txcolor="red" op={() => navigation.navigate('Pending')} ml={10} mt={10}/>
    </View>

    <View style={{
      flexDirection:'row',
      backgroundColor:'rgba(128,128,128,0.1)',
      justifyContent:'center',
      borderRadius:7,
      padding:10,
      marginHorizontal:10,
      marginTop:10
    }}>
    <CustomImage img={require('../../assets/user.png')} wt={60} hg={60} br={30}/>
    <View style={{
      marginLeft:22,
      marginRight:22
    }}>
    <CustomText tx='Contoh Nama' size={15} fw='bold'/>
    <CustomText tx='c****@gmail.com' size={15}/>
    <CustomText tx='123456789' size={15}/>
    </View>
    <View style={{
      backgroundColor:"lightgreen",
      height:20,
      width:20,
      borderRadius:10
    }}>
    </View>
    </View>

    <View style={{
      flexDirection:'row',
      backgroundColor:'rgba(128,128,128,0.1)',
      justifyContent:'center',
      borderRadius:7,
      padding:10,
      marginHorizontal:10,
      marginTop:10
    }}>
    <CustomImage img={require('../../assets/user.png')} wt={60} hg={60} br={30}/>
    <View style={{
      marginLeft:22,
      marginRight:22
    }}>
    <CustomText tx='Contoh Nama' size={15} fw='bold'/>
    <CustomText tx='c****@gmail.com' size={15}/>
    <CustomText tx='123456789' size={15}/>
    </View>
    <View style={{
      backgroundColor:"lightgreen",
      height:20,
      width:20,
      borderRadius:10
    }}>
    </View>
    </View>

    <View style={{
      flexDirection:'row',
      backgroundColor:'rgba(128,128,128,0.1)',
      justifyContent:'center',
      borderRadius:7,
      padding:10,
      marginHorizontal:10,
      marginTop:10
    }}>
    <CustomImage img={require('../../assets/user.png')} wt={60} hg={60} br={30}/>
    <View style={{
      marginLeft:22,
      marginRight:22
    }}>
    <CustomText tx='Contoh Nama' size={15} fw='bold'/>
    <CustomText tx='c****@gmail.com' size={15}/>
    <CustomText tx='123456789' size={15}/>
    </View>
    <View style={{
      backgroundColor:"pink",
      height:20,
      width:20,
      borderRadius:10
    }}>
    </View>
    </View>

    <View style={{
      flexDirection:'row',
      backgroundColor:'rgba(128,128,128,0.1)',
      justifyContent:'center',
      borderRadius:7,
      padding:10,
      marginHorizontal:10,
      marginTop:10
    }}>
    <CustomImage img={require('../../assets/user.png')} wt={60} hg={60} br={30}/>
    <View style={{
      marginLeft:22,
      marginRight:22
    }}>
    <CustomText tx='Contoh Nama' size={15} fw='bold'/>
    <CustomText tx='c****@gmail.com' size={15}/>
    <CustomText tx='123456789' size={15}/>
    </View>
    <View style={{
      backgroundColor:"lightgreen",
      height:20,
      width:20,
      borderRadius:10
    }}>
    </View>
    </View>

    <View style={{
      flexDirection:'row',
      backgroundColor:'rgba(128,128,128,0.1)',
      justifyContent:'center',
      borderRadius:7,
      padding:10,
      marginHorizontal:10,
      marginTop:10
    }}>
    <CustomImage img={require('../../assets/user.png')} wt={60} hg={60} br={30}/>
    <View style={{
      marginLeft:22,
      marginRight:22
    }}>
    <CustomText tx='Contoh Nama' size={15} fw='bold'/>
    <CustomText tx='c****@gmail.com' size={15}/>
    <CustomText tx='123456789' size={15}/>
    </View>
    <View style={{
      backgroundColor:"pink",
      height:20,
      width:20,
      borderRadius:10
    }}>
    </View>
    </View>

    <View style={{
      flexDirection:'row',
      backgroundColor:'rgba(128,128,128,0.1)',
      justifyContent:'center',
      borderRadius:7,
      padding:10,
      marginHorizontal:10,
      marginTop:10
    }}>
    <CustomImage img={require('../../assets/user.png')} wt={60} hg={60} br={30}/>
    <View style={{
      marginLeft:22,
      marginRight:22
    }}>
    <CustomText tx='Contoh Nama' size={15} fw='bold'/>
    <CustomText tx='c****@gmail.com' size={15}/>
    <CustomText tx='123456789' size={15}/>
    </View>
    <View style={{
      backgroundColor:"lightgreen",
      height:20,
      width:20,
      borderRadius:10
    }}>
    </View>
    </View>

    <View style={{
      flexDirection:'row',
      backgroundColor:'rgba(128,128,128,0.1)',
      justifyContent:'center',
      borderRadius:7,
      padding:10,
      marginHorizontal:10,
      marginTop:10
    }}>
    <CustomImage img={require('../../assets/user.png')} wt={60} hg={60} br={30}/>
    <View style={{
      marginLeft:22,
      marginRight:22
    }}>
    <CustomText tx='Contoh Nama' size={15} fw='bold'/>
    <CustomText tx='c****@gmail.com' size={15}/>
    <CustomText tx='123456789' size={15}/>
    </View>
    <View style={{
      backgroundColor:"lightgreen",
      height:20,
      width:20,
      borderRadius:10
    }}>
    </View>
    </View>

    <View style={{
      flexDirection:'row',
      backgroundColor:'rgba(128,128,128,0.1)',
      justifyContent:'center',
      borderRadius:7,
      padding:10,
      marginHorizontal:10,
      marginTop:10
    }}>
    <CustomImage img={require('../../assets/user.png')} wt={60} hg={60} br={30}/>
    <View style={{
      marginLeft:22,
      marginRight:22
    }}>
    <CustomText tx='Contoh Nama' size={15} fw='bold'/>
    <CustomText tx='c****@gmail.com' size={15}/>
    <CustomText tx='123456789' size={15}/>
    </View>
    <View style={{
      backgroundColor:"lightgreen",
      height:20,
      width:20,
      borderRadius:10
    }}>
    </View>
    </View>

    <View style={{
      flexDirection:'row',
      backgroundColor:'rgba(128,128,128,0.1)',
      justifyContent:'center',
      borderRadius:7,
      padding:10,
      marginHorizontal:10,
      marginTop:10,
      marginBottom:10
    }}>
    <CustomImage img={require('../../assets/user.png')} wt={60} hg={60} br={30}/>
    <View style={{
      marginLeft:22,
      marginRight:22
    }}>
    <CustomText tx='Contoh Nama' size={15} fw='bold'/>
    <CustomText tx='c****@gmail.com' size={15}/>
    <CustomText tx='123456789' size={15}/>
    </View>
    <View style={{
      backgroundColor:"lightgreen",
      height:20,
      width:20,
      borderRadius:10
    }}>
    </View>
    </View>
    </ScrollView>
  )
}

export default All;