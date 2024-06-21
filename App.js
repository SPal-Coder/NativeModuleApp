import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import ABC from './CustomModule'; 

const App = () => {
  const [deviceId,setDeviceId]=useState('')

  ABC.show()
   useEffect(()=>{
    const fetchDeviceId= async ()=>{
      const id = await ABC.getDeviceId();
      setDeviceId(id)
    }
      fetchDeviceId()
   },[])
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'#000',fontSize:16
      }}>Get Device id from Native module</Text>
      <Text style={{color:'#000',fontSize:16,marginTop:6
      }}>Device id is: {deviceId}</Text>
    </View>
  );
};

export default App;

