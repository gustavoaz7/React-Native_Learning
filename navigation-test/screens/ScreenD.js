import React, { Component } from 'React';
import { View, Text, StyleSheet } from 'react-native';
import { background } from '../constants/theme';

export class ScreenD extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.screenName}>ScreenD</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: background.d
  },
  screenName: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});
