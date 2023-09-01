import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';


  const AreaMapa = () => {
    
    useEffect(() => {
      checkLocationPermission();
    }, []);
  
    const checkLocationPermission = async () => {
      try {
        const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (result === RESULTS.DENIED) {
          requestLocationPermission();
        }
      } catch (error) {
        console.log('Error checking location permission:', error);
      }
    };
  
    const requestLocationPermission = async () => {
      try {
        const result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        if (result === RESULTS.GRANTED) {
          console.log('Location permission granted.');
        } else {
          console.log('Location permission denied.');
        }
      } catch (error) {
        console.log('Error requesting location permission:', error);
      }
    };


      

  return (
     <MapView
  
        style={styles.container}
       initialRegion={{
        latitude:  -11.8638,
        longitude: -55.5298,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
        }}
        >


      <Marker
        coordinate={{
          latitude: -11.86380271574664,
          longitude: -55.51635312318693,
        }}
        title="TwSpeed"
        description="TwSpeed Sinop-MT"
      />
    </MapView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(46,139,87)',
    width: '90%',
    height: '37%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    opacity: 0.7,
  },
});

export default AreaMapa;