import React from 'react';
import { StyleSheet } from 'react-native';
import * as Progress from "react-native-progress";
import { window } from "../constants/Layout";
import { Block, Text } from '../base-components';
import { StatsList } from './StatsList'
import CollapsableContent from './CollapsableContent';

const OUTER_RADIUS = window.width * 0.7;

const mock = [
  {
    color: "orange",
    label: "Carboidrato",
    quantity: "100 g",
    total: "32%"
  },
  {
    color: "purple",
    label: "Carbs",
    quantity: "100 g",
    total: "32%"
  },
  {
    color: "green",
    label: "Carbs",
    quantity: "100 g",
    total: "32%"
  },
  {
    color: "blue",
    label: "Calorias",
    quantity: "390 cal",
    total: "32%"
  }
];

export class StatsSummary extends React.Component {
  render() {
    return (
      <CollapsableContent title="RESUMO ESTATÍSTICAS">
        <Text header>
          {"Você já consumiu "}
          <Text color="#7265E3">{"500 cal"}</Text>
          {" hoje"}
        </Text>
        {/* <Progress.Pie progress={0.4} size={50} /> */}
        <Progress.Circle
          style={{ position: "relative", marginVertical: 10 }}
          size={OUTER_RADIUS}
          thickness={12}
          progress={0.5}
          color="#F90068"
          strokeCap="round"
          unfilledColor="#F4F6FA"
          borderWidth={0}
        >
          <Progress.Circle
            style={{ position: "absolute", left: 15, bottom: 15 }}
            size={OUTER_RADIUS - 30}
            thickness={12}
            progress={0.5}
            color="#FFA56C"
            strokeCap="round"
            unfilledColor="#F4F6FA"
            borderWidth={0}
          />
          <Progress.Circle
            style={{ position: "absolute", left: 30, bottom: 30 }}
            size={OUTER_RADIUS - 60}
            thickness={12}
            progress={0.5}
            color="#7265E3"
            strokeCap="round"
            unfilledColor="#F4F6FA"
            borderWidth={0}
          />
          <Progress.Circle
            style={{ position: "absolute", left: 45, bottom: 45 }}
            size={OUTER_RADIUS - 90}
            thickness={12}
            progress={0.5}
            color="#3EC8BC"
            strokeCap="round"
            unfilledColor="#F4F6FA"
            borderWidth={0}
          />
          <Block
            style={styles.dailyGoal}
          >
            <Text header>{'40%'}</Text>
            <Text>{'da meta diária'}</Text>
          </Block>
        </Progress.Circle>
        <StatsList list={mock} />
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
  }
});