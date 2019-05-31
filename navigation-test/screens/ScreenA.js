import React, { Component } from 'React';
import { ScrollView, StyleSheet } from 'react-native';
import { StatsSummary } from '../components/StatsSummary';
import { CaloriesBalance } from '../components/CaloriesBalance';
import { NAV_PADDING } from '../components/CustomBottomNavigation';
import { SeparatorComponent } from '../components/SeparatorComponent';
import { colors } from '../constants/theme';

export class ScreenA extends Component {
  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.navPadding}>
        <StatsSummary />
        <SeparatorComponent />
        <CaloriesBalance />
      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  navPadding: {
    paddingBottom: NAV_PADDING,
  },
});
