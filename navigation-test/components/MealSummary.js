import React from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Block, Text } from "../base-components";
import { colors } from "../constants/theme";
import CollapsableContent from "./CollapsableContent";

const MEAL_MAP = {
  breakfast: {
    mealName: 'Café da Manhã',
    mealOrder: 'PRIMEIRA',
    minCal: 300,
    maxCal: 600,
  },
  lunch: {
    mealName: 'Almoço',
    mealOrder: 'SEGUNDA',
    minCal: 300,
    maxCal: 600,
  },
  snack: {
    mealName: 'Lanche',
    mealOrder: 'TERCEIRA',
    minCal: 300,
    maxCal: 600,
  },
  dinner: {
    mealName: 'Jantar',
    mealOrder: 'QUARTA',
    minCal: 300,
    maxCal: 600,
  },
  supper: {
    mealName: 'Ceia',
    mealOrder: 'QUINTA',
    minCal: 300,
    maxCal: 600,
  },
}

export class MealSummary extends React.Component {
  state = {
    totalCalories: 0,
  }

  componentDidMount() {
    const totalCalories = this.props.consumedFoods.reduce((acc, cur) => acc + cur.calories, 0);
    this.setState({ totalCalories });
  }

  // addFood = food => {
  //   this.setState(prevState => ({ totalCalories: prevState.totalCalories + food.calories }))
  // }

  keyExtractor = (item, index) => item.title + index;

  renderItem = ({ item }) => (
    <Block row style={styles.itemWrapper}>
      <Block row flex={1}>
        <Text size={25}>{item.icon}</Text>
        <Block flex={1} padding={[0, 0, 0, 20]} row justifyContent='space-between'>
          <Block>
            <Text title bold>{item.title}</Text>
            <Text color={colors.gray}>{item.description}</Text>
          </Block>
          <Block >
            <Text title bold>{`${item.calories} cal`}</Text>
            <TouchableOpacity onPress={() => { }} style={styles.changeMeal}>
              <Text color={colors.purpleDark}>{'Trocar'}</Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </Block>
    </Block>
  );

  renderSeparator = () => <Block style={styles.separator} />;

  render() {
    const { consumedFoods, meal } = this.props;
    const { mealName, mealOrder, minCal, maxCal } = MEAL_MAP[meal];
    return (
      <CollapsableContent title={`${mealOrder} REFEIÇÃO`} style={{ flex: 1, padding: 10 }}>
        <Block row alignItems="center" justifyContent='space-between'>
          <Block justifyContent='space-between'>
            <Text header bold color={colors.orange}>{mealName}</Text>
            <Text height={17} color={colors.gray} height={17}>{`Recomendado ${minCal} - ${maxCal} cal`}</Text>
          </Block>
          <Text title bold color={colors.purpleDark}>{`${this.state.totalCalories} cal`}</Text>
        </Block>
        <FlatList
          data={consumedFoods}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
          style={styles.flatlist}
        />
        <Block row justifyContent={'flex-end'}>
          <Block flex={1} />
          <TouchableOpacity onPress={() => { }} style={styles.touchable}>
            <Text color={colors.orange}>{'Finalizar'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }} style={styles.touchable}>
            <Text color={colors.green}>{'+ Alimento'}</Text>
          </TouchableOpacity>
        </Block>
      </CollapsableContent>
    );
  }
}

const styles = StyleSheet.create({
  flatlist: {
    borderBottomColor: colors.grayLight,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  itemWrapper: {
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 6,
  },
  changeMeal: {
    paddingVertical: 6,
    marginTop: 4,
    alignItems: 'flex-end',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.grayLight,
    marginHorizontal: 6,
  },
  touchable: {
    padding: 6,
    flex: 1,
    justifyContent: 'flex-end',
  }
});
