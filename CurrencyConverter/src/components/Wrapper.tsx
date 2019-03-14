import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface IWrapper {
  children: ReactNode;
}

const Wrapper = ({ children }: IWrapper) => (
  <View style={styles.wrapper}>{children}</View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4F6D7A',
  },
});

export default Wrapper;
