import React,{useState} from 'react';
import {View, Image, Dimensions, ScrollView, Linking, TouchableOpacity, Text} from 'react-native';
import CustomText from '../Custom/CustomText'
import CustomTitle from '../Custom/CustomTitle'
import CustomButton2 from '../Custom/CustomButton2'
import CustomImage from '../Custom/CustomImage'



const ig = () => {
  Linking.openURL('https://instagram.com/gentaglng/');
}

const p1 = () => {
  Linking.openURL('https://play.google.com/store/apps/details?id=com.dcproject.seket');
}

const p2 = () => {
  Linking.openURL('https://genta.dcproject.my.id/');
}

const wa = () => {
  Linking.openURL('https://wa.me/qr/ZFYKOT2S5ICTB1');
}

const portofolio = () => {
  const [jumlah1, setjumlah1] = useState(0);
  const [jumlah2, setjumlah2] = useState(0);
  const [jumlah3, setjumlah3] = useState(0);
  const [jumlah4, setjumlah4] = useState(0);
  return(
    <ScrollView style={{backgroundColor:'white'}}>
    <View style={{height:40}}>
      </View>
      <CustomText tx='My Portofolio' fw='bold' fs={20}/>
      <View style={{height:10}}>
      </View>

      <CustomImage img={require('../../assets/pp.jpeg')} h={200} w={200} br={20} alg='center'/>
      <View style={{height:10}}>
      </View>

      <CustomText tx='Saya adalah siswa kelas XII RPL SMK Telkom Purwokerto dan berminat menjadi mobile programming yang handal' fs={15}/>

      <View style={{height:20}}>
      </View>

      <CustomTitle tx='My Contact'/>
      <View style={{height:10}}>
      </View>
      <View style={{flexDirection:'row', justifyContent:'center'}}>
      <CustomButton2 tx='IG' op={ig} cl='pink' img={require('../../assets/ig.png')}/>
      <CustomButton2 tx='WA' op={wa} cl='lightgreen' mh={10} img={require('../../assets/wa.png')}/>
     
      </View>

      <View style={{height:20}}>
      </View>

      <CustomTitle tx='My Project'/>
      <View style={{height:10}}>
      </View>

      <View style={{flexDirection:'row', marginLeft:10}}>
        <TouchableOpacity onPress={()=>setjumlah3(jumlah3+1)}>
          <Image
          source={require('../../assets/naik.png')}
          style={{height:25, width:25}}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setjumlah4(jumlah4+1)}>
          <Image
          source={require('../../assets/bawah.png')}
          style={{height:25, width:25}}
        />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', marginLeft:19}}>
        <Text style={{fontWeight:'bold', marginRight:16}}>
          {jumlah3}
        </Text>
        <Text style={{fontWeight:'bold'}}>
          {jumlah4}
        </Text>
      </View>

      <TouchableOpacity onPress={p1}>
      <View style={{height:165, width:230, backgroundColor:'lightgrey', borderRadius:20, alignSelf:'center'}}>
      <CustomImage img={require('../../assets/project.jpeg')} h={150} w={200} br={20} alg='center'/>
      </View>
      </TouchableOpacity>

      <CustomText tx='SeKet App' fw='bold' fs={15}/>
      <CustomText tx='SeKet merupakan Secondhand Marketplace, dimana aplikasi ini menjadi perantara jual beli barang-barang bekas' fs={15}/>

      <View style={{height:10}}>
      </View>

      <View style={{flexDirection:'row', marginLeft:10}}>
        <TouchableOpacity onPress={()=>setjumlah1(jumlah1+1)}>
          <Image
          source={require('../../assets/naik.png')}
          style={{height:25, width:25}}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setjumlah2(jumlah2+1)}>
          <Image
          source={require('../../assets/bawah.png')}
          style={{height:25, width:25}}
        />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', marginLeft:19}}>
        <Text style={{fontWeight:'bold', marginRight:16}}>
          {jumlah1}
        </Text>
        <Text style={{fontWeight:'bold'}}>
          {jumlah2}
        </Text>
      </View>

      <TouchableOpacity onPress={p2}>
      <View style={{height:165, width:230, backgroundColor:'lightgrey', borderRadius:20, alignSelf:'center'}}>
      <CustomImage img={require('../../assets/project2.png')} h={150} w={200} br={20} alg='center'/>
      </View>
      </TouchableOpacity>
      <CustomText tx='SeKet Web' fw='bold' fs={15}/>
      <CustomText tx='Selain aplikasi android, seket juga hadir dalam bentuk website yang bisa kalian kunjungi' fs={15}/>
      <View style={{height:20}}>
      </View>
    </ScrollView>
  )
};

export default portofolio;