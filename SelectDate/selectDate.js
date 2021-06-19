import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { TextInputMask } from 'react-native-masked-text';
import moment from 'moment';

export default class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { date: null, dt: null, registrationDate: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInputMask
          style={{
            textAlign: 'center',
            width: 300,
            backgroundColor: 'white',
            padding: 10,
            marginBottom: 30,
            borderWidth: 1,
            borderColor: 'black',
            paddingHorizontal: 30,
          }}
          placeholder="DD/MM/YYYY"
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY',
          }}
          value={this.state.dt}
          onChangeText={(text) => {
            this.setState({
              dt: text,
            });
          }}
          // add the ref to a local var
          ref={(ref) => (this.datetimeField = ref)}
        />

        <DatePicker
          showIcon={false}
          androidMode="spinner"
          style={{ width: 300 }}
          date={this.state.date}
          mode="date"
          placeholder="DD/MM/YYYY"
          format="DD-MM-YYYY"
          maxDate={moment().format('DD-MM-YYYY')}
          confirmBtnText="Chọn"
          cancelBtnText="Hủy"
          customStyles={{
            dateInput: {
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: 'black',
            },
          }}
          onDateChange={(date) => {
            this.setState({ date: date });
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 16,
  },
});
