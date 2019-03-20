import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Platform,
  GestureResponderEvent,
} from 'react-native';
import Touchable from './Touchable';

interface IHeader {
  onPress(event: GestureResponderEvent): void;
}

const Header = ({ onPress = () => void 0 }: IHeader) => (
  <View style={styles.container}>
    <View style={styles.button}>
      <Touchable onPress={onPress} useOpacity>
        <Image
          resizeMode="contain"
          source={require('../assets/gear.png')}
          style={styles.image}
        />
      </Touchable>
    </View>
  </View>
);

const gearSize = 20;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  button: {
    alignSelf: 'flex-end',
    borderRadius: gearSize,
    overflow: 'hidden',
    marginRight: 10,
    ...Platform.select({
      ios: {
        marginTop: 20,
      },
      android: {
        marginTop: 6,
      },
    }),
  },
  image: {
    width: gearSize,
    height: gearSize,
    margin: 6,
  },
});

export default Header;
