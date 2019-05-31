import React, { Component } from 'React';
import { ScrollView, StyleSheet } from 'react-native';
import { StatsSummary } from '../components/StatsSummary';
import { CaloriesBalance } from '../components/CaloriesBalance';
import { NAV_PADDING } from '../components/CustomBottomNavigation';
import { SeparatorComponent } from '../components/SeparatorComponent';
import { colors } from '../constants/theme';
import { MealSummary } from '../components/MealSummary';


const mockDailyMeal = [
  {
    icon: '☕',
    title: 'Latte Macchiato',
    description: '1 xícara 200ml',
    calories: 190,
  },
  {
    icon: '🍕',
    title: 'Pizza Mussarela',
    description: '1 fatia 300g',
    calories: 190,
  },
]

export class ScreenA extends Component {
  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.navPadding}>
        <MealSummary consumedFoods={mockDailyMeal} meal="breakfast" />
        <SeparatorComponent />
        <MealSummary consumedFoods={mockDailyMeal} meal="lunch" />
        <SeparatorComponent />
        <MealSummary consumedFoods={mockDailyMeal} meal="snack" />
        <SeparatorComponent />
        <MealSummary consumedFoods={mockDailyMeal} meal="dinner" />
        <SeparatorComponent />
        <MealSummary consumedFoods={mockDailyMeal} meal="supper" />
        <SeparatorComponent />
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
