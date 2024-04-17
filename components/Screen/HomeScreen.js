import React from 'react';
import {ScrollView, View} from 'react-native';
import CustomInput from "../Custom/CustomInput"
import CustomButton from "../Custom/CustomButton"
import CustomText from "../Custom/CustomText"
import CustomImage from "../Custom/CustomImage"
import CustomInfo from "../Custom/CustomInfo"
import CustomCatatan from "../Custom/CustomCatatan"

const Home =({navigation})=>{
  return(
    <ScrollView style={{
      backgroundColor:'white'
    }}>

    <View style={{
      flexDirection:'row'
    }}>
    <CustomButton wd={70} bg="red" fw='bold' tx="Home" txcolor="white" op={() => navigation.navigate('Home')} ml={10} mt={10}/>
    <CustomButton wd={70} bg="rgba(255, 0, 0, 0.1)" fw='bold' tx="All Siswa" txcolor="red" op={() => navigation.navigate('All')} ml={5} mt={10}/>
    </View>

    <View style={{
      flexDirection:'row',
      backgroundColor:'rgba(128,128,128,0.1)',
      justifyContent:'center',
      borderRadius:7,
      padding:10,
      marginHorizontal:25,
      marginTop:10
    }}>
    <CustomImage img={require('../../assets/user.png')} wt={60} hg={60} br={30}/>
    <View style={{
      marginLeft:22
    }}>
    <CustomText tx='Genta Gilang Galuh' size={15} fw='bold'/>
    <CustomText tx='g****@gmail.com' size={15}/>
    <CustomText tx='541211077' size={15}/>
    </View>
    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'center',
      marginVertical:10
    }}>
    <CustomInfo tx='Deposit' fw='bold' cl='white' bg='grey' sz={14} tx2='Rp0' sz2={20} mr={5}/>
    <CustomInfo tx='Tagihan' fw='bold' cl='white' bg='red' sz={14} tx2='Rp440.000' sz2={20}/>
    </View>

    <CustomButton bg="green" fw='bold' tx="Bayar Tagihan" txcolor="white" op={() => navigation.navigate('Bayar')} ml={10} mr={10} mb={10}/>

    <View style={{
      backgroundColor:'lightgrey'
    }}>

    <View style={{
      flexDirection:'row'
    }}>
    <View style={{
      backgroundColor:'rgba(255,255,255,0.5)',
      width:170,
      alignItems:'center',
      paddingVertical:5,
      borderBottomRightRadius:10
    }}>
    <CustomText txc='black' tx='Status Transaksi' size={20} fw='bold'/>
    </View>
    <View style={{
      backgroundColor:'red',
      height:25,
      width:25,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:5,
      marginLeft:100,
      marginTop:10
    }}>
    <CustomImage img={require('../../assets/delete.png')} wt={15} hg={15}/>
    </View>
    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:10
    }}>
    <CustomCatatan img={require('../../assets/up.png')} ml={30} tx='Deposit' cl='black' tx2='Rp220.000' cl2='green' brc='green' mr2={20}/>
    <CustomCatatan img={require('../../assets/down.png')} ml={30} tx='Tagihan' cl='black' tx2='Rp220.000' cl2='red' brc='red'/>
    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:5
    }}>
    <CustomCatatan img={require('../../assets/up.png')} ml={30} tx='Deposit' cl='black' tx2='Rp220.000' cl2='green' brc='green' mr2={20}/>
    <CustomCatatan img={require('../../assets/down.png')} ml={30} tx='Tagihan' cl='black' tx2='Rp220.000' cl2='red' brc='red'/>
    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:5
    }}>
    <CustomCatatan img={require('../../assets/up.png')} ml={30} tx='Deposit' cl='black' tx2='Rp220.000' cl2='green' brc='green' mr2={20}/>
    <CustomCatatan img={require('../../assets/down.png')} ml={30} tx='Tagihan' cl='black' tx2='Rp220.000' cl2='red' brc='red'/>
    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:5
    }}>
    <CustomCatatan img={require('../../assets/up.png')} ml={30} tx='Deposit' cl='black' tx2='Rp220.000' cl2='green' brc='green' mr2={20}/>
    <CustomCatatan img={require('../../assets/down.png')} ml={30} tx='Tagihan' cl='black' tx2='Rp220.000' cl2='red' brc='red'/>
    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:5
    }}>
    <CustomCatatan img={require('../../assets/up.png')} ml={30} tx='Deposit' cl='black' tx2='Rp220.000' cl2='green' brc='green' mr2={20}/>
    <CustomCatatan img={require('../../assets/down.png')} ml={30} tx='Tagihan' cl='black' tx2='Rp220.000' cl2='red' brc='red'/>
    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:5
    }}>
    <CustomCatatan img={require('../../assets/up.png')} ml={30} tx='Deposit' cl='black' tx2='Rp220.000' cl2='green' brc='green' mr2={20}/>
    <CustomCatatan img={require('../../assets/down.png')} ml={30} tx='Tagihan' cl='black' tx2='Rp220.000' cl2='red' brc='red'/>
    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:5
    }}>
    <CustomCatatan img={require('../../assets/up.png')} ml={30} tx='Deposit' cl='black' tx2='Rp220.000' cl2='green' brc='green' mr2={20}/>
    <CustomCatatan img={require('../../assets/down.png')} ml={30} tx='Tagihan' cl='black' tx2='Rp220.000' cl2='red' brc='red'/>
    </View>

    <View style={{
      flexDirection:'row',
      justifyContent:'center',
      marginTop:5,
      marginBottom:10
    }}>
    <CustomCatatan img={require('../../assets/up.png')} ml={30} tx='Deposit' cl='black' tx2='Rp220.000' cl2='green' brc='green' mr2={20}/>
    <CustomCatatan img={require('../../assets/down.png')} ml={30} tx='Tagihan' cl='black' tx2='Rp220.000' cl2='red' brc='red'/>
    </View>

    </View>
    </ScrollView>
  )
}

export default Home;