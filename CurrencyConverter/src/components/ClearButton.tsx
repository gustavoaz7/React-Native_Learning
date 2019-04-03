import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import Touchable from './Touchable';
import { useReduxState } from '../hooks/useReduxState';
import { colorSelector } from '../redux/selectors/theme';

interface IClearButton {
  text: string;
  onPress(event: GestureResponderEvent): void;
}

const ClearButton = ({ text, onPress = () => void 0 }: IClearButton) => {
  const color = useReduxState(colorSelector);
  return (
    <Touchable onPress={onPress} style={styles.button} useOpacity>
      <View style={styles.container}>
        <Image
          source={require('../assets/logo.png')}
          resizeMode="contain"
          style={[styles.image, { tintColor: color }]}
        />
        <Text style={{ color }}>{text}</Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 4,
    overflow: 'hidden',
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 20,
    height: 20,
    margin: 10,
  },
});

export default ClearButton;
