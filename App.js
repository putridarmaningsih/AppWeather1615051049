// import React from 'react';
// import BelajarLayoutTugas from './src/comp/BelajarLayoutTugas'; //tempat import

// export default class App extends React.Component { //extends pewarisan
//   render() {
//     return ( //mengeluarkan apa yang dibuat
//         <BelajarLayoutTugas />
//     );
//   }
// }
import React from 'react';
import {
  StyleSheet,
    Text,
    TextInput,
    Button,
    AppRegistry,
    View } from 'react-native'; //tempat import


export default class AppWeather extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      kota: ' ',
      forecast: {
        main: '_',
        description: '_',
        temp: 0
      }
    };
  }
  getWeather= () => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.kota +
    '&appid=924e107439c46acba5409c9204b81fb0&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log (responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
    }
  );
  }
render() {
  return ( //mengeluarkan apa yang dibuat
    <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={{ padding: 10, fontSize: 20, textAlign: 'center' }} >Perkiraan Cuaca</Text>
      </View>
      <View style={styles.box2}>
        <Text style={{ padding: 10, fontSize: 20, textAlign: 'center' }} >
          Masukkan Nama Kota </Text>
        <TextInput
          style={{
            height: 50,
            width: 200,
            margin: 20,
            backgroundColor: 'white',
            textAlign: 'center'
        }}
          placeholder="Masukkan Kota"
          onChangeText={(kota) => this.setState({ kota })}
          keyboardType='ascii-capable'
        />
      <Button
      onPress={() => this.getWeather({})}
      title="Cari"
      accessibilityLabel="Cari"
      />
        </View>
        <View style={styles.box3}>
            <Text style={{ padding: 10, fontSize: 15 }} >
            Kota : {this.state.kota} {'\n'}
            Suhu : {this.state.forecast.temp} {'\n'}
            Cuaca : {this.state.forecast.main}{'\n'}
            Deskripsi: {this.state.forecast.description}{'\n'}
          </Text>
        </View>
        <View style={styles.box4}>
      <Text style={{ padding: 10, fontSize: 12, textAlign: 'center' }} > copyright@putriii_d </Text>
        </View>
      </View>
    );
  }
}
  const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: '#E8EAF6',
      flex: 1,
      flexDirection: 'column'
    },
    box1: {
      flex: 0.6,
      backgroundColor: '#00ACC1',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    box2: {
      flex: 1.5,
      marginTop: 20,
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: '#00ACC1',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    box3: {
      flex: 3,
      backgroundColor: '#BBDEFB',
      marginTop: 30,
      marginLeft: 20,
      marginRight: 20,
      flexDirection: 'row',
      //justifyContent: 'space-around',
      //alignItems: 'center'
    },
    box4: {
      flex: 0.6,
      backgroundColor: '#00ACC1',
      alignItems: 'center',
      marginTop: 20,
      justifyContent: 'space-around'
    },
  button: {
      height: 50,
      width: 50,
      backgroundColor: '#00C853',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 25
    },
  });
AppRegistry.registerComponent('AppForm2', () => AppWeather);
