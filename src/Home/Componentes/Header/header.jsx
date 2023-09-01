import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Header = ({ name }) => {
  return (
    // <LinearGradient
    // colors={['#ff0000', '#ff8419', '#ff5a0a', '#ff4001', '#dd5035']}
    // style={styles.cabecalho}
    // >
    <View style={styles.cabecalho}>


    <Text style={styles.backButton}>backButton</Text>

    <Text style={styles.namePage}>PanicButton</Text>

    {/* <Text style={styles.textoheader}> CASO PRECISE, PRESSIONE O BOTÃO ABAIXO: </Text> */}


    </View>
    // </LinearGradient>
  )
}

export default Header

const styles = StyleSheet.create ({
    cabecalho: {
        top: '0%',
        height: '10%',
        backgroundColor: '#f36e2d',
        
    },

    textoheader:{
      top: '35%',
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold', 
      color: '#ffd7d5',
    },

    backButton:{
        top: '73%',
    },  
    
    namePage: {
      left: '25%',
      top: '55%', 
    }
})