import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment';

interface ILastConverted {
  base: string;
  quote: string;
  rate: number;
  date: Date;
}

const LastConverted = ({ base, quote, rate, date }: ILastConverted) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {`1 ${base} = ${rate} ${quote} as of ${moment(date).format(
        'MMMM, DD, YYYY',
      )}`}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});

export default LastConverted;
