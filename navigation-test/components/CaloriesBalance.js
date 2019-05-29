import React from 'react';
import { Block, Text } from '../base-components';
import { StatsList } from './StatsList'
import { colors } from '../constants/theme';


const mock = [
  {
    color: colors.orange,
    label: "Consumidas",
    total: "1700 cal"
  },
  {
    color: colors.redDark,
    label: "Gastas",
    total: "350 cal"
  },
  {
    color: colors.greenDark,
    label: "Gastas Repouso",
    total: "600 cal"
  }
];

export class CaloriesBalance extends React.Component {
  render() {
    return (
      <Block shadow padding={[0, 10]}>
        <Block row justifyContent='space-between' padding={[10, 0]}>
          <Text title bold center>{'Balanço total de calorias'}</Text>
          <Text title bold color={colors.purpleDark}>{'900 cal'}</Text>
        </Block>
        <StatsList list={mock} />
      </Block>
    )
  }
}
