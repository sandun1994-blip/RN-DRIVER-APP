import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from "@env"
import Entypo from 'react-native-vector-icons/Entypo'
import { useState } from 'react';

export const HomeScreen = () =>{ 
  
 const [isOnline,setIsOnline] =useState(false)
  
const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
  
  const onGoPress=()=>{
setIsOnline(!isOnline)
  }
  
  return (


  <View style={styles.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      showsUserLocation={true}
      showsMyLocationButton={true}
     
      style={styles.map}
      region={{
        latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0292,
          longitudeDelta: 0.0121,
      }}
      zoomControlEnabled={true}
    >
       <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={4}
    strokeColor="hotpink"
    
  />
    </MapView>

    <Pressable onPress={()=>console.log('go')} style={{...styles.blanceButton,right:Dimensions.get('window').width/2-37}}>
<Text style={styles.blanceText}>
  <Text style={{color:'green'}}>$</Text>
  
  {''} 0.00</Text>
</Pressable>










<Pressable onPress={()=>console.log('uo')} style={{...styles.roundButton,top:10,left:10}}>
<Entypo name={"menu"} color='red' size={24}/>
</Pressable>

<Pressable onPress={()=>console.log('uo')} style={{...styles.roundButton,top:10,right:10}}>
<Entypo name={"menu"} color='red' size={24}/>
</Pressable>

<Pressable onPress={()=>console.log('uo')} style={{...styles.roundButton,bottom:110,left:10}}>
<Entypo name={"menu"} color='red' size={24}/>
</Pressable>

<Pressable onPress={()=>console.log('uo')} style={{...styles.roundButton,bottom:110,right:10}}>
<Entypo name={"menu"} color='red' size={24}/>
</Pressable>



<Pressable onPress={onGoPress} style={{...styles.goButton,bottom:110,right:Dimensions.get('window').width/2-37}}>
<Text style={styles.goText}>{isOnline?'END':'GO'}</Text>
</Pressable>


    <View style={styles.bottomContainer}>
      <Entypo name={"menu"} color='red' size={24}/>
      {
        isOnline?<Text style={styles.bottomText}>You're online</Text>:
        <Text style={styles.bottomText}>You're offline</Text>
      }
     
      <Entypo name={"menu"} color='red' size={24}/>
    </View>
  </View>
)};





const styles = StyleSheet.create({
  map: {

    height: Dimensions.get('window').height-150,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
 bottomContainer:{
height:100,
backgroundColor:'white',
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
padding:10
  },bottomText:{
fontSize:22,
fontWeight:'bold',
color:'grey'
  },
  roundButton:{
position:'absolute',
backgroundColor:'white',
padding:10,borderRadius:25
  },
  goText:{
fontSize:30,
color:'white',
fontWeight:'bold'
  },
  goButton:{
    position:'absolute',
backgroundColor:'#1495ff',
padding:15,
borderRadius:35,

  },
  blanceText:{
    fontSize:20,
color:'white',
fontWeight:'bold'
  },
  blanceButton:{
    position:'absolute',
    backgroundColor:'#1c1c1c',
    padding:10,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    top:10,
    width:100,
    height:50
  }
});
