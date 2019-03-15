import React, { ReactNode } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

interface IWrapper {
  children: ReactNode;
}

function dismissKeyboard() {
  Keyboard.dismiss();
}

const Wrapper = ({ children }: IWrapper) => (
  <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={styles.wrapper}>{children}</View>
  </TouchableWithoutFeedback>
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
