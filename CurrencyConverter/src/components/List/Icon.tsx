import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../styles';

interface IIcon {
  visible?: boolean;
  checkmark?: boolean;
}

const Icon = ({ visible, checkmark }: IIcon) => {
  if (!visible) { 
    return null;
  }

  return (
    <View style={styles.icon}>
      {checkmark && (
        <Image
          style={styles.checkmark}
          resizeMode="contain"
          source={require('../../assets/check.png')}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    backgroundColor: PRIMARY_COLOR,
    width: 30,
    height: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    width: 18,
    height: 18,
  },
});

export default Icon;
