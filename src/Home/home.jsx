import { View, StyleSheet, Platform, Permissions } from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
// import Nameuser from './Componentes/Nameuser/nameuser';
import ButtonPress from './Componentes/ButtonPrincipal/buttonprincipal';
import { Degradefundo } from './Componentes/DegradePg/degradepg';
import AreaMapa from './Componentes/AreaMapa/areamapa';
import { PermissionsAndroid, PermissionsIOS } from 'react-native-permissions';
import LowerPart from './LowerPart/lowerpart';
import Header from './Componentes/Header/header';


 export default function Home() {


    
  return (

      
    // <Degradefundo
  
    // colors={['rgba(255, 0, 0, 0.7)', 'rgba(0, 0, 255, 0.1)']}
    //  > 

    <View style={styles.home}>  
    <Header/>
    {/* <Nameuser /> */}

    <ButtonPress/>

    <AreaMapa />  

    <LowerPart/>
    </View>
    // </Degradefundo>
  );
};

const styles = StyleSheet.create ({
  home:{
    backgroundColor: '#f38c49',
    width: '100%',
    height: '100%',
  }
  })


