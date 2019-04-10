import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import { useReduxState } from '../hooks/useReduxState';
import { colorSelector } from '../redux/selectors/theme';

interface ILastConverted {
  base: string;
  quote: string;
  rate: number;
  date: Date;
}

const LastConverted = ({ base, quote, rate, date }: ILastConverted) => {
  const color = useReduxState(colorSelector);
  return (
    <View style={styles.container}>
      <Text style={{ color }}>
        {`1 ${base} = ${rate} ${quote} as of ${dayjs(date).format(
          'MMMM, DD, YYYY',
        )}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default LastConverted;
