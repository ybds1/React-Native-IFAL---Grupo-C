import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TimePicker from 'react-native-simple-time-picker';

const App = () => {
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>

        <Text style={styles.title}>
          Selecione o tempo de duração da avaliação
        </Text>
       
        <TimePicker
          selectedHours={selectedHours}
          selectedMinutes={selectedMinutes}
          onChange={(hours, minutes)=> {
            setSelectedHours(hours);
            setSelectedMinutes(minutes);
        
          }}
         
        />
         <Text style={styles.style1}>
          Tempo definido: {selectedHours}h{selectedMinutes}min
        </Text>
        <Text style={styles.style1}>
          Disciplina: Programação móvel
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00FF00',
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 2,
  },
  style1: {
    textAlign: 'center',
    fontSize: 20,
   color:'red',
    padding: 2,
  },


});
