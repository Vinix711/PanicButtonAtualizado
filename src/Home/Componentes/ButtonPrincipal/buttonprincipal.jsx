import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Pulse from 'react-native-pulse';
import LinearGradient from 'react-native-linear-gradient';


const ButtonPress = () => {
  const [countdown, setCountdown] = useState(3);
  const [ativo, setAtivo] = useState(false);
  const timerRef = useRef(null);
 // const pulseButton = useEffect (false);



  useEffect(() => {
    if (countdown === 0) {
      console.log('Localização Enviada!');
      setAtivo(true);
    }
  }, [countdown]);

  const handleButtonPressDown = () => {
    setCountdown(3);
    timerRef.current = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);
  };

  const handleButtonPressOut = () => {
    clearInterval(timerRef.current);
  };

  const handleDesative = () => {
    if (ativo) {
      setAtivo(false);
     
      console.log('Localização Desativada!');
    }
  };

  

  return (



    <View style={styles.container}>
      {countdown > 0 && (
        <Text style={styles.countdownText}>{countdown}</Text>
      )}
     {/* <LinearGradient
    colors={['#ff0000', '#ff8419', '#ff3a0a', '#ff3801', '#dd5035']}
    style={styles.areaLinear}
    > */}
    
      <TouchableOpacity
        style={styles.button}
        onLongPress={handleButtonPressDown}
        onPressIn={handleDesative}
        onPressOut={() => setCountdown (null)}
      >
        
      {ativo && countdown ? ( //se (ativo) for falso (!) quero que ele pare de pulsar
        <Pulse
          color="#d54100" // Cor da pulsação
          numPulses={2} // Número de pulsações
          diameter={200} // Diâmetro da pulsação
          speed={5} // Velocidade da pulsação
          />): true }

      
        <Text style={styles.buttonLabel}>{ativo ? 'DESATIVAR' : 'PRESSIONE'}</Text>

      </TouchableOpacity>
    
      {/* </LinearGradient> */}

    </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99, 


  },
  countdownText: {
    fontSize: 33,
    marginBottom: 20,
    position: 'absolute',
    top: '17%',
    fontWeight: 700,
  },
  button: {
    width: 180,
    height: 180,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    top: '16%',

  },
  buttonLabel: {
    color: '#ffd7d5',
    fontSize: 27,
    textAlign: 'center',
    fontWeight: 700,
  },

  // areaLinear: {
  //   borderRadius: 100,  
  
  // },
});


export default ButtonPress;

