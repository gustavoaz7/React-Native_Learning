import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import Touchable from './Touchable';

interface IClearButton {
  text: string;
  onPress(event: GestureResponderEvent): void;
}

const ClearButton = ({ text, onPress = () => void 0 }: IClearButton) => (
  <Touchable onPress={onPress} style={styles.button} useOpacity>
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  </Touchable>
);

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
    tintColor: '#fff',
    margin: 10,
  },
  text: {
    color: '#fff',
  },
});

export default ClearButton;
