/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class PreparationProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hallo ini adalah profilku!
        </Text>
        <Image source={require('./img/me.png')} style={{width: 300, height: 300}} />
        <Text style={styles.identitas}>
          Nama saya Muhammad Ari Anggara, {'\n'}
          Bacth 2 Refactory : Team Basilichi.
        </Text>
        <Text style={styles.gaya}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  identitas: {
    fontSize: 15,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  gaya: {
    fontSize:3,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PreparationProject', () => PreparationProject);
