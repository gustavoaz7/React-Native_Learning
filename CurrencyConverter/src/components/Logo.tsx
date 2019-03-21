import React, { useEffect, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet, Animated } from 'react-native';
import useKeyboard, { KeyboardType } from '../hooks/useKeyboard';

const DEFAULT_SIZE = Dimensions.get('window').width * 0.7;

const useAnimate = (keyboardStatus: KeyboardType) => {
  const imageSize = useRef(new Animated.Value(DEFAULT_SIZE)).current;
  const value = keyboardStatus === 'hide' ? DEFAULT_SIZE : DEFAULT_SIZE / 2;

  const animate = () => {
    Animated.timing(imageSize, {
      toValue: value,
      duration: 250,
    }).start();
  };
  useEffect(animate);

  return imageSize;
};

const Logo = () => {
  const keyboardStatus = useKeyboard();
  const imageSize = useAnimate(keyboardStatus);

  const imageStyle = [styles.image, { width: imageSize, height: imageSize }];

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/logo.png')}
        resizeMode="contain"
        style={imageStyle}
      />
      <Text style={styles.text}>{'Currency Converter'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    tintColor: 'white',
  },
  text: {
    color: 'white',
    marginVertical: 10,
    fontSize: 28,
    fontWeight: '600',
    zIndex: 2,
  },
});

export default Logo;
