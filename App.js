import React, {Component} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Capsalera } from './src/components/Capsalera/Capsalera';
import { Imatges } from './src/components/Imatges/Imatges';


const localImg = require('./imatges/visualstudio_code-card.png');
export default class App extends Component {
  render() {
    return (
    <View style={styles.container}>
      <Capsalera/>
      <Imatges/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // borderColor: 'red',
    // borderWidth: 3,
    margin: 4,
  },
});
