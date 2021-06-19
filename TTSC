import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const speak = () => {
    const texto = 'Essa é a funcionalidade de Text to Speech Conversion do react';
    Speech.speak(texto);
  }; 


  return ( 
    <View style={styles.container}>
     
      <View style={ styles.style2 }>
          <Text style={ styles.style1 }  > IFAL</Text>
        </View>  
<View style={ styles.style3 }>
          <Text style={ styles.style4 }  > Text to Speech Conversion</Text>
        </View>  
      <Button title="Conhecendo as funcionalidades do React Native" color = '#FF0000' onPress={speak} />

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00FF00',
    padding: 8,
  },
   
    style1: {
    color: 'white',
    fontSize: 50,
    
    fontWeight: '900',
  },

   style2: {
    flexDirection: 'row',
    justifyContent: 'center', 
    height: 70,
    margin: 1,
  },
   style3: {
    flexDirection: 'row',
    justifyContent: 'center', 
    height: 50,
    margin: 1,
  },
  style4: {
    color: 'black',
    fontSize: 20,
    
    fontWeight: '900',
  },

});
