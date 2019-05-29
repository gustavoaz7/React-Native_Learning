import React, { Component } from 'React';
import { View, Text, StyleSheet } from 'react-native';
import { background } from '../constants/Colors';

export class ScreenB extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.screenName}>ScreenB</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: background.b
  },
  screenName: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});
