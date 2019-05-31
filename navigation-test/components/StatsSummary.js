import React from 'react';
import { StyleSheet } from 'react-native';
import * as Progress from "react-native-progress";
import { window } from "../constants/layout";
import { Block, Text } from '../base-components';
import { StatsList } from './StatsList'
import CollapsableContent from './CollapsableContent';
import { colors } from '../constants/theme';


const OUTER_RADIUS = window.width * 0.7;

const mock = [
  {
    color: colors.orange,
    label: "Carboidrato",
    quantity: "100 g",
    total: "32%"
  },
  {
    color: colors.purpleDark,
    label: "Proteína",
    quantity: "90 g",
    total: "40%"
  },
  {
    color: colors.greenDark,
    label: "Gordura",
    quantity: "100 g",
    total: "32%"
  },
  {
    color: colors.redDark,
    label: "Calorias",
    quantity: "390 cal",
    total: "32%"
  }
];

export class StatsSummary extends React.Component {
  render() {
    return (
      <CollapsableContent title="RESUMO ESTATÍSTICAS">
        <Block alignItems='center'>
          <Text header bold center style={{ marginVertical: 10 }}>
            {"Você já consumiu \n"}
            <Text color={colors.purpleDark}>{"500 cal"}</Text>
            {" hoje"}
          </Text>

          <Progress.Circle
            style={{ position: "relative", marginVertical: 10 }}
            size={OUTER_RADIUS}
            thickness={12}
            progress={0.4}
            color={colors.redDark}
            strokeCap="round"
            unfilledColor={colors.whiteDark}
            borderWidth={0}
          >
            <Progress.Circle
              style={{ position: "absolute", left: 15, bottom: 15 }}
              size={OUTER_RADIUS - 30}
              thickness={12}
              progress={0.32}
              color={colors.orange}
              strokeCap="round"
              unfilledColor={colors.whiteDark}
              borderWidth={0}
            />
            <Progress.Circle
              style={{ position: "absolute", left: 30, bottom: 30 }}
              size={OUTER_RADIUS - 60}
              thickness={12}
              progress={0.4}
              color={colors.purpleDark}
              strokeCap="round"
              unfilledColor={colors.whiteDark}
              borderWidth={0}
            />
            <Progress.Circle
              style={{ position: "absolute", left: 45, bottom: 45 }}
              size={OUTER_RADIUS - 90}
              thickness={12}
              progress={0.4}
              color={colors.greenDark}
              strokeCap="round"
              unfilledColor={colors.whiteDark}
              borderWidth={0}
            />
            <Block
              style={styles.dailyGoal}
            >
              <Text bold style={styles.goalPercentage}>{'40%'}</Text>
              <Text color={colors.gray}>{'da meta diária'}</Text>
            </Block>
          </Progress.Circle>
        </Block>
        <StatsList list={mock} style={styles.statsList} />
      </CollapsableContent>
    )
  }
}


const styles = StyleSheet.create({
  dailyGoal: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  goalPercentage: {
    fontSize: 32,
  },
  statsList: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});