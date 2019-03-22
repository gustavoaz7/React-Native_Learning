import React from 'react';
import { View, StyleSheet } from 'react-native';

import { LIGHT_GRAY } from '../../styles';

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: LIGHT_GRAY,
  },
});

export default Separator;
