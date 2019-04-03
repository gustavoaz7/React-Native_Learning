import React, { ReactNode } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

interface IWrapper {
  children: ReactNode;
  backgroundColor: string;
}

function dismissKeyboard() {
  Keyboard.dismiss();
}

const Wrapper = ({ children, backgroundColor }: IWrapper) => {
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={[styles.wrapper, { backgroundColor }]}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Wrapper;
