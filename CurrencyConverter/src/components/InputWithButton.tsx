import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  KeyboardTypeOptions,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native';
import Touchable from './Touchable';

import { PRIMARY_BLUE, LIGHT_GRAY, GRAY, DARK_GRAY } from '../styles';

interface IInputWithButton {
  text: string;
  onPress(event: GestureResponderEvent): void;
  onChangeText?: (text: string) => void;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions;
  defaultValue?: string;
  value?: string;
}

const InputWithButton = ({
  text,
  onPress = () => void 0,
  onChangeText = () => void 0,
  editable = true,
  keyboardType,
  defaultValue,
  value,
}: IInputWithButton) => {
  const containerStyle: ViewStyle[] = [styles.container];
  if (editable === false) {
    containerStyle.push(styles.disabled);
  }
  return (
    <View style={containerStyle}>
      <Touchable
        pressColor={LIGHT_GRAY}
        onPress={onPress}
        style={styles.button}
      >
        <Text style={styles.text}>{text}</Text>
      </Touchable>
      <View style={styles.border} />
      <TextInput
        style={styles.input}
        defaultValue={defaultValue}
        value={value}
        editable={editable}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const HEIGHT = 50;
const BORDER_RADIUS = 4;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '80%',
    height: HEIGHT,
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    marginVertical: 10,
    overflow: 'hidden',
  },
  disabled: {
    backgroundColor: LIGHT_GRAY,
  },
  button: {
    height: HEIGHT,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    height: HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: GRAY,
  },
  text: {
    color: PRIMARY_BLUE,
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 10,
    color: DARK_GRAY,
  },
});

export default InputWithButton;
