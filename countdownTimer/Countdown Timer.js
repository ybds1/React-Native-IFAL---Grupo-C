import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

const App = () => {
  const [totalDuration, setTotalDuration] = useState(0);

  useEffect(() => {

    var date = moment().utcOffset('+0:00').format('YYYY-MM-DD hh:mm:ss');
    var expirydate = '2021-06-20 10:30:00'; 
    var diffr = moment.duration(moment(expirydate).diff(moment(date)));
    var hours = parseInt(diffr.asHours());
    var minutes = parseInt(diffr.minutes());
    var seconds = parseInt(diffr.seconds());
    var d = hours * 60 * 60 + minutes * 60 + seconds;
    setTotalDuration(d);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Tempo restante para o término da avaliação bimestral
        </Text>
        <CountDown
           until={totalDuration}
          timetoShow={('H', 'M', 'S')}
          onFinish={() => alert('Tempo esgotado')}
          onPress={() => alert('Cronômetro RN')}
          size={25}
          
        digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#FF0000'}}

        timeLabels={{d:'dias',h:'horas',m: 'min', s: 'seg'}}
 
        />
         <Text style={styles.style1}>
          Disciplina: Programação Móvel
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
    padding: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 20,
    
  },
   style1: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    padding: 20,
    
  },
});
