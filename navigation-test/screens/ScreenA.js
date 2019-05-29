import React, { Component } from 'React';
import { ScrollView, StyleSheet } from 'react-native';
import { StatsSummary } from '../components/StatsSummary';

export class ScreenA extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <StatsSummary />
      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#eee',
    paddingHorizontal: 20,
  },
});
