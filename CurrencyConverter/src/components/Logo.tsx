import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const imageWidth = Dimensions.get('window').width * 0.8;

const Logo = () => (
  <View style={styles.container}>
    <Image
      source={require('../assets/logo.png')}
      resizeMode="contain"
      style={styles.image}
    />
    <Text style={styles.text}>{'Currency Converter'}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    tintColor: 'white',
    width: imageWidth,
    height: imageWidth,
  },
  text: {
    color: 'white',
    marginTop: 10,
    fontSize: 28,
    fontWeight: '600',
    zIndex: 2,
  },
});

export default Logo;
