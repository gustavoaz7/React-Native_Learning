import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface IIcon {
  visible?: boolean;
  checkmark?: boolean;
  backgroundColor?: string;
}

const Icon = ({ visible, checkmark, backgroundColor }: IIcon) => {
  if (!visible) {
    return null;
  }
  const iconStyle = [styles.icon, { backgroundColor }];
  return (
    <View style={iconStyle}>
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
